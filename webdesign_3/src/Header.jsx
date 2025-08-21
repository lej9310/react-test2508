import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 햄버거 메뉴 상태 추가

  const menuItems = [
    {
      id: 'menu1',
      name: '회사소개',
      subMenus: ['회사개요', '비전미션', '연혁', '조직도']
    },
    {
      id: 'menu2',
      name: '서비스',
      subMenus: ['웹개발', '앱개발', '클라우드', 'AI솔루션']
    },
    {
      id: 'menu3',
      name: '포트폴리오',
      subMenus: ['프로젝트', '고객사례', '기술스택', '수상실적']
    },
    {
      id: 'menu4',
      name: '고객지원',
      subMenus: ['문의하기', 'FAQ', '다운로드', '커뮤니티']
    },
    {
      id: 'menu5',
      name: '채용정보',
      subMenus: ['채용공고', '복리후생', '회사문화', '지원하기']
    }
  ];

  const handleMouseEnter = (menuId) => {
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  // // ✅ toggleMenu 함수 정의
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <header className="header">
      <div className="header-container">
        {/* 로고 */}
        <div className="logo">
          <h1>JOY COUNTRY CLUB</h1>
        </div>

      
        {/* <button className="hamburger-menu" onClick={toggleMenu} aria-label="메뉴 열기">
          ☰
        </button> */}


        {/* 메인 메뉴 */}
        <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="menu-list">
            {menuItems.map((menu) => (
              <li
                key={menu.id}
                className="menu-item"
                onMouseEnter={() => handleMouseEnter(menu.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* <nav className="main-nav">
          <ul className="menu-list">
            {menuItems.map((menu) => (
              <li
                key={menu.id}
                className="menu-item"
                onMouseEnter={() => handleMouseEnter(menu.id)}
                onMouseLeave={handleMouseLeave}
              > */}
                <span className="menu-link">{menu.name}</span>

                {/* 서브메뉴 */}
                {activeMenu === menu.id && (
                  <ul className="submenu-list">
                    {menu.subMenus.map((subMenu, index) => (
                      <li key={index} className="submenu-item">
                        <a href="#" className="submenu-link">{subMenu}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;