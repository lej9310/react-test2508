import styled from "styled-components";

const FooterWrap = styled.footer`
  height: 80px;
  background: #004080;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export default function Footer() {
    return <FooterWrap>© 2025 강원천문대</FooterWrap>;
}