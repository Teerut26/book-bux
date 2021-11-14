import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-light navbar-light ">
      <div className="container flex align-items-center">
        <div className="text-2xl">Book Bux Shop</div>
        <div className="text-lg flex gap-4">
          <div className="flex flex-row items-center gap-1">
            <i className="fad fa-shopping-basket"></i>
            <div>หมวดหมู่สินค้า</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <i className="fad fa-shopping-basket"></i>
            <div>ซื้อ Robux</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <i className="fad fa-shopping-basket"></i>
            <div>เข้าสู่ระบบ</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <i className="fad fa-shopping-basket"></i>
            <div>สมัครสมาชิก</div>
          </div>
        </div>
        <div>
          <form classname="d-flex">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <div className="btn btn-primary border-0" >
                ค้นหา
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
