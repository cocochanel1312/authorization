import {
  SettingOutlined,
  TableOutlined,
  GithubOutlined,
  MessageOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import type { GetProp, MenuProps } from "antd"
import { Link } from "react-router-dom"

type MenuItem = GetProp<MenuProps, "items">[number]

const items: MenuItem[] = [
  {
    key: "1",
    icon: <TableOutlined />,
    label: <Link to="/table">Table</Link>,
  },
  {
    key: "2",
    icon: <SafetyCertificateOutlined />,
    label: <Link to="/navigationtest">NavigationTest</Link>,
  },
  {
    key: "3",
    icon: <MessageOutlined />,
    label: <Link to="/messages">Messages</Link>,
  },
  {
    key: "4",
    icon: <SettingOutlined />,
    label: <Link to="/settings">Settings</Link>,
  },
  {
    key: "link",
    icon: <GithubOutlined />,
    label: (
      <a
        href="https://github.com/cocochanel1312"
        target="_blank"
        rel="noopener noreferrer"
      >
        Git
      </a>
    ),
  },
]

const Sidebar: React.FC = () => {
  return (
    <>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items}
      />
    </>
  )
}

export default Sidebar
