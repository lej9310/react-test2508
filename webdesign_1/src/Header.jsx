import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #004080;
  color: white;
  position: relative;
   z-index: 9999;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

const MenuItem = styled.div`
  position: relative;
`;

const MainLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: #ffcc00;
  }
`;

const SubMenu = styled(motion.ul)`
  position: absolute;
  top: 40px;
  left: 0;
  background: white;
  color: black;
  list-style: none;
  padding: 10px;
  margin: 0;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const SubItem = styled(Link)`
  display: block;
  padding: 8px 12px;
  color: black;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background: #eee;
    color: #004080;
  }
`;

export default function Header() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const menus = [
        { title: "Menu1", link: "/menu1", subs: ["Sub1", "Sub2", "Sub3"] },
        { title: "Menu2", link: "/menu2", subs: ["Sub1", "Sub2", "Sub3"] },
        { title: "Menu3", link: "/menu3", subs: ["Sub1", "Sub2", "Sub3"] },
        { title: "Menu4", link: "/menu4", subs: ["Sub1", "Sub2", "Sub3"] },
    ];

    return (
        <HeaderWrap>
            <Logo>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                    LOGO
                </Link>
            </Logo>

            <Nav>
                {menus.map((menu, i) => (
                    <MenuItem
                        key={i}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        <MainLink to={menu.link}>{menu.title}</MainLink>
                        <AnimatePresence>
                            {hoverIndex === i && (
                                <SubMenu
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {menu.subs.map((sub, j) => (
                                        <li key={j}>
                                            <SubItem to={`${menu.link}/sub${j + 1}`}>{sub}</SubItem>
                                        </li>
                                    ))}
                                </SubMenu>
                            )}
                        </AnimatePresence>
                    </MenuItem>
                ))}
            </Nav>
        </HeaderWrap>
    );
}