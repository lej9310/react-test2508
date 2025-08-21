import React from 'react';
import styled from 'styled-components';

// 푸터 전체 컨테이너 (그레이스케일 필터 적용)
const FooterContainer = styled.footer`
  width: 100%;
  background-color: #666;
  color: #ffffff;
  margin-top: 40px;
  filter: grayscale(100%);
`;

// 푸터 내부 컨테이너
const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
`;

// 푸터 콘텐츠
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// 푸터 로고
const FooterLogo = styled.div`
  h4 {
    font-size: 18px;
    color: #ffffff;
    margin: 0;
  }
`;

// 푸터 정보
const FooterInfo = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 15px;
  }
`;

// 푸터 정보 텍스트
const FooterText = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  color: #ccc;
  margin-top: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterContent>
          <FooterLogo>
            <h4>대한은행</h4>
          </FooterLogo>
          <FooterInfo>
            <FooterText>주소: 서울특별시 중구 남대문로 39</FooterText>
            <FooterText>고객센터: 1588-2267</FooterText>
            <FooterText>Copyright © 2025 Korea Bank. All rights reserved.</FooterText>
          </FooterInfo>
        </FooterContent>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;