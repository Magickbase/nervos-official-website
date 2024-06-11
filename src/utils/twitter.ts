const REGEXP = /https:\/\/twitter\.com\/\w+\/status\/(\d+)/

export const getStatusId = (url: string) => {
  const match = url.match(REGEXP)
  return match?.[1] || null
}
