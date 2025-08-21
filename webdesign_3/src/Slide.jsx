import React, { useState, useEffect } from 'react';
import './Slide.css';

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: './img1.jpg',
      title: '프리미엄 골프 경험',
      subtitle: '최고의 그린에서 특별한 순간을',
      description: '전문적인 골프 코스와 최상의 서비스로 잊을 수 없는 골프 경험을 제공합니다.',
      cta: '예약하기'
    },
    {
      id: 2,
      image: './img2.jpg',
      title: '자연과 함께하는 골프',
      subtitle: '아름다운 풍경 속에서',
      description: '도시를 벗어나 자연 속에서 마음껏 골프를 즐겨보세요.',
      cta: '코스 둘러보기'
    },
    {
      id: 3,
      image: './img3.jpg',
      title: '전문 골프 레슨',
      subtitle: '체계적인 교육 시스템',
      description: '초보자부터 고급자까지, 개인 맞춤형 골프 레슨을 제공합니다.',
      cta: '레슨 신청'
    },
    {
      id: 4,
      image: './img4.jpg',
      title: '골프 패키지 상품',
      subtitle: '합리적인 가격으로',
      description: '골프장 이용부터 장비 렌탈까지, 모든 것을 한 번에 해결하세요.',
      cta: '패키지 보기'
    }
  ];

  // 자동 슬라이드 전환
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // 수동 슬라이드 전환
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="slide-container">
      {/* 메인 슬라이드 */}
      <div className="main-slide">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `translateX(${(index - currentSlide) * 100}%)`
            }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h2 className="slide-title">{slide.title}</h2>
                <h3 className="slide-subtitle">{slide.subtitle}</h3>
                <p className="slide-description">{slide.description}</p>
                <button className="slide-cta">{slide.cta}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 네비게이션 화살표 */}
      <button className="slide-nav prev" onClick={goToPrevious}>
        <span>&lt;</span>
      </button>
      <button className="slide-nav next" onClick={goToNext}>
        <span>&gt;</span>
      </button>

      {/* 슬라이드 인디케이터 */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* 광고 메시지 배너 */}
      <div className="ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🏌️</div>
          <div className="ad-text">
            <h4>신규 회원 특별 혜택</h4>
            <p>첫 방문 시 50% 할인 + 무료 장비 렌탈</p>
          </div>
          <button className="ad-cta">자세히 보기</button>
        </div>
      </div>
    </div>
  );
};

export default Slide;