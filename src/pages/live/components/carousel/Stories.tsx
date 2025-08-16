import { Stack, Box } from "@mui/material";
import Slider from "react-slick";

type Story = {
  id: number;
  label: string;
  image: string;
};

type StoriesProps = {
  stories: Story[];
  onSelect: (id: number) => void;
};

export const Stories = ({ stories, onSelect }: StoriesProps) => {
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
      {stories.map((story) => {
        console.log(story);
        return (
          <Stack
            key={story.id}
            justifyContent="center"
            alignItems="center"
            onClick={() => handleClick(story.id)}
            sx={{
              display: "flex !important",
              cursor: "pointer",
              transition: "transform 0.1s ease-in-out",
            }}
          >
            <Box
              sx={{
                width: "237px",
                height: "180px",
                borderRadius: "75px",
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
        );
      })}
    </Slider>
  );
};
