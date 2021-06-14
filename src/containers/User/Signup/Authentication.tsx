import Link from 'next/link'
import React from 'react'
import SLink from '../../../components/Link'

export default function UserAuthentication() {
  return (
    <div>
      <h1>Đây là trang xác thực người dùng</h1>
      <h2>
        <Link href="/user/login">
          <SLink>Lưu</SLink>
        </Link>
      </h2>
    </div>
  )
}
