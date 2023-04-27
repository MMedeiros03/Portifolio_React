/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { Button, Col, Form, Input } from "antd";
import Header from "../../Components/Header/Header";
import "./index.css";

import { SendEmail } from "../../Services/SendEmail";

function Contact() {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    await SendEmail(values);
    form.resetFields();
    setLoading(false);
  };

  return (
    <>
      <Header namePage="Contact" />

      <div className="Contact">
        <div className="Contact_Infos">
          <div className="teste">
            <h1 className="content_contact">Contacts</h1>
            <br />
            <h2 className="content_contact">
              Email: matheusmedeiros2003@gmail.com
            </h2>
            <br />
            <h2 className="content_contact">Phone: (47) 996065225</h2>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet
            pharetra
            <div className="Icons">
              <h1>My Social Medias</h1>
              <a
                href="https://www.linkedin.com/in/matheus-medeiros-3975b6216"
                className="fa fa-linkedin"
              />
              <a
                href="https://www.instagram.com/m_medeiross03/"
                className="fa fa-instagram"
              />
              <a
                href="mailto:matheusmedeiros2003@gmail.com"
                className="fa fa-google"
              />
              <a
                href="https://wa.me/5547996065225"
                className="fa fa-whatsapp"
              />
            </div>
          </div>
        </div>

        <div className="FormContact" style={{ width: "100%", marginLeft: 5 }}>
          <Form
            form={form}
            name="RoleForm"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            disabled={loading}
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center"
            }}
          >
            <div style={{ maxWidth: "40%", width: "100%" }}>
              <Col span={20}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Campo obrigatório!"
                    }
                  ]}
                >
                  <Input className="FormFields" />
                </Form.Item>
              </Col>
              <Col span={20}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, informe um endereço de email"
                    },
                    {
                      type: "email",
                      message: "Por favor, informe um endereço de email válido"
                    }
                  ]}
                >
                  <Input className="FormFields" />
                </Form.Item>
              </Col>
              <Col span={20}>
                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[
                    {
                      required: true,
                      message: "Campo obrigatório!"
                    }
                  ]}
                >
                  <Input className="FormFields" />
                </Form.Item>
              </Col>

              <Col span={20}>
                <Button
                  loading={loading}
                  htmlType="submit"
                  className="FormFields"
                  style={{ width: "35%" }}
                >
                  Send
                </Button>
              </Col>
            </div>

            <div style={{ maxWidth: "60%", width: "100%" }}>
              <Col span={20} style={{ color: "white" }}>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Campo obrigatório!"
                    }
                  ]}
                >
                  <TextArea
                    style={{
                      height: 120,
                      resize: "none",
                      backgroundColor: "transparent",
                      color: "white"
                    }}
                    rows={6}
                  />
                </Form.Item>
              </Col>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Contact;
