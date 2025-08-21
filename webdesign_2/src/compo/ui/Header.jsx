import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/image/image.png'

// 헤더 전체 컨테이너
const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
`;

// 헤더 내부 컨테이너
const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// 로고 영역
const Logo = styled.a`
  display: block;
  width: 200px;
  height: 40px;
  padding: 10px 0;
`;
const LogoImage = styled.img`
  width: 30px;
  height: 100%;
  /* object-fit: contain; */
`

// 로고 부제목
const LogoSubtitle = styled.span`
  color: #15397f;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

// 헤더 및 로고를 담당하는 컴포넌트
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo href='/bank'>
        <LogoImage src={logoImage} alt='"리액트 로고'></LogoImage>
          <LogoSubtitle>대한은행</LogoSubtitle>
        </Logo>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;