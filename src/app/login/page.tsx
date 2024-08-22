/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import "./login.css";
import { useState } from "react";
import { Form, Input, Button, message, Row, Col } from "antd";
import { MailOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { forUserLoggedIn } from "@/redux/slice/authSlice";

const Login = () => {
  const [useEmail, setUseEmail] = useState(true);
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    try {
      if (values.hasOwnProperty("phone")) {
        const res = await userLogin({
          iso_code: "BD",
          phone: values?.phone,
          password: values?.password,
          is_phone_selected: true,
        }).unwrap();
        if (res?.is_success) {
          storeUserInfo({ access_token: res?.data?.access_token });
          dispatch(
            forUserLoggedIn({
              user: res.data.user,
            })
          );
          router.push("/user");
        }
      } else {
        const res = await userLogin({
          email: values?.email,
          password: values?.password,
          is_phone_selected: false,
        }).unwrap();
        if (res?.is_success) {
          storeUserInfo({ access_token: res?.data?.access_token });
          dispatch(
            forUserLoggedIn({
              user: res.data.user,
            })
          );
          router.push("/user");
        }
      }
    } catch (error) {
      message.warning("invalid username or password");
    }
  };

  return (
    <div className="login-form-parent-container">
      <div className="login-style-cotainer">
        <Row>
          <Col xs={24} md={12}>
            <div className="login-form-child-container">
              {/* logo container  */}
              <div className="logo-container for-mobile" style={{ cursor: "pointer", paddingBottom:"20px" }}>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="180.001"
                    height="20.552"
                    viewBox="0 0 248.001 40.552"
                  >
                    <g id="logo-alter" transform="translate(-0.038 0)">
                      <path
                        id="Path_2673"
                        data-name="Path 2673"
                        d="M53.308,49.039H22.883a8.654,8.654,0,0,1-8.654-8.654V18.618a8.69,8.69,0,0,1,8.689-8.689h30.39v8.689H23.784a.85.85,0,0,0-.86.86v5.661H53.308v8.654H22.883v5.666a.891.891,0,0,0,.249.657.83.83,0,0,0,.611.249H53.308Z"
                        transform="translate(-14.19 -9.145)"
                        fill="#ffbf00"
                      />
                      <path
                        id="Path_2674"
                        data-name="Path 2674"
                        d="M142.226,10l-16.7,35.816a6.536,6.536,0,0,1-2.576,2.9,7.371,7.371,0,0,1-3.838,1.018,7.574,7.574,0,0,1-3.864-.952,6.2,6.2,0,0,1-2.545-2.937L96,10h9.982l12.334,26.384a.784.784,0,0,0,.769.54.7.7,0,0,0,.769-.54L132.239,10Z"
                        transform="translate(-54.337 -9.18)"
                        fill="#ffbf00"
                      />
                      <path
                        id="Path_2675"
                        data-name="Path 2675"
                        d="M231.408,49.039H201a8.654,8.654,0,0,1-8.654-8.654V18.618a8.353,8.353,0,0,1,2.545-6.144,8.364,8.364,0,0,1,6.144-2.545h30.405v8.689h-29.6a.85.85,0,0,0-.855.86v5.661h30.4v8.654H201v5.666a.871.871,0,0,0,.249.657.809.809,0,0,0,.606.249h29.524Z"
                        transform="translate(-101.64 -9.145)"
                        fill="#ffbf00"
                      />
                      <path
                        id="Path_2676"
                        data-name="Path 2676"
                        d="M313,48.284h-8.654v-27.7a2.7,2.7,0,0,0-1.985-2.5,19.157,19.157,0,0,0-6.735-.835,19.885,19.885,0,0,0-6.73.789,2.666,2.666,0,0,0-1.939,2.545v27.7H278.3V19.675q0-6.368,5.014-9.071,4.108-2.214,12.329-2.214,8.084,0,12.38,2.392a9.447,9.447,0,0,1,5.014,8.893Z"
                        transform="translate(-143.839 -8.39)"
                        fill="#ffbf00"
                      />
                      <path
                        id="Path_2677"
                        data-name="Path 2677"
                        d="M391.059,18.654H352V10h39.079Zm-15.18,30.42h-8.654V23.006h8.654Z"
                        transform="translate(-180.022 -9.18)"
                        fill="#ffbf00"
                      />
                      <path
                        id="Path_2678"
                        data-name="Path 2678"
                        d="M429.076,12.68a6.154,6.154,0,0,1,5.966-3.93,6.232,6.232,0,0,1,6.007,3.93L457.72,48.46H448.19L435.856,22.031a.774.774,0,0,0-.814-.509.85.85,0,0,0-.769.509l-8.328,17.755h13.841l4.072,8.654H412.41Z"
                        transform="translate(-209.681 -8.567)"
                        fill="#ffbf00"
                      />
                    </g>
                  </svg>
                </a>
              </div>

              <h2 style={{ color: "white", fontWeight: "500" }}>Sign In</h2>

              {/* btn container ==> email or phone */}
              <div className="login-btn-container">
                <div
                  onClick={() => setUseEmail(true)}
                  style={{ marginRight: 8, cursor: "pointer" }}
                  className={`login-common-style ${
                    useEmail ? "btn-active-color " : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.5"
                    height="10.5"
                    viewBox="0 0 25.5 19.5"
                    className={`${useEmail ? "icon-active-color" : ""}`}
                  >
                    <path
                      id="Path_2710"
                      data-name="Path 2710"
                      d="M2329.469-221.7h-21.017a2.249,2.249,0,0,0-2.241,2.25v15a2.25,2.25,0,0,0,2.241,2.25h21.017a2.25,2.25,0,0,0,2.241-2.25v-15A2.248,2.248,0,0,0,2329.469-221.7Zm-.31,1.5-10.152,10.192-10.24-10.192Zm-21.455,15.44v-14.386l7.2,7.162Zm1.056,1.061,7.2-7.228,2.523,2.511a.745.745,0,0,0,1.054,0l2.46-2.47,7.161,7.189Zm21.455-1.061-7.161-7.189,7.161-7.19Z"
                      transform="translate(-2306.21 221.705)"
                      fill="white"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span>Email</span>
                </div>

                <span style={{ color: "#FFBF00", fontSize: "15px" }}>|</span>

                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setUseEmail(false)}
                  className={`login-common-style ${
                    !useEmail ? "btn-active-color " : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="12.5"
                    viewBox="0 0 23 33.5"
                    className={`${!useEmail ? "icon-active-colorq" : ""}`}
                  >
                    <path
                      id="mobile-svgrepo-com"
                      d="M16.5,29.25h.017M11.6,34.5h9.8c1.96,0,2.94,0,3.689-.382a3.5,3.5,0,0,0,1.529-1.53C27,31.84,27,30.86,27,28.9V8.6c0-1.96,0-2.94-.382-3.689a3.5,3.5,0,0,0-1.529-1.53C24.34,3,23.36,3,21.4,3H11.6c-1.96,0-2.94,0-3.689.381a3.5,3.5,0,0,0-1.53,1.53C6,5.66,6,6.64,6,8.6V28.9c0,1.96,0,2.94.381,3.689a3.5,3.5,0,0,0,1.53,1.53C8.66,34.5,9.64,34.5,11.6,34.5Z"
                      transform="translate(-5 -2)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>Phone</span>
                </div>
              </div>

              {/* form container  */}
              <div className="form container">
                <Form
                  name="login"
                  onFinish={onFinish}
                  style={{ maxWidth: 300, margin: "0 auto" }}
                  className="input-container"
                >
                  {useEmail ? (
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input
                        className="input-field-login"
                        prefix={<MailOutlined />}
                        placeholder="Email"
                      />
                    </Form.Item>
                  ) : (
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          pattern: /^\d{10}$/,
                          message: "The input is not valid phone number!",
                        },
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input
                        className="input-field-login"
                        prefix={<PhoneOutlined />}
                        placeholder="Phone Number"
                      />
                    </Form.Item>
                  )}
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                    className="common-style"
                  >
                    <Input.Password
                      className="input-field-login"
                      prefix={<LockOutlined />}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      style={{
                        width: "100%",
                        color: "black",
                        backgroundColor: "#FFBF00",
                        height: "40px",
                      }}
                      className="common-style"
                    >
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </div>

              {/* forget password  */}
              <div
                style={{
                  paddingTop: "10px",
                  display: "flex",
                  flex: "start",
                }}
                className="reset-password"
              >
                <span style={{ color: "#9399A3", fontSize: "14px" }}>
                  Forgot password?{" "}
                  <span
                    onClick={() => router.push("/forget-password")}
                    style={{
                      color: "#FFBF00",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Reset
                  </span>
                </span>
              </div>
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div className="right-side">
              <div className="logo-container" style={{ cursor: "pointer" }}>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="248.001"
                    height="40.552"
                    viewBox="0 0 248.001 40.552"
                  >
                    <g id="logo-alter" transform="translate(-0.038 0)">
                      <path
                        id="Path_2673"
                        data-name="Path 2673"
                        d="M53.308,49.039H22.883a8.654,8.654,0,0,1-8.654-8.654V18.618a8.69,8.69,0,0,1,8.689-8.689h30.39v8.689H23.784a.85.85,0,0,0-.86.86v5.661H53.308v8.654H22.883v5.666a.891.891,0,0,0,.249.657.83.83,0,0,0,.611.249H53.308Z"
                        transform="translate(-14.19 -9.145)"
                        fill="black"
                      />
                      <path
                        id="Path_2674"
                        data-name="Path 2674"
                        d="M142.226,10l-16.7,35.816a6.536,6.536,0,0,1-2.576,2.9,7.371,7.371,0,0,1-3.838,1.018,7.574,7.574,0,0,1-3.864-.952,6.2,6.2,0,0,1-2.545-2.937L96,10h9.982l12.334,26.384a.784.784,0,0,0,.769.54.7.7,0,0,0,.769-.54L132.239,10Z"
                        transform="translate(-54.337 -9.18)"
                        fill="black"
                      />
                      <path
                        id="Path_2675"
                        data-name="Path 2675"
                        d="M231.408,49.039H201a8.654,8.654,0,0,1-8.654-8.654V18.618a8.353,8.353,0,0,1,2.545-6.144,8.364,8.364,0,0,1,6.144-2.545h30.405v8.689h-29.6a.85.85,0,0,0-.855.86v5.661h30.4v8.654H201v5.666a.871.871,0,0,0,.249.657.809.809,0,0,0,.606.249h29.524Z"
                        transform="translate(-101.64 -9.145)"
                        fill="black"
                      />
                      <path
                        id="Path_2676"
                        data-name="Path 2676"
                        d="M313,48.284h-8.654v-27.7a2.7,2.7,0,0,0-1.985-2.5,19.157,19.157,0,0,0-6.735-.835,19.885,19.885,0,0,0-6.73.789,2.666,2.666,0,0,0-1.939,2.545v27.7H278.3V19.675q0-6.368,5.014-9.071,4.108-2.214,12.329-2.214,8.084,0,12.38,2.392a9.447,9.447,0,0,1,5.014,8.893Z"
                        transform="translate(-143.839 -8.39)"
                        fill="black"
                      />
                      <path
                        id="Path_2677"
                        data-name="Path 2677"
                        d="M391.059,18.654H352V10h39.079Zm-15.18,30.42h-8.654V23.006h8.654Z"
                        transform="translate(-180.022 -9.18)"
                        fill="black"
                      />
                      <path
                        id="Path_2678"
                        data-name="Path 2678"
                        d="M429.076,12.68a6.154,6.154,0,0,1,5.966-3.93,6.232,6.232,0,0,1,6.007,3.93L457.72,48.46H448.19L435.856,22.031a.774.774,0,0,0-.814-.509.85.85,0,0,0-.769.509l-8.328,17.755h13.841l4.072,8.654H412.41Z"
                        transform="translate(-209.681 -8.567)"
                        fill="black"
                      />
                    </g>
                  </svg>
                </a>
              </div>
              {/* <span className="welcome-msg">Welcome to Eventa</span> */}
              <div className="reset-password">
                <span
                  style={{
                    color: "black",
                    fontSize: "14px",
                    paddingTop: "10px",
                  }}
                >
                  Don't have an account?{" "}
                </span>
              </div>

              <Button
                onClick={() => router.push("/signup")}
                className="custom-btn"
              >
                Sign Up
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
