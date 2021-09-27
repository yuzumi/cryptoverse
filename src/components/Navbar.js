import { useState, useEffect } from 'react';

import { Menu, Button, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import { getScreenSize, toggle } from 'utils/common';
import { breakpoints } from 'config/constants';

const Navbar = ({ title, icon }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  
  const [screenSize, setScreenSize] = useState(getScreenSize);

  const toggleMenu = () => {
    setIsMenuActive(toggle);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMenuActive(screenSize >= breakpoints.md);
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title className="logo" level={2}>
          <Link to="/">{title}</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={toggleMenu}
        >
          <MenuOutlined />
        </Button>
      </div>
      {isMenuActive && (
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
      )}
    </div>
  );
};

export default Navbar;