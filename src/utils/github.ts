export type Author = Record<'username' | 'avatar' | 'github', string>
export type LastAuthor = Author & { editTime: string }

export const REPO = process.env.NEXT_PUBLIC_REPO!

const token = process.env.GITHUB_TOKEN

export const fetchContributors = async (): Promise<Array<Author>> => {
  const RPC_URL = 'https://api.github.com/repos/magickbase/nervos-official-website/contributors'
  try {
    return await fetch(RPC_URL, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    })
      .then(res => res.json())
      .then((list: Array<Record<'login' | 'avatar_url' | 'html_url', string>>) =>
        list.map(item => ({
          username: item.login,
          avatar: item.avatar_url,
          github: item.html_url,
        })),
      )
  } catch {
    return []
  }
}

export const lastContributor = async (path: string): Promise<LastAuthor | null> => {
  const RPC_URL = `https://api.github.com/repos/magickbase/nervos-official-website/commits?path=${path}`
  try {
    const commit = await fetch(RPC_URL, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    })
      .then(res => res.json())
      .then(
        (
          commits: Array<{
            author: Record<'login' | 'html_url' | 'avatar_url', string>
            commit: {
              author: {
                date: string
              }
            }
          }>,
        ) => commits[0],
      )

    if (!commit) return null

    return {
      username: commit.author.login,
      avatar: commit.author.avatar_url,
      github: commit.author.html_url,
      editTime: commit.commit.author.date,
    }
  } catch {
    return null
  }
}
