import clsx from 'clsx'
import { Blog } from '../../../utils/blogs'
import styles from './index.module.scss'

type Props = { post: Blog; isShow: boolean; className?: string }

const ExpandedAuthors = ({ post, isShow, className }: Props) => {
  if (!isShow) {
    return null
  }
  return (
    <div className={clsx(styles.expandedAuthors, className)}>
      {[...post.authors].map(({ name, avatar }) => (
        <div className={styles.expandedAuthorItem} key={`expanded-author-item-${name}`}>
          <div className={styles.expandedAuthorAvatar}>
            <img src={avatar} />
          </div>
          <div>{name}</div>
        </div>
      ))}
    </div>
  )
}

export default ExpandedAuthors
