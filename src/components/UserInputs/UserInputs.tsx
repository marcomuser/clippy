import { Form, Input } from "antd";

export const UserInputs = () => (
  <>
    <Form.Item label="Vorname" name="firstName">
      <Input />
    </Form.Item>

    <Form.Item label="Nachname" name="surname">
      <Input />
    </Form.Item>
  </>
);

export type FormFields = {
  firstName: string | null;
  surname: string | null;
};
