/**
 *
 * Sider
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Layout, Menu } from 'antd';
import logo from '../../images/logo.svg';
import home from '../../images/home.svg';
import explore from '../../images/explore.svg';
import fav from '../../images/fav.svg';
import messages from '../../images/messages.svg';
import orders from '../../images/orders.svg';
import settings from '../../images/settings.svg';
import mark from '../../images/mark.svg';
import arrows from '../../images/arrows.svg';
import promotion from '../../images/promotion.svg';

const { Sider: S } = Layout;

interface Props {}

const StyledSider = styled(S)`
  height: 100vh;
  overflow: auto;
  position: fixed;
  left: 0;
  background: #f7f7f7;
  z-index: 99999;
`;

const Logo = styled.img`
  width: 27.45px;
  height: 27.45px;
  margin-right: 9px;
`;

const Head = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin: 32px 36px;
  transition: all 0.3s ease-in-out;
`;

const StyledText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`;

const { Item } = Menu;

const StyledMenu = styled(Menu)`
  && {
    background-color: transparent;
    border-right: none;
    padding: 0;
    .ant-menu-item > .ant-menu-item-selected {
      width: 0;
    }
    .ant-menu-item {
      .ant-menu-submenu-title {
        width: 0;
      }
      .anticon {
        transition: none;
      }
    }
  }
`;

const StyledItem = styled(Item)`
  &&& {
    height: 52px;
    padding-left: 20px !important;
    display: flex;
    margin: 0 10px;
    align-items: center;
    font-size: 16px;

    ${(props: any) => {
      return (
        props.eventKey === '3' &&
        `background: #503e9d; border-radius: 12px; color: #F7FAFC;`
      );
    }};
  }
`;

const StyledIcon = styled.img`
  line-height: unset;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const FooterIcon = styled.img``;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 30px;
  left: 30px;
  position: absolute;
`;

const FooterTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
`;

const Name = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  margin: 0;
  margin-top: 5px;
  margin-left: 10px;
  color: #182135;
`;

const Email = styled.p`
  font-size: 11px;
  line-height: 16px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  margin-top: 5px;
  margin-left: 10px;
  color: #626264;
`;

const StyledPromo = styled.img`
  background-position: -35px -180px;
`;

const StyledMessage = styled.p`
  text-align: left;
  width: 150px;
`;

const StyledMessageDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledMessageNum = styled.p`
  text-align: center;
  height: 24px;
  width: 24px;
  background: #503e9d;
  color: #f7fafc;
  border-radius: 10px;
`;

export const Sider = memo((props: Props) => {
  return (
    <StyledSider width="300px">
      <Head>
        <Logo src={logo}></Logo>
        <StyledText>Nibble</StyledText>
      </Head>
      <StyledMenu
        data-testid="sider-menu"
        theme="light"
        mode="inline"
        selectable={false}
      >
        <StyledItem
          title="Home"
          key="1"
          icon={<StyledIcon height={24} width={24} src={home} />}
        >
          Home
        </StyledItem>
        <StyledItem
          title="Explore"
          key="2"
          icon={<StyledIcon height={24} width={24} src={explore} />}
        >
          Explore
        </StyledItem>
        <StyledItem
          title="Favorites"
          key="3"
          icon={<StyledIcon height={24} width={24} src={fav} />}
          active={true}
        >
          Favorites
        </StyledItem>
        <StyledItem
          title="Orders"
          key="4"
          icon={<StyledIcon height={24} width={24} src={orders} />}
        >
          Orders
        </StyledItem>
        <StyledItem
          title="Messages"
          key="5"
          icon={<StyledIcon height={24} width={24} src={messages} />}
        >
          <StyledMessageDiv>
            <StyledMessage>Messages</StyledMessage>
            <StyledMessageNum>2</StyledMessageNum>
          </StyledMessageDiv>
        </StyledItem>
        <StyledItem
          title="Settings"
          key="6"
          icon={<StyledIcon height={24} width={24} src={settings} />}
        >
          Settings
        </StyledItem>
      </StyledMenu>
      <StyledPromo alt="promotion" height={300} width={300} src={promotion} />
      <Footer>
        <FooterIcon height={48} width={48} src={mark} />
        <FooterTextDiv>
          <Name>Mark Clarke</Name>
          <Email>markclarke@gmail.com</Email>
        </FooterTextDiv>
        <FooterIcon height={24} width={10} src={arrows} />
      </Footer>
    </StyledSider>
  );
});
