import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const slides = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
];

const SlideWrapper = styled.article`
  position: relative;
  width: 100%;
  height: 300px; /* 슬라이드 높이 고정 */
  overflow: hidden;
  border-radius: 8px;
`;

const SlideImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 화면 비율에 맞게 꽉 채우기 */
`;

export default function Slider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <SlideWrapper>
            <AnimatePresence>
                <SlideImage
                    key={slides[index]}
                    src={slides[index]}
                    alt={`slide-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>
        </SlideWrapper>
    );
}