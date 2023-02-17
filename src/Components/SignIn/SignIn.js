import React from "react";
import "../../assets/css/SignIn.css";
import signInImage from "../../assets/img/signUp.webp";
import LocationHeader from "../SignUp/LocationHeader";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserActionService } from "../../redux/action/userAction";
import { postLogin } from "../../service/userService";
import { userLocalService } from "../../service/localService";
import Lottie from "lottie-react";
import bg_signIn from "../../assets/img/75126-gaming-console.json";
import { GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
// import TiSocialFacebookCircular from "react-icons/lib/ti/social-facebook-circular";
// import TiSocialFacebook from "https://clinmedjournals.org/articles/blogs/facebook-login.png";

export default function SignIn() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const onFinishReduxThunk = (values) => {
    const handleNavigate = () => {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    };

    dispatch(setUserActionService(values, handleNavigate));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="signIn">
      <LocationHeader title={"Sign In"} location={"Pages"} />

      <div className="container">
        <div className="signIn__content row justify-content-between align-items-center">
          <div className="content__left col-lg-6 col-md-8 col-12 mx-auto mb-50">
            {/* <img src={signInImage} alt="" /> */}
            <Lottie animationData={bg_signIn} loop={true} />
          </div>

          <div className="content__right col-lg-5 col-md-8 col-12 mx-auto mb-50">
            <div className="section_title text-center">
              <h2>Sign In</h2>
            </div>
            <Form
              layout="vertical"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinishReduxThunk}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Username" className="p-3 h-16" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" className="p-3 h-16" />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  span: 8,
                }}
                className="flex justify-center"
              >
                <Button
                  className="submit px-14 h-16 border-none bg-gray-500 hover:bg-gray-300 "
                  htmlType="submit"
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
            {/* Google Login  */}
            {/* <GoogleLogin
              cookiePolicy={"single_host_origin"}
              clientId=""
              isSignedIn={true}
              buttonText="Login with Google"
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            /> */}

            {/* Facebook Login  */}
            {/* <FacebookLogin
              appId=""
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="my-facebook-button-class"
              icon={<TiSocialFacebook />}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
