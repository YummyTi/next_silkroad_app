import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Head from "next/head";
import React from "react";
import styles from "styles/card.module.scss";
import { NextPage } from "next";

const Math: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Math0 Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.image__list}>
          <Button icon={<UploadOutlined />}>Upload File</Button>
        </div>
      </main>
    </div>
  );
};

export default Math;