import Link from 'next/link'
import React from 'react'
import SLink from '../../../components/Link'

export default function ExpertAuthentication() {
  return (
    <div>
      <h1>Đây là trang hồ sơ chuyên gia</h1>
      <h2>
        <Link href="/expert/login">
          <SLink>Lưu</SLink>
        </Link>
      </h2>
    </div>
  )
}
