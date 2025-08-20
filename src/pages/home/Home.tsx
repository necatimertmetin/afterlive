import { Box } from "@mui/material";
import { Hero } from "./components/Hero";
import { OurStory } from "./components/OurStory";
import { Spacer } from "../../components/layout/Spacer";
import { Contact } from "../contact/Contact";
export const Home = () => {
  return (
    <Box>
      <Hero />

      <Spacer />
      <OurStory />
      <Contact />
    </Box>
  );
};
