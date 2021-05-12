import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Helmet } from 'react-helmet-async';
import { Layout } from 'antd';
import { Sider } from 'app/components/Sider/Loadable';
import { Header } from 'app/components/Header/Loadable';
import star from '../../images/star.svg';
import styled from 'styled-components';
import axios from 'axios';

const { Content } = Layout;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledContent = styled(Content)`
  display: grid;
  grid-gap: 50px 100px;
  grid-template-columns: auto auto auto;
  padding: 10px 30px;
  margin-top: 180px;
  width: calc(100% - 300px);
  float: right;
`;

const Winery = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 16px;
  color: #503e9d;
`;

const WineImage = styled.img`
  position: static;
  width: 112px;
  height: 383px;
  left: calc(50% - 112px / 2);
  top: calc(50% - 383px / 2 - 51.5px);
  border-radius: 16px;
`;

const WineInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  align-items: center;
`;

const WineName = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #182135;
`;

const NameAndRatingDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const RatingDiv = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
`;

const WineLocation = styled.div`
  display: flex;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #626264;
  white-space: pre-wrap;
  text-align: right;
`;

const Star = styled.img`
  margin-right: 8px;
`;

const Rating = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #182135;
  margin-right: 5px;
`;
const Reviews = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #626264;
`;

export const HomePage = () => {
  const [winesList, setWinesList] = useState([]);
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.sampleapis.com/wines/reds',
    }).then(res => {
      setWinesList(res.data);
    });
  }, []);

  interface WineProps {
    id: number;
    wine: string;
    winery: string;
    location: string;
    image: string;
    rating: {
      reviews: string;
      average: string;
    };
  }

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Layout>
        <Sider />
        <Layout>
          <Header />
          <StyledContent>
            {winesList.map((wineInfo: WineProps) => {
              let avg;
              let reviews;
              if (wineInfo.rating) {
                avg = wineInfo.rating.average;
                reviews = parseInt(
                  wineInfo.rating.reviews.replace(/[^\d.]/g, ''),
                );
              }
              return (
                <StyledCard key={wineInfo.id} hoverable style={{ width: 300 }}>
                  <WineImage alt={wineInfo.wine} src={wineInfo.image} />
                  <Winery>{wineInfo.winery}</Winery>
                  <WineInfo>
                    <NameAndRatingDiv>
                      <WineName>{wineInfo.wine}</WineName>
                      <RatingDiv>
                        <Star height={16} width={16} alt="star" src={star} />
                        <Rating>{avg && avg}</Rating>
                        <Reviews>({reviews && reviews})</Reviews>
                      </RatingDiv>
                    </NameAndRatingDiv>
                    <WineLocation>{wineInfo.location}</WineLocation>
                  </WineInfo>
                </StyledCard>
              );
            })}
          </StyledContent>
        </Layout>
      </Layout>
    </>
  );
};
