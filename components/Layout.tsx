import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

type MyComponentProps = {
  children: ReactNode;
};
export default function Layout({ children }: MyComponentProps) {
  return (
    <div>
      <Head>
        <title>WoongsNote</title>
        <meta name="description" content="NextJs Blog by Woongsnote" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="pt-12 pb-9 relative mx-auto container">{children}</main>
      <Footer />
    </div>
  );
}