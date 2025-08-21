import React from 'react';
import styled from 'styled-components';

// 네비게이션 전체 컨테이너
const NavContainer = styled.nav`
  width: 100%;
  background-color: #15397f;
`;

// 네비게이션 내부 컨테이너
const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// 메인 메뉴 리스트
const MainMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// 메뉴 아이템
const MenuItem = styled.li`
  position: relative;
  flex: 1;
`;

// 메뉴 링크
const MenuLink = styled.a`
  display: block;
  padding: 15px 0;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

// 서브메뉴 (마우스오버 시 표시)
const SubMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #2d5aa0;
  list-style: none;
  margin: 0;
  padding: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;

  ${MenuItem}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

// 서브메뉴 아이템
const SubMenuItem = styled.li`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

// 서브메뉴 링크
const SubMenuLink = styled.a`
  display: block;
  padding: 10px 15px;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

// 메인 네비게이션 메뉴를 담당하는 컴포넌트
const Navigation = () => {
  // 메뉴 데이터 구조
  const menuData = [
    {
      title: '개인',
      subItems: ['조회', '이체', '신설', '예금/신탁']
    },
    {
      title: '기업',
      subItems: ['조회', '이체', '외환', '수표/어음']
    },
    {
      title: '금융상품',
      subItems: ['대출상품', '펀드상품']
    },
    {
      title: '카드',
      subItems: ['카드정보', '이벤트정보']
    }
  ];

  return (
    <NavContainer>
      <NavInner>
        <MainMenu>
          {menuData.map((menu, index) => (
            <MenuItem key={index}>
              <MenuLink href="#">{menu.title}</MenuLink>
              <SubMenu>
                {menu.subItems.map((item, subIndex) => (
                  <SubMenuItem key={subIndex}>
                    <SubMenuLink href="#">{item}</SubMenuLink>
                  </SubMenuItem>
                ))}
              </SubMenu>
            </MenuItem>
          ))}
        </MainMenu>
      </NavInner>
    </NavContainer>
  );
};

export default Navigation;