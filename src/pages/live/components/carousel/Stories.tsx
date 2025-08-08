import { Stack, Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { useState } from "react";

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
  const [selectedId, setSelectedId] = useState(0);
  const [clickedId, setClickedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setClickedId(id);
    setSelectedId(id);
    onSelect(id);
    setTimeout(() => setClickedId(null), 150); // tıklama animasyonu için reset
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
      {stories.map((story) => {
        const isSelected = story.id === selectedId;
        const isClicked = story.id === clickedId;

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
              transform: isClicked ? "scale(0.9)" : "scale(1)",
            }}
          >
            <Box
              sx={{
                width: storySize,
                height: storySize,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                padding: "3px",
                background: isSelected
                  ? "linear-gradient(45deg, #ff4d4f, #ff9f43, #ff4d4f)"
                  : "linear-gradient(45deg, #ccc, #eee)",
                backgroundSize: "200% 200%",
                animation: isSelected
                  ? "gradientAnim 3s ease infinite"
                  : "none",
                boxShadow: isSelected
                  ? "0 0 15px rgba(255,77,79,0.7)"
                  : "0 0 5px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.08)",
                  boxShadow: "0 0 20px rgba(255,77,79,0.9)",
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
        );
      })}
    </Slider>
  );
};
