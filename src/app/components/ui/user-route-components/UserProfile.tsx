import Image, { StaticImageData } from "next/image";
import userImg from "./../../../../../public/user-profile-img.webp";
import { Col, message, Row, Upload } from "antd";
import { useState } from "react";
import { Form, Input, Button } from "antd";

interface Image {
  uid: string;
}

const { Item: FormItem } = Form;
const { TextArea } = Input;

const initialValues = {
  info: "This is a sample description about John Doe.",
  instagram: "",
  twitter: "https://twitter.com/johndoe",
  linkedin: "",
  website: "https://johndoe.com",
  organization: "",
};

const UserProfile: React.FC = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(initialValues);
  const [backgroundImage, setBackgroundImage] = useState<
    string | StaticImageData
  >(userImg);
  const [img, setImg] = useState<Image | null>(null);

  const handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      setImg(info.file.originFileObj);
      const url = URL.createObjectURL(info.file.originFileObj);
      setBackgroundImage(url);
      message.success(`${info.file.name} file uploaded successfully`);
    }
  };

  const uploadProps = {
    onChange: handleChange,
    beforeUpload: (file: File) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
      }
      return isImage;
    },
    showUploadList: false,
  };

  const onFinish = (values: any) => {
    console.log("Form data:", values);
    setFormData(values);
  };

  return (
    <div className="user-profile">
      <div className="cover-are"></div>
      <div className="user-info">
        <div className="user-profile-pic">
          <Image
            style={{ borderRadius: "50%" }}
            //   layout="responsive"
            src={backgroundImage}
            alt="Description"
            width={300}
            height={300}
          />
          <Upload {...uploadProps}>
            <Button className="cutom-btn-user-photo">
              Upload Profile Picture
            </Button>
          </Upload>
        </div>

        <div className="user-edit-form">
          <h2>User Info</h2>
          <hr />

          <div className="form-data">
            <Form
              form={form}
              layout="vertical"
              initialValues={formData}
              onFinish={onFinish}
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
              <FormItem
                className="common-margin-form"
                label="Description"
                name="info"
              >
                <TextArea
                  className="common-input-style"
                  rows={4}
                  placeholder="Enter a description..."
                />
              </FormItem>
              <Row>
                <Col span={12}>
                  {" "}
                  <FormItem
                    className="style-right common-margin-form"
                    label="Instagram"
                    name="instagram"
                    rules={[
                      { type: "url", message: "Please input a valid URL!" },
                    ]}
                  >
                    <Input
                      className="common-input-style1"
                      placeholder="Enter Instagram profile URL"
                    />
                  </FormItem>
                </Col>

                <Col span={12}>
                  <FormItem
                    label="Twitter"
                    name="twitter"
                    rules={[
                      { type: "url", message: "Please input a valid URL!" },
                    ]}
                    className="style-left common-margin-form"
                  >
                    <Input
                      className="common-input-style1 "
                      placeholder="Enter Twitter profile URL"
                    />
                  </FormItem>
                </Col>
              </Row>
              <FormItem
                label="LinkedIn"
                name="linkedin"
                rules={[{ type: "url", message: "Please input a valid URL!" }]}
                className="common-margin-form"
              >
                <Input
                  className="common-input-style"
                  placeholder="Enter LinkedIn profile URL"
                />
              </FormItem>
              <FormItem
                label="Website"
                name="website"
                rules={[{ type: "url", message: "Please input a valid URL!" }]}
                className="common-margin-form"
              >
                <Input
                  className="common-input-style"
                  placeholder="Enter website URL"
                />
              </FormItem>
              <FormItem
                className="common-margin-form"
                label="Organization Profile"
                name="organization"
              >
                <Input
                  className="common-input-style"
                  placeholder="Enter organization profile"
                />
              </FormItem>

              <FormItem className="common-margin-form">
                <Row justify="end">
                  <Col>
                    <Button className="submit-custom-btn" type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
