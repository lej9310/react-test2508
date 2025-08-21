import React from 'react';
import styled from 'styled-components';

// 배너 컨테이너
const BannerContainer = styled.div`
  background: linear-gradient(135deg, #15397f, #2d5aa0);
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 배너 제목
const BannerTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 0;
`;

// 배너 설명
const BannerDescription = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
  opacity: 0.9;
  margin-top: 0;
`;

// 배너 버튼
const BannerButton = styled.button`
  background-color: #ffffff;
  color: #15397f;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// 특별 이벤트 배너를 담당하는 컴포넌트
const Banner = () => {
  return (
    <BannerContainer>
      <BannerTitle>특별 이벤트</BannerTitle>
      <BannerDescription>신규 고객 대상 특별 혜택</BannerDescription>
      <BannerButton>자세히 보기</BannerButton>
    </BannerContainer>
  );
};

export default Banner;