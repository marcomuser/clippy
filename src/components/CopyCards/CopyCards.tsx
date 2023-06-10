import { Button, Card, Form, type FormInstance, Typography } from "antd";
import { type FormFields } from "../UserInputs/UserInputs";
import { useRef } from "react";

const { Text } = Typography;

type TProps = {
  form: FormInstance<FormFields>;
};

export const CopyCards = ({ form }: TProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  const firstName = Form.useWatch("firstName", form);
  const surname = Form.useWatch("surname", form);
  const dateTime = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

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
      style={{ width: 400 }}
      title="Kunde noch nicht erreicht"
      actions={[
        <Button type="primary" onClick={onClickHandler}>
          Copy
        </Button>,
      ]}
    >
      <Text ref={textRef}>
        RETENTION 📞❌ STORNO NOCH NICHT ERREICHT
        <br />❌ NE1 {firstName ?? "Vorname"} {surname ?? "Nachname"} {dateTime}
        <br />
        ❌ NE2
        <br />❌ NE3
        <br />
        ////////////////////////////////////////////////////////////////
      </Text>
    </Card>
  );
};
