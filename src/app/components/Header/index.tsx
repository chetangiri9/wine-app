/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Layout, Input } from 'antd';
import location from '../../images/location.svg';
import bag from '../../images/bag.svg';
import coupon from '../../images/coupon.svg';
import cart from '../../images/cart.svg';
import search from '../../images/search.svg';
import thumb from '../../images/thumb.svg';
import arrows from '../../images/arrows.svg';
import restaurant from '../../images/restaurant.svg';
import silverware from '../../images/silverware.svg';

const { Header: H } = Layout;
interface Props {}

export const Header = memo((props: Props) => {
  return (
    <StyledHeader>
      <TopDiv>
        <Div>
          <HeaderItemDiv1>
            <StyledIcon height={24} width={24} src={location} />
            <StyledP1>Italy, California</StyledP1>
            <StyledArrowIcon height={24} width={10} src={arrows} />
          </HeaderItemDiv1>
          <HeaderItemDiv2>
            <StyledIcon height={24} width={24} src={bag} />
            <StyledP2>Pick up</StyledP2>
            <StyledArrowIcon height={24} width={10} src={arrows} />
          </HeaderItemDiv2>
          <HeaderItemDiv3>
            <StyledIcon height={24} width={24} src={coupon} />
            <StyledP3>Best deals</StyledP3>
            <StyledArrowIcon height={24} width={10} src={arrows} />
          </HeaderItemDiv3>
        </Div>
        <StyledInput
          prefix={<StyledIcon height={20} width={20} src={search} />}
          placeholder="Search for anything..."
        />
        <StyledCartIcon height={48} width={48} src={thumb} />
        <StyledCartIcon height={48} width={48} src={cart} />
      </TopDiv>
      <TabDiv>
        <RestaurantTabDiv>
          <StyledIcon height={16} width={16} src={restaurant} />
          <RestaurantText>Restaurant (8)</RestaurantText>
        </RestaurantTabDiv>
        <DishesTabDiv>
          <StyledIcon height={16} width={16} src={silverware} />
          <DishesText>Dishes (23)</DishesText>
        </DishesTabDiv>
      </TabDiv>
    </StyledHeader>
  );
});

const Div = styled.div`
  display: flex;
`;

const TopDiv = styled.div`
  display: flex;
`;

const TabDiv = styled.div`
  display: flex;
  width: 300px;
  margin-top: 40px;
  margin-bottom: 30px;
`;

const RestaurantTabDiv = styled.div`
  display: flex;
  background: #f7f7f7;
  border-radius: 8px;
  height: 40px;
  align-items: center;
  padding: 12px;
`;

const RestaurantText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #626264;
  margin: 0;
`;

const DishesTabDiv = styled.div`
  display: flex;
  background: #503e9d;
  border-radius: 8px;
  height: 40px;
  align-items: center;
  padding: 12px;
  margin-left: 16px;
`;

const DishesText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #f7fafc;
  margin: 0;
`;

const StyledHeader = styled(H)`
  display: flex;
  flex-direction: column;
  width: calc(100% - 300px);
  float: right;
  padding: 5px 30px;
  margin-top: 40px;
`;

const StyledIcon = styled.img`
  margin-right: 10px;
`;

const StyledCartIcon = styled.img`
  margin-right: 10px;
  margin-top: -10px;
`;

const StyledArrowIcon = styled.img`
  float: right;
`;

const HeaderItemDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 225px;
  justify-content: space-between;
`;

const HeaderItemDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 115px;
  justify-content: space-between;
  margin-left: 30px;
`;

const HeaderItemDiv3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 130px;
  justify-content: space-between;
  margin-left: 30px;
`;

const StyledP1 = styled.p`
  width: 160px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
`;

const StyledP2 = styled.p`
  margin: 0;
  width: 60px;
`;

const StyledP3 = styled.p`
  margin: 0;
  width: 80px;
`;

const StyledInput = styled(Input)`
  padding-left: 15px;
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-right: 16px;
  margin-top: -10px;
  background: #f7f7f7;
  border-radius: 10px;
  width: 380px;
  height: 48px;
  align-items: center;
  .ant-input {
    border: 0;
    width: 100%;
    background: #f7f7f7;
  }
`;
