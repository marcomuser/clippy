import { Form, type FormInstance } from "antd";
import { type FormFields } from "../UserInputs/UserInputs";
import { CopyCard } from "./CopyCard";
import styles from "./CopyCards.module.css";
import { useEffect, useState } from "react";

type TProps = {
  form: FormInstance<FormFields>;
};

export const CopyCards = ({ form }: TProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const firstName = Form.useWatch("firstName", form) ?? "Vorname";
  const surname = Form.useWatch("surname", form) ?? "Nachname";
  const dateTime = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 30000);

    return () => clearInterval(timerId);
  }, [setDate]);

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

      <CopyCard form={form} title="PRIO 1.5 Bucket">
        🔴 RETENTION PRIO 1.5 Bucket 🔴 <br />
        {firstName} {surname} {dateTime} DAUER
        <br /> ✅ FU Datum/Uhrzeit:
        <br /> 🔁 Replanning erstellt am: DATUM / Replanning checken am: DATUM
        <br />
        🅰️ Stornogründe Stichpunkte: <br />
        🅱️ Notizen aus Call: <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>

      <CopyCard form={form} title="PRIO 2 Bucket">
        🔴 RETENTION PRIO 2 Bucket 🔴 <br />
        {firstName} {surname} {dateTime} DAUER
        <br /> ✅ FU Datum/Uhrzeit:
        <br /> 🔁 Replanning erstellt am: DATUM / Replanning checken am: DATUM
        <br />
        🅰️ Stornogründe Stichpunkte: <br />
        🅱️ Notizen aus Call: <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>

      <CopyCard form={form} title="PRIO 3 Bucket">
        🔴 RETENTION PRIO 3 Bucket 🔴 <br />
        {firstName} {surname} {dateTime} DAUER
        <br /> ✅ FU Datum/Uhrzeit:
        <br /> 🔁 Replanning erstellt am: DATUM / Replanning checken am: DATUM
        <br />
        🅰️ Stornogründe Stichpunkte: <br />
        🅱️ Notizen aus Call: <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>

      <CopyCard form={form} title="SOS Fälle">
        🆘 SOS TBK (live) Retention Manager: {firstName} {surname} - {dateTime}{" "}
        / Dauer
        <br /> // 📥 Case via (von wem kam die KTL?):
        <br /> // ⚠ Kurzbeschreibung aus SOS Chat:
        <br /> // ☀️ Link zur CL/KTL:
        <br />
        // ✅ FU Datum/Uhrzeit:
        <br /> // 💚 CL/KTL geschlossen?:
        <br /> Stornogründe Stichpunkte ℹ️:
        <br />
        RETENTION ℹ️💬 GESPRÄCHSNOTIZEN aus Call am Datum/Uhrzeit:
        <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>
    </section>
  );
};
