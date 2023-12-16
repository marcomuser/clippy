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
      <CopyCard form={form} title="Nicht erreicht">
        <br /> NE {firstName} {surname} {dateTime} ❌
      </CopyCard>

      <CopyCard form={form} title="Kunde noch nicht erreicht">
        RETENTION 📞❌ STORNO NOCH NICHT ERREICHT
        <br />❌ NE1 {firstName} {surname} {dateTime}
        <br />❌ NE2
        <br />❌ NE3
        <br />❌ NE4
        <br />❌ NE5
        <br />❌ NE6
        <br />❌ NE7
        <br />❌ NE8
        <br />❌ NE9
        <br />❌ NE10
        <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>

<CopyCard form={form} title="PRIO 1 Bucket">
        🔴 RETENTION PRIO 1 Bucket 🔴 <br />
        {firstName} {surname} {dateTime} DAUER
        <br /> Mosaik: Ja/Nein 
        <br /> Musterprojekt: 1,5....
        <br />
        <br /> ✅ FU Datum/Uhrzeit:
        <br />
        <br /> 🔁 Replanning erstellt am: 
        <br />
        <br />
        🅰️ Stornogründe Stichpunkte: <br />
        <br />
        🅱️ Notizen aus Call: <br />
         <br />
        <br /> Warum wollte der Kunde eine PV Anlage? (Bedarfsanalyse)
        <br />
        <br /> Was fand der Kunde interessant an Enpal?
        <br />
        <br />
        <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>
      
      <CopyCard form={form} title="PRIO 1.5 Bucket">
        🔴 RETENTION PRIO 1.5 Bucket 🔴 <br />
        {firstName} {surname} {dateTime} DAUER
        <br /> Mosaik: Ja/Nein 
        <br /> Musterprojekt: 1,5....
        <br />
        <br /> ✅ FU Datum/Uhrzeit:
        <br />
        <br /> 🔁 Replanning erstellt am: 
        <br />
        <br />
        🅰️ Stornogründe Stichpunkte: <br />
        <br />
        🅱️ Notizen aus Call: <br />
         <br />
        <br /> Warum wollte der Kunde eine PV Anlage? (Bedarfsanalyse)
        <br />
        <br /> Was fand der Kunde interessant an Enpal?
        <br />
        <br />
        <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>

      <CopyCard form={form} title="PRIO 2 Bucket">
        🔴 RETENTION PRIO 2 Bucket 🔴 <br />
        {firstName} {surname} {dateTime} DAUER
        <br /> Mosaik: Ja/Nein 
        <br /> Musterprojekt: 1,5....
        <br />
        <br /> ✅ FU Datum/Uhrzeit:
        <br />
        <br /> 🔁 Replanning erstellt am: 
        <br />
        <br />
        🅰️ Stornogründe Stichpunkte: <br />
        <br />
        🅱️ Notizen aus Call: <br />
         <br />
        <br /> Warum wollte der Kunde eine PV Anlage? (Bedarfsanalyse)
        <br />
        <br /> Was fand der Kunde interessant an Enpal?
        <br />
        <br />
        <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>

      <CopyCard form={form} title="PRIO 3 Bucket">
        🔴 RETENTION PRIO 3 Bucket 🔴 <br />
        {firstName} {surname} {dateTime} DAUER
        <br /> Mosaik: Ja/Nein 
        <br /> Musterprojekt: 1,5....
        <br />
        <br /> ✅ FU Datum/Uhrzeit:
        <br />
        <br /> 🔁 Replanning erstellt am: 
        <br />
        <br />
        🅰️ Stornogründe Stichpunkte: <br />
        <br />
        🅱️ Notizen aus Call: <br />
        <br />
        <br /> Warum wollte der Kunde eine PV Anlage? (Bedarfsanalyse)
        <br />
        <br /> Was fand der Kunde interessant an Enpal?
        <br />
        <br />
        <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>

      <CopyCard form={form} title="SOS IDN">
        🆘 SOS TBK (live) Retention Manager: {firstName} {surname} - {dateTime}{" "}
        / Dauer
        <br /> // 📥 Case via (von wem kam die KTL?):
        <br />
        <br /> // ⚠ Kurzbeschreibung aus SOS Chat:
        <br />
        <br /> // ☀️ Link zur CL/KTL:
        <br />
        <br />
        // ✅ FU Datum/Uhrzeit:
        <br />
        <br /> // 💚 CL/KTL geschlossen?:
        <br />
        <br /> 🅰️ Stornogründe Stichpunkte:
        <br />
        <br />
        RETENTION 🅱️ Notizen aus Call:
        <br />
        <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>

      <CopyCard form={form} title="SOS Live Home Improvement">
        🆘 SOS HOME (live) Retention Manager: {firstName} {surname} - {dateTime}{" "}
        / Dauer
        <br /> // 📥 Case via (von wem kam die KTL?):
        <br />
        <br /> // ⚠ Kurzbeschreibung aus SOS Chat:
        <br />
        <br /> // ☀️ Link zur CL/KTL:
        <br />
        <br />
        // ✅ FU Datum/Uhrzeit:
        <br />
        <br /> // 💚 CL/KTL geschlossen?:
        <br />
        <br /> 🅰️ Stornogründe Stichpunkte:
        <br />
        <br />
        RETENTION 🅱️ Notizen aus Call:
        <br />
        <br />
        ////////////////////////////////////////////////////////////////
      </CopyCard>
      
      <CopyCard form={form} title="After IPA / SC2 case ">
        ☀️Kunde im Retention Prozess ☀️
        <br />
        Hallo liebe/r Seller/in 🙂, dieser Kunde wurde vom Retention
        zurückgewonnen. Deshalb übernimmt Retention die weitere Kommunikation
        und diesen SC2, samt Terminierung. Wärst du so freundlich und gehst zum
        Wohle des Kunden bei Rückfragen bitte zuerst auf deine/n TL zu, bevor du
        den Kunden kontaktierst? Dein/e TL ist herzlich eingeladen sich beim Retention Lead zu melden, falls es Fragen gibt.
        <br />
        Vielen Dank und liebe Grüße {firstName} {surname}, {dateTime}
      </CopyCard>
      
       <CopyCard form={form} title="Sonderprojekt Mosaik">
        Ⓜ️MOSAIK SONDERPROJEKTⓂ️
        <br />
        Hallo liebes Sales, dieser Kunde liegt im Mosaik Sonderprojekt. 
        <br /> Bitte nicht mehr kontaktieren. 
        <br /> Vielen Dank ☀️
        <br />
        Vielen Dank und liebe Grüße {firstName} {surname}, {dateTime}
      </CopyCard>
    </section>
  );
};
