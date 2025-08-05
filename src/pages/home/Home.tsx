import { Box } from "@mui/material";
import { Hero } from "./components/Hero";
import { OurStory } from "./components/OurStory";
import { Spacer } from "../../components/layout/Spacer";
import { WhatWeHave } from "./components/WhatWeHave";
import { Social } from "./components/Social";
import { Contact } from "../contact/Contact";
import nightclub from "/images/hero/nightclub.webp";
export const Home = () => {
  return (
    <Box>
      <Hero />
      <OurStory />
      <Spacer imageUrl={nightclub} />
      <WhatWeHave />
      <Social />
      <Contact />
    </Box>
  );
};
