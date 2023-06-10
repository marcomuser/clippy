import { Form, type FormInstance } from "antd";
import { type FormFields } from "../UserInputs/UserInputs";
import { CopyCard } from "./CopyCard";
import styles from "./CopyCards.module.css";

type TProps = {
  form: FormInstance<FormFields>;
};

export const CopyCards = ({ form }: TProps) => {
  const firstName = Form.useWatch("firstName", form) ?? "Vorname";
  const surname = Form.useWatch("surname", form) ?? "Nachname";
  const dateTime = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  return (
    <section className={styles.cards}>
      <CopyCard form={form} title="Kunde noch nicht erreicht">
        RETENTION 📞❌ STORNO NOCH NICHT ERREICHT
        <br />❌ NE1 {firstName} {surname} {dateTime}
        <br />
        ❌ NE2
        <br />❌ NE3
        <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>
    </section>
  );
};
