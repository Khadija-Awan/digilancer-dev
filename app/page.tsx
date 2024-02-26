import { Box } from "@chakra-ui/react";
import Hero from "./components/landingPage/hero";
import Statistics from "./components/landingPage/statistics";
import Business from "./components/landingPage/business";
import Faqs from "./components/landingPage/faqs/index";
import ContentSection from "./components/landingPage/content";
import Services from "./components/landingPage/services";
import Central from "./components/landingPage/central";
import Partners from "./components/landingPage/partners";

export default function Home() {
  return (
    <Box width="100%">
    <Hero/>
    <Partners/>
    <ContentSection/>
    <Central/>
    <Business/>
    <Services/>
    <Statistics/>
    <Faqs/>
    </Box>
  );
}
