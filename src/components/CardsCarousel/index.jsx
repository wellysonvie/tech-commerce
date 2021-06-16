import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  Container,
  Slide,
  PreviousButton,
  NextButton,
  CarouselPosition,
} from "./styles";

const CardsCarousel = ({ items, CardTemplate, numberOfCardsOnSlide }) => {
  const [firstCardIndexOnSlide, setFirstCardIndexOnSlide] = useState(0);
  const [lastCardIndexOnSlide, setLastCardIndexOnSlide] =
    useState(numberOfCardsOnSlide);

  function previousSlide() {
    if (firstCardIndexOnSlide !== 0) {
      setFirstCardIndexOnSlide(firstCardIndexOnSlide - numberOfCardsOnSlide);
      setLastCardIndexOnSlide(lastCardIndexOnSlide - numberOfCardsOnSlide);
    }
  }

  function nextSlide() {
    if (lastCardIndexOnSlide < items.length) {
      setFirstCardIndexOnSlide(firstCardIndexOnSlide + numberOfCardsOnSlide);
      setLastCardIndexOnSlide(lastCardIndexOnSlide + numberOfCardsOnSlide);
    }
  }

  return (
    <Container>
      <Slide numberOfCards={numberOfCardsOnSlide}>
        <PreviousButton onClick={previousSlide}>
          <MdKeyboardArrowLeft />
        </PreviousButton>
        {items
          .slice(firstCardIndexOnSlide, lastCardIndexOnSlide)
          .map((data) => (
            <CardTemplate key={data.id} data={data} />
          ))}
        <NextButton onClick={nextSlide}>
          <MdKeyboardArrowRight />
        </NextButton>
      </Slide>
      <CarouselPosition
        currentSlide={Math.ceil(lastCardIndexOnSlide / numberOfCardsOnSlide)}
      >
        {new Array(Math.ceil(items.length / numberOfCardsOnSlide))
          .fill("")
          .map((item, index) => (
            <span key={index}></span>
          ))}
      </CarouselPosition>
    </Container>
  );
};

export default CardsCarousel;
