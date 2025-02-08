import React, { useState } from "react";
import { Logo } from "../../assets/icons";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import getRequest from "../../service/getRequest";
import { Toaster, toast } from "react-hot-toast";
import GetToken from "../../hooks/GetToken";

const Login = () => {
  const [loading, setIsLoading] = useState(false);
  const { setToken } = GetToken();
  const allUsers = getRequest("/users");

  function handleLoginSubmit(data) {
    setIsLoading(true);
    const isUser = allUsers.some(
      (item) => item.username == data.username && item.password == data.password
    );
    setTimeout(() => {
      if (isUser) toast.success("Xush Kelibsiz!");
    }, 300);
    setTimeout(() => {
      if (isUser) {
        setToken(data);
      } else {
        toast.error("Foydalanuvchi topilmadi!");
      }
      setIsLoading(false);
    }, 1000);
  }
  return (
    <div className="flex items-center justify-between h-[100vh]">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[330px] mx-auto">
        <div className="flex justify-center items-center gap-[10px] mb-[25px] main-color">
          <Logo />
          <span className="text-black text-[30px] font-medium ">
            Admin paneli
          </span>
        </div>
        <Form
          onFinish={handleLoginSubmit}
          autoComplete="off"
          className="w-[100%]"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Login kiritish majburiy",
              },
            ]}
          >
            <Input
              autoComplete="off"
              size="large"
              prefix={<UserOutlined />}
              placeholder="Login"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Parol kiritish majburiy",
              },
            ]}
          >
            <Input.Password
              autoComplete="off"
              size="large"
              prefix={<LockOutlined />}
              type="password"
              placeholder="Parol"
            />
          </Form.Item>
          <Button
            loading={loading}
            className="w-full"
            size="large"
            htmlType="submit"
            type="primary"
          >
            Kirish{" "}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
