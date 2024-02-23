import { Box } from "@chakra-ui/react";
import Hero from "./components/landingPage/hero";
import Statistics from "./components/landingPage/statistics";
import Business from "./components/landingPage/business";
import Faqs from "./components/landingPage/faqs/index";

export default function Home() {
  return (
    <Box width="100%">
    <Hero/>
    <Business/>
    <Faqs/>
    <Statistics/>
    </Box>
  );
}
