import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Transform } from "@mui/icons-material";
import Button from "@mui/material/Button";

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slidenext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
    (items) => <HomeSectionCard />
  );

  return (
    <div className="border">
      <div className="relative p-5 border border-black">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          autoPlay
          autoPlayInterval={2000}
          infinite
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        { <Button
          onClick={slidePrev}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="prev"
        >
          <ArrowBackIosNewIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />{" "}
        </Button>}
       {activeIndex !== items.length-5 && <Button
          onClick={slidenext}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <ArrowForwardIosIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />{" "}
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
