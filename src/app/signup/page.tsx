"use client";
import { useSendOtpMutation, useUserSignupMutation } from "@/redux/api/authApi";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, message, Row } from "antd";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import { useRouter } from "next/navigation";
import { RuleObject } from "rc-field-form/lib/interface";
import { useState } from "react";
import OtpInput from "react-otp-input";
import "./signup.css";


interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  notifications: boolean;
}

function SignUpPage() {
  const [form] = Form.useForm();
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [datas, setDatas] = useState<SignUpFormValues>();
  const [isOtpFormVisible, setIsOtpFormVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const [sendOtp] = useSendOtpMutation();
  const [userSignup] = useUserSignupMutation();

  
  const onFinish = async(values: SignUpFormValues) => {
    try {
      if (values.notifications === undefined) {
        values.notifications = false;
      }
      setDatas(values);
      const res = await sendOtp({
        iso_code: "BD",
        phone: values.phone,
        email: values.email,
      }); 
      if (res?.data?.data?.is_success){
        setIsOtpFormVisible(true);
      }else{
        message.warning("This Phone Number/Email is already registered.")
      } 
    }catch(err:any) {
      console.log(err.message)
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const passwordValidator = (_: RuleObject, value: any): Promise<void> => {
    const passwordRegex =  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!value) {
      return Promise.reject("Password is required");
    }
    if (!passwordRegex.test(value)) {
      return Promise.reject(
        "Password must be at least 8 characters, contain 1 uppercase letter, 1 number, and 1 special character (@#$!%*?&)"
      );
    }
    return Promise.resolve();
  };

  const confirmPasswordValidator = (
    _: RuleObject,
    value: any,
    callback: (message?: string) => void
  ): void => {
    if (!value || form.getFieldValue("password") === value) {
      callback();
    } else {
      callback("The two passwords do not match!");
    }
  };

  const handleTermsChange = (e: CheckboxChangeEvent) => {
    setIsTermsChecked(e.target.checked);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
    pattern: {
      mismatch: "${label} is not a valid ${type}!",
    },
  };

  const handleOtpSubmit = async() => {
    if(otp==""){
      message.warning("Please Enter the OTP")
      return;
    }
    const data = {
      first_name: datas?.firstName,
      last_name: datas?.lastName,
      email: datas?.email,
      iso_code: "BD",
      phone: datas?.phone,
      password: datas?.password,
      confirm_password: datas?.confirmPassword,
      agree_terms_and_pp: datas?.terms,
      subscribe_sms: datas?.notifications,
      otp: otp,
    };
    
    try {
      const res = await userSignup(data);

      if (res.error) {
        message.error("Invaid OTP");
      }
      
      if(res?.data.is_success){
        message.success("Registration successfully done!")
        router.push("/login");
      }

    } catch (error:any) {
      console.log(error);
      
    }
  };

  const handleSendAgain = async() => {
     const res = await sendOtp({ iso_code: "BD", phone: datas?.phone , email : datas?.email,  is_phone_selected: true,});
     console.log(res?.data);
     message.success("OTP sended, Please check your inbox")
  };

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} lg={12}>
          <div className="registration-bg"></div>
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <div className="form-parent-container">
            <div className="">
              <div
                className="logo-container"
                onClick={() => router.push("/")}
                style={{ cursor: "pointer" }}
              >
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
              </div>

              {isOtpFormVisible ? (
                <div className="">
                  <div className="from-child-container">
                    <Form
                      form={form}
                      name="sign-up"
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      validateMessages={validateMessages}
                      initialValues={{ remember: true }}
                    >
                      {/* for first name and last name  */}
                      <Row>
                        <Col xs={24} sm={12} md={12}>
                          <Form.Item
                            className="common-style1"
                            name="firstName"
                            rules={[{ required: true }]}
                          >
                            <Input
                              className="input-field-login"
                              placeholder="First Name"
                              prefix={<UserOutlined />}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12}>
                          <Form.Item
                            className="common-style2"
                            name="lastName"
                            rules={[{ required: true }]}
                          >
                            <Input
                              className="input-field-login"
                              placeholder="Last Name"
                              prefix={<UserOutlined />}
                            />
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* others  */}
                      <Form.Item
                        name="email"
                        rules={[{ type: "email", required: true }]}
                        className="common-style"
                      >
                        <Input
                          className="input-field-login input-login-common"
                          placeholder="Email"
                          prefix={<MailOutlined />}
                        />
                      </Form.Item>

                      <Form.Item
                        className="common-style"
                        name="phone"
                        rules={[
                          { required: true },
                          {
                            pattern: /^(013|014|015|016|017|018|019)\d{8}$/,
                            message: "Number must be Bangladeshi 11 digits",
                          },
                        ]}
                      >
                        <Input
                          className="input-field-login input-login-common"
                          placeholder="Phone Number"
                          prefix={<PhoneOutlined />}
                        />
                      </Form.Item>

                      <Form.Item
                        className="common-style"
                        name="password"
                        rules={[{ validator: passwordValidator }]}
                      >
                        <Input.Password
                          className="input-field-login input-login-common"
                          placeholder="Password"
                          prefix={<LockOutlined />}
                        />
                      </Form.Item>

                      <Form.Item
                        className="common-style"
                        name="confirmPassword"
                        dependencies={["password"]}
                        rules={[{ validator: confirmPasswordValidator }]}
                      >
                        <Input.Password
                          className="input-field-login input-login-common"
                          placeholder="Confirm Password"
                          prefix={<LockOutlined />}
                        />
                      </Form.Item>

                      <Form.Item
                        name="terms"
                        valuePropName="checked"
                        rules={[
                          {
                            validator: (_, value) =>
                              value
                                ? Promise.resolve()
                                : Promise.reject(
                                    "You must accept the terms and conditions"
                                  ),
                          },
                        ]}
                      >
                        <Checkbox
                          className="custom-checkbox common-style"
                          onChange={handleTermsChange}
                        >
                          <span className="checkbox-text-color">
                            I have read and accept the{" "}
                            <a className="link-page-color" href="#">
                              terms and conditions
                            </a>
                            <span> and </span>
                            <a className="link-page-color" href="#">
                              Privacy Policy.
                            </a>
                          </span>
                        </Checkbox>
                      </Form.Item>

                      <Form.Item name="notifications" valuePropName="checked">
                        <Checkbox
                          style={{ paddingTop: "5px" }}
                          className="custom-checkbox"
                        >
                          <span className="checkbox-text-color common-style">
                            I would like to receive text notifications for
                            receipts and other important EVENTA event-related
                            messages at the provided phone number. Message and
                            data rates may apply.
                          </span>
                        </Checkbox>
                      </Form.Item>

                      <Form.Item className="common-style">
                        <div className="sign-up-btn-container">
                          <Button
                            className="sign-up-btn"
                            style={{
                              color: "black",
                              backgroundColor: "#ffbf00",
                            }}
                            type="primary"
                            htmlType="submit"
                            disabled={!isTermsChecked}
                          >
                            Join Eventa
                          </Button>
                        </div>
                      </Form.Item>
                    </Form>
                  </div>

                  <div className="already-acount">
                    <span>
                      Already have an account?{" "}
                      <a className="link-page-color" href="/login">
                        Login
                      </a>{" "}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="otp-container">
                  <div className="desc">
                    <span>Please Enter Verification Code</span>
                  </div>
                  <div className="otp-input-container">
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                    />
                  </div>

                  <div className="otp-buttons">
                    <Button className="custom-btn" onClick={handleSendAgain}>
                      Send Again
                    </Button>
                    <Button className="custom-btn" onClick={handleOtpSubmit}>
                      Verify OTP
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SignUpPage;
