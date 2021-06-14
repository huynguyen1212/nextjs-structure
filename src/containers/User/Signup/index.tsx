import React from "react";
import Link from "next/link";
import SSignup from "./styles";
import SLink from "@components/Link";

export default function UserSignup() {
  return (
    <SSignup>
      <h1>Đây là trang đăng ký người dùng</h1>
      <h2>
        <Link href="/user/signup/authentication">
          <SLink>Xác thực</SLink>
        </Link>
      </h2>
    </SSignup>
  );
}
