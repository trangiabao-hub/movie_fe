import React, { useState } from "react";
import { YoutubeOutlined, SolutionOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: string, key: string, icon: any) {
  const isActive = location.pathname === `/${key}`;
  const linkProps = isActive ? { className: "active" } : { to: `/${key}` };
  return {
    key: key,
    icon: icon,
    label:
      key === "sub1" || key === "sub2" || key === "sub3" ? (
        label
      ) : (
        <Link to={`/dashboard/${key}`}>{label}</Link>
      ),
  };
}

const items: MenuItem[] = [
  getItem("Movie", "movie", <YoutubeOutlined />),
  getItem("Actor", "actor", <SolutionOutlined />),
];

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["movie"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
