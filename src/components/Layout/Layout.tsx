import React, { ReactNode } from "react";
import styles from "./layout.module.css";
import { NextPage } from "next";

interface ILayout {
  children: ReactNode;
}

export const Layout: NextPage<ILayout> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
