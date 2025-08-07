import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

export const Live = () => {
  const stories = [...Array(7)].map((_, index) => ({
    id: index,
    label: `Story ${index + 1}`,
    color: `hsl(${index * 40}, 70%, 60%)`,
  }));

  const textItems = [
    "Video hakkında bilgi 1",
    "Video hakkında bilgi 2",
    "Video hakkında bilgi 3",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: "100%", padding: "20px 0" }}>
      {/* Stories Carousel */}
      <Slider {...settings}>
        {stories.map((story) => (
          <Box
            key={story.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                backgroundColor: story.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                flexShrink: 0,
              }}
            >
              {story.id + 1}
            </Box>
          </Box>
        ))}
      </Slider>

      {/* Video + Text Area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          marginTop: 4,
        }}
      >
        {/* Video (Left) */}
        <Box
          sx={{
            flex: 1,
            minWidth: 300,
            maxWidth: "100%",
          }}
        >
          <video
            width="100%"
            height="auto"
            controls
            style={{ borderRadius: "8px" }}
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </Box>

        {/* Text Items (Right) */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 2,
          }}
        >
          {textItems.map((text, idx) => (
            <Box
              key={idx}
              sx={{
                padding: 2,
                borderRadius: "8px",
                boxShadow: 1,
              }}
            >
              <Typography variant="body1">{text}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
