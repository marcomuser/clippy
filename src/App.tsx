import { Divider, Form, Typography } from "antd";
import { Paper } from "./components/Paper/Paper";
import { FormFields, UserInputs } from "./components/UserInputs/UserInputs";
import { CopyCards } from "./components/CopyCards/CopyCards";

const { Title } = Typography;

const App = () => {
  const [form] = Form.useForm<FormFields>();
  const localStorage = window.localStorage;

  return (
    <Paper>
      <Title>Textvorlagen</Title>
      <Divider />
      <Form
        form={form}
        initialValues={{
          firstName: localStorage.getItem("firstName"),
          surname: localStorage.getItem("surname"),
        }}
      >
        <UserInputs />
      </Form>
      <Divider />
      <CopyCards form={form} />
    </Paper>
  );
};

export default App;
