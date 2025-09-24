// src/app/layout.js
"use client";

import "./globals.css";
import ReactQueryProvider from "./lib/react-query-provider";
import { Layout } from "antd";
import MenuDinamico from "./components/MenuDinamico";

import "./globals.css";
const { Header, Content, Footer, Sider } = Layout;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {/* Ant Design Layout só pode estar dentro do <body> */}
          <Layout style={{ minHeight: "100vh" }}>
            <Sider>
              <div className="logo-vertical" />
              <MenuDinamico />
            </Sider>
            <Layout>
              <Header className="header-style" />
              <Content style={{ margin: "16px" }}>{children}</Content>
            </Layout>
          </Layout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
