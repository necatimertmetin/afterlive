import { Box } from "@mui/material";
import { Hero } from "./components/Hero";
import { OurStory } from "./components/OurStory";
import { Spacer } from "../../components/layout/Spacer";
import { Contact } from "../contact/Contact";
import bar from "/images/hero/bar.jpg";
export const Home = () => {
  return (
    <Box>
      <Hero />
      <OurStory />
      <Spacer imageUrl={bar} />

      <Contact />
    </Box>
  );
};
