import React from 'react'
import Link from 'next/link'
import SSignup from './styles'
import SLink from '@components/Link'

export default function ExpertSignup() {
  return (
    <SSignup>
      <h1>Đây là trang đăng ký chuyên gia</h1>
      <h2>
        <Link href="/expert/signup/authentication">
          <SLink>Xác thực</SLink>
        </Link>
      </h2>
    </SSignup>
  )
}
