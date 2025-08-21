import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterWrap = styled.footer`
  height: 100px;  
  display: flex;
  flex-direction: column;  
  justify-content: space-between;
  color: gray;
  padding: 0 10px;
  text-align: left;  
  white-space: pre-line;
`;

const TopGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 100px;
`;

const LeftGroup = styled.div`
  flex: 1;
  white-space: pre-line;  
`;

const RightGroup = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column; /* 세로 방향 배치 */
  align-items: flex-end;
  gap: 12px;
  min-width: 160px;
`;

const SnsGroup = styled.div`
  display: flex;  
  gap: 10px;
  margin-top: 1px;
`;

const SnsIconLink = styled.a`
  color: gray;
  font-size: 24px;
  &:hover {
    color: #ffcc00;
  }
`;

const Copyright = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: gray;
  border-top: 1px solid rgba(128, 128, 128, 0.4);
  padding-top: 5px;
  margin-top: 5px;
  user-select: none;
`;

export default function Footer() {
  return (
    <FooterWrap>
      <TopGroup>
        <LeftGroup>
          {`LEJ Mall
            (주)쇼핑몰 대표자: 이은정   이메일:@lejmall.co.kr
            주소: 서울특별시 서초구 남부순환로 1111 TOWER (주)쇼핑몰
            사업자등록번호 000-00-0000
            고객님은 안전거래를 위해 현금으로 결제 시 저희 쇼핑몰에 가입한 구매안전서비스를 이용하실 수 있습니다.`}
        </LeftGroup>
        
        <RightGroup>
          {`LANGUAGE        
            FAMILY SITE`}

          <SnsGroup>
            <SnsIconLink href="https://www.facebook.com" target="_blank" rel="no">
              <FaFacebook />
            </SnsIconLink>
            <SnsIconLink href="https://www.instagram.com" target="_blank" rel="no">
              <FaInstagram />
            </SnsIconLink>
            <SnsIconLink href="https://www.twitter.com" target="_blank" rel="no">
              <FaTwitter />
            </SnsIconLink>
          </SnsGroup>
          
        </RightGroup>
      </TopGroup>

      <Copyright>
        © 2025. LEJMall Corp. All Rights Reserved.
      </Copyright>

    </FooterWrap>
  )
}