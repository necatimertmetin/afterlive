import { Stack, Box, Typography } from "@mui/material";
import Slider from "react-slick";

type Story = {
  id: number;
  label: string;
  color: string;
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
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {stories.map((story) => (
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
              width: 196,
              height: 196,
              borderRadius: "50px",
              border: "3px solid red",
              position: "relative",
              backgroundSize: "200% 200%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              "&:hover": {
                boxShadow: "0 0 20px #ff0000",
              },
            }}
          >
            <img
              src={story.image}
              alt={story.label}
              style={{
                height: "100%", // yüksekliği sabit tut
                width: "auto", // oranı koru
              }}
            />
          </Box>

          <Typography textAlign="center" mt={1}>
            {story.label}
          </Typography>
        </Stack>
      ))}
    </Slider>
  );
};
