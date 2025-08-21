import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// 슬라이더 이미지들을 import (실제 파일명에 맞게 수정하세요)
import slide1 from '../../assets/image/image2.jpg';
import slide2 from '../../assets/image/image3.jpg';
import slide3 from '../../assets/image/image4.jpg';

// 슬라이드 섹션 컨테이너
const SlideSection = styled.section`
  margin-bottom: 30px;
`;

// 슬라이드 컨테이너
const SlideContainer = styled.div`
  position: relative;
  height: 300px;
  border-radius: 8px;
  overflow: hidden; /* 슬라이드가 컨테이너 밖으로 나가지 않도록 */
`;

// 슬라이드 래퍼 (모든 슬라이드를 가로로 배치)
const SlideWrapper = styled.div`
  display: flex;
  width: 300%; /* 슬라이드 3개 * 100% = 300% */
  height: 100%;
  transform: translateX(-${props => props.currentSlide * (100/3)}%);
  transition: transform 0.5s ease-in-out; /* 좌우 슬라이드 애니메이션 */
`;

// 개별 슬라이드
const Slide = styled.div`
  width: 33.333%; /* 전체 슬라이드 래퍼의 1/3 크기 */
  height: 100%;
  position: relative;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 슬라이드 오버레이 (텍스트 가독성을 위한 어두운 배경)
const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* 반투명 검은색 오버레이 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 슬라이드 콘텐츠
const SlideContent = styled.div`
  text-align: center;
  color: #ffffff;
  z-index: 1;
`;

// 슬라이드 제목
const SlideTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트 그림자로 가독성 향상 */

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// 슬라이드 부제목
const SlideSubtitle = styled.p`
  font-size: 16px;
  opacity: 0.95;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// 슬라이드 인디케이터 컨테이너
const SlideIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`;

// 개별 인디케이터
const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* 인디케이터 그림자 */
`;

// 이미지 슬라이더 컴포넌트 (3초마다 좌에서 우로 자동 전환)
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 슬라이드 데이터 (이미지 포함)
  const slides = [
    {
      id: 1,
      title: "대한은행과 함께하는 안전한 금융거래",
      subtitle: "신뢰할 수 있는 은행 서비스를 경험하세요",
      image: slide1
    },
    {
      id: 2,
      title: "스마트한 인터넷뱅킹 서비스",
      subtitle: "언제 어디서나 편리한 금융 서비스",
      image: slide2
    },
    {
      id: 3,
      title: "다양한 금융상품으로 미래를 준비하세요",
      subtitle: "예금, 대출, 카드까지 원스톱 서비스",
      image: slide3
    }
  ];

  // 슬라이드 자동 전환 효과 (3초 간격)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <SlideSection>
      <SlideContainer>
        <SlideWrapper currentSlide={currentSlide}>
          {slides.map((slide, index) => (
            <Slide key={slide.id} bgImage={slide.image}>
              <SlideOverlay>
                <SlideContent>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <SlideSubtitle>{slide.subtitle}</SlideSubtitle>
                </SlideContent>
              </SlideOverlay>
            </Slide>
          ))}
        </SlideWrapper>
        
        <SlideIndicators>
          {slides.map((_, index) => (
            <Indicator
              key={index}
              active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </SlideIndicators>
      </SlideContainer>
    </SlideSection>
  );
};

export default Slider;