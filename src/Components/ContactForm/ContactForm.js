import React from "react";
import LocationHeader from "../SignUp/LocationHeader";
import ConnectUs from "../HomePages/ConnectUs";
import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserContactActionService } from "../../redux/action/userAction";
import "../../assets/css/contactForm.css";
import emailjs from "emailjs-com";

const { Option } = Select;

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
      span: 16,
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
      offset: 6,
    },
  },
};
var title = "";
var email = "";
var message = "";

function sendEmail(e) {
  e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

  emailjs
    .sendForm(
      "service_3z4l9tr",
      "template_ccda2dh",
      e.target,
      "5i68MbD6yb9X5YVPN"
    )
    .then(
      (result) => {
        window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export default function ContactForm() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    if (values?.prefix) {
      delete values.prefix;
    }
    title = values.title;
    email = values.email;
    message = values.message;
    // window.location.href =
    //   "mailto:";

    const handleSignUpNavigate = () => {
      setTimeout(() => {
        form.resetFields();
      }, 1000);
    };
    dispatch(setUserContactActionService(values, handleSignUpNavigate));
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        className="text-blue-800"
        style={{
          width: 75,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div>
      <LocationHeader title={"Contact"} location={"Contact"} />

      <div className="container mb-20">
        <div className="contact__title text-center">
          <h2>GET IN TOUCH</h2>
          <p>
            When unknown printer took type and scrambled it to make <br /> type
            specimen book centuries,
          </p>
        </div>

        <Form
          className="pl-72 pt-16"
          // style={{
          //   border: "solid 1px white",
          // }}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: "84",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            // label="E-mail"
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
            <Input placeholder="Email" className="text-white" id="email" />
          </Form.Item>

          <Form.Item
            name="name"
            // label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Name" className="p-3 " />
          </Form.Item>

          <Form.Item
            name="phone"
            // label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              placeholder="Phone Number"
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="title"
            tooltip="Title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Title" id="title" className="p-3 " />
          </Form.Item>
          <Form.Item
            name="message"
            // label="Intro"
            rules={[
              {
                required: true,
                message: "Please input Message",
              },
            ]}
          >
            <Input.TextArea
              className="pt-3"
              showCount
              maxLength={100}
              placeholder="Write a review from here"
              id="message"
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button
              htmlType="submit"
              className="px-20 h-12 bg-blue-600 hover:bg-blue-800 border-none"
              onSubmit={sendEmail}
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>

      <ConnectUs />
    </div>
  );
}
