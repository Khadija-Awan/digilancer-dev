import { Box } from "@chakra-ui/react";
import Hero from "./components/landingPage/hero";
import Statistics from "./components/landingPage/statistics";
import Business from "./components/landingPage/business";

export default function Home() {
  return (
    <Box width="100%">
    <Hero/>
    <Business/>
    <Statistics/>
    </Box>
  );
}
