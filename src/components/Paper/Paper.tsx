import { type ReactNode } from "react";
import styles from "./Paper.module.css";

type TProps = {
  children: ReactNode;
};
export const Paper = ({ children }: TProps) => (
  <main className={styles.paper}>{children}</main>
);
