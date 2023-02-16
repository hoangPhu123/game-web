import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/css/signUp.css";
import { Button, Form, Input } from "antd";
import Lottie from "lottie-react";
import bg_signUp from "../../assets/img/45740-gaming-community.json";
import { useDispatch } from "react-redux";
import { setUserLogUpActionService } from "../../redux/action/userAction";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function SignUp() {
  const [form] = Form.useForm();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const handleSignUpNavigate = () => {
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
    };
    dispatch(setUserLogUpActionService(values, handleSignUpNavigate));
  };

  return (
    <div className="signUp">
      <div className="signUp__title text-center">
        <div className="container pt-5">
          <h1>Sign Up</h1>
          <ul className="location d-flex justify-content-center">
            <li>
              <NavLink to="/">
                <a href="#">Home</a>
              </NavLink>
            </li>
            <li>
              <span>//</span>
            </li>
            <li>Pages</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="signUp__content row justify-content-between align-items-center">
          <div className="content__left col-lg-6 col-md-8 col-12 mx-auto mb-50">
            {/* <img src={signUpImage} alt="" /> */}
            <Lottie animationData={bg_signUp} loop={true} />
          </div>

          <div className="content__right col-lg-5 col-md-8 col-12 mx-auto mb-50">
            <div className="section_title text-center">
              <h2>Sign up</h2>
            </div>

            {/* form input */}
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "86",
              }}
              scrollToFirstError
            >
              <Form.Item
                name="name"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Username" className="p-3 h-16" />
              </Form.Item>

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
                <Input placeholder="E-mail" className="p-3 h-16" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Password" className="p-3 h-16" />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  className="p-3 h-16"
                />
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  id="btn-register"
                  className="px-14 h-16 border-none bg-gray-500 hover:bg-gray-300 "
                  type="primary"
                  htmlType="submit"
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
