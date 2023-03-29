import React, { useState } from 'react'
import { ArrowIcon } from './icons'

import styles from './index.module.scss'

export const SubscribeWrap: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')

  const handleClick = () => {
    const e = document.getElementById('mc-embedded-subscribe-form') as HTMLFormElement
    e.submit()
  }

  return (
    <form
      action="https://nervos.us18.list-manage.com/subscribe/post?u=2ca40f7277e9b778c24f9aaaf&amp;id=dd5ad78e15"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className={styles.formWrap}
      target="_self"
      noValidate
    >
      <div className={styles.inputWrap}>
        <input
          type="text"
          value={firstName}
          name="FNAME"
          id="mce-FNAME"
          placeholder="First Name*"
          onChange={e => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputWrap}>
        <input
          type="email"
          value={emailAddress}
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="Your Email*"
          onChange={e => setEmailAddress(e.target.value)}
          required
        />
        <div className={styles.arrowIcon} onClick={handleClick}>
          <ArrowIcon />
        </div>
      </div>

      <div style={{ display: 'none' }}>
        <div id="mce-responses" className="clear foot">
          <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
        </div>
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_2ca40f7277e9b778c24f9aaaf_dd5ad78e15" tabIndex={-1} value="" readOnly />
        </div>
        <div className="clear foot">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
            hidden
          />
        </div>
      </div>
    </form>
  )
}
