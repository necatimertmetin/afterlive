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
  const storySize = 96;

  const handleClick = (id: number) => {
    onSelect(id);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
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
              width: storySize,
              height: storySize,
              borderRadius: "50%",
              border: "3px solid red",
              overflow: "hidden",
              position: "relative",
              padding: "3px",
              backgroundSize: "200% 200%",
              "&:hover": {
                boxShadow: "0 0 20px #ff0000",
              },
            }}
          >
            <img
              src={story.image}
              alt={story.label}
              style={{ width: "100%" }}
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
