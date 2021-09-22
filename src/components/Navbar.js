import { Menu, Button, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const Navbar = ({ title, icon }) => (
  <div className="nav-container">
    <div className="logo-container">
      <Avatar src={icon} size="large" />
      <Typography.Title className="logo" level={2}>
        <Link to="/">{title}</Link>
      </Typography.Title>
    </div>
    <Menu theme="dark">
      <Menu.Item icon={<HomeOutlined />} key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item icon={<FundOutlined />} key="cryptocurrencies">
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
      </Menu.Item>
      <Menu.Item icon={<MoneyCollectOutlined />} key="exchanges">
        <Link to="/exchanges">Exchanges</Link>
      </Menu.Item>
      <Menu.Item icon={<BulbOutlined />} key="news">
        <Link to="/news">News</Link>
      </Menu.Item>
    </Menu>
  </div>
);

export default Navbar;