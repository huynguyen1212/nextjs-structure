import React from 'react'
import Link from 'next/link'
import SNotFound from './store/style'
import SLink from '../../components/Link'

export default function NotFound() {
  return (
    <SNotFound>
      <img src="/images/vercel.svg" alt="" />
      <Link href="/">
        <SLink>Go back home</SLink>
      </Link>
    </SNotFound>
  )
}
