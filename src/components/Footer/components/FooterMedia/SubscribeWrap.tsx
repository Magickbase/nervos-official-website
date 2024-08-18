import React, { useState } from 'react'
import { api } from 'src/utils'
import { ArrowIcon } from './icons'

import styles from './index.module.scss'

export const SubscribeWrap: React.FC = () => {
  const [result, setResult] = useState<'success' | 'fail' | null>(null)
  const { mutateAsync } = api.newsLetter.signup.useMutation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const elm = e.currentTarget
    if (!(elm instanceof HTMLFormElement)) return

    const firstName: string = elm.fname instanceof HTMLInputElement ? elm.fname.value : ''
    const email: string = elm.email instanceof HTMLInputElement ? elm.email.value : ''
    if (!firstName || !email) return
    mutateAsync({ email, firstName })
      .then(res => {
        if (res.success) {
          setResult('success')
        } else {
          throw new Error('Failed to subscribe')
        }
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          window.alert(`${e.message}, please contact media@nervos.org`)
        } else {
          window.alert('Failed to subscribe, please contact')
        }
      })
  }

  if (result === 'success') {
    return <div className={styles.subscribed}>Thank you for subscription!</div>
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formWrap}>
      <div className={styles.inputWrap}>
        <input type="text" name="fname" id="fname" placeholder="First Name*" required />
      </div>
      <div className={styles.inputWrap}>
        <input type="email" name="email" id="email" placeholder="Your Email*" required />
        <button type="submit" className={styles.arrowIcon}>
          <ArrowIcon />
        </button>
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
          <input type="submit" value="Subscribe" name="subscribe" className="button" hidden />
        </div>
      </div>
    </form>
  )
}
