import { Stack, Box } from "@mui/material";
import Slider from "react-slick";
import type { Event } from "../../../../types/Event";

type StoriesProps = {
  Events: Event[];
  onSelect: (id: number) => void;
};

export const Stories = ({ Events, onSelect }: StoriesProps) => {
  const handleClick = (id: number) => {
    onSelect(id);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {Events.map((story) => (
        <Stack
          key={story.id}
          justifyContent="center"
          alignItems="center"
          sx={{
            display: "flex !important",
            transition: "transform 0.1s ease-in-out",
          }}
        >
          <Box
            onClick={() => handleClick(story.id)}
            sx={{
              width: "237px",
              height: "180px",
              borderRadius: "75px",

              cursor: "pointer",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              backgroundImage: `url(${story.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter: "drop-shadow(0px 0px 5px #000)",
              my: 2,
            }}
          />
        </Stack>
      ))}
    </Slider>
  );
};
