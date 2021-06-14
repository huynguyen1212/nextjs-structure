import React, { useRef } from "react";
import SHeader, { Dropdown } from "./style";
import Link from "next/link";

export default function Header() {
  const loginRef = useRef(null);
  const signupRef = useRef(null);

  const handleCloseDropdown = () => {
    loginRef.current.classList.remove("show");
    signupRef.current.classList.remove("show");
  };

  return (
    <SHeader>
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/images/logo.png" alt="logo" />
          </a>
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link href="/introduce">
            <a>Giới thiệu</a>
          </Link>
        </li>
        <li>
          <select>
            <option>vi</option>
            <option>en</option>
          </select>
        </li>
        <li>
          <Dropdown>
            <span
              className="dropdown_title"
              onClick={() => {
                signupRef.current.classList.toggle("show");
                loginRef.current.classList.remove("show");
              }}
            >
              Đăng ký
            </span>
            <div className="dropdown_menu" ref={signupRef}>
              <div className="dropdown_item">
                <Link href="/user/signup">
                  <a onClick={handleCloseDropdown}>Người dùng</a>
                </Link>
              </div>
              <div className="dropdown_item">
                <Link href="/expert/signup">
                  <a onClick={handleCloseDropdown}>Chuyên gia</a>
                </Link>
              </div>
            </div>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <span
              className="dropdown_title"
              onClick={() => {
                loginRef.current.classList.toggle("show");
                signupRef.current.classList.remove("show");
              }}
            >
              Đăng nhập
            </span>
            <div className="dropdown_menu" ref={loginRef}>
              <div className="dropdown_item">
                <Link href="/user/login">
                  <a onClick={handleCloseDropdown}>Người dùng</a>
                </Link>
              </div>
              <div className="dropdown_item">
                <Link href="/expert/login">
                  <a onClick={handleCloseDropdown}>Chuyên gia</a>
                </Link>
              </div>
            </div>
          </Dropdown>
        </li>
      </ul>
    </SHeader>
  );
}
