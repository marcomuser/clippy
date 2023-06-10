import { Button, Card, Form, FormInstance, Typography } from "antd";
import { type ReactNode, useRef } from "react";
import { FormFields } from "../UserInputs/UserInputs";

const { Text } = Typography;

type TProps = {
  title: string;
  form: FormInstance<FormFields>;
  children: ReactNode;
};

export const CopyCard = ({ title, form, children }: TProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  const firstName = Form.useWatch("firstName", form);
  const surname = Form.useWatch("surname", form);

  const onClickHandler = () => {
    navigator.clipboard.writeText(
      textRef.current
        ? textRef.current.innerText
        : "Failed to copy text. Please try again"
    );

    if (firstName && surname) {
      const storage = window.localStorage;
      storage.setItem("firstName", firstName);
      storage.setItem("surname", surname);
    }
  };

  return (
    <Card
      style={{ width: 450 }}
      title={title}
      actions={[
        <Button type="primary" onClick={onClickHandler}>
          Copy
        </Button>,
      ]}
    >
      <Text ref={textRef}>{children}</Text>
    </Card>
  );
};
