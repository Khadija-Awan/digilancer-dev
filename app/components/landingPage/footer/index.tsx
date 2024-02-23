import { Box, SimpleGrid } from "@chakra-ui/react";
import FooterLogoSection from "./logoSection";
import FooterLinksSection from "./linksSection";
import { footerLegalLinks, footerServicesLinks } from "@/utils/footer-utils";
import FooterContactSection from "./contactSection";

export default function Footer() {
  return (
    <Box width="100%" px={{base: 10, md: 16, lg: 8, xl: 32}} py={{base: 10, md: 20}} bg="black">
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} spacing={{base: 10, lg:6}}>
        <Box width={{base:"100%", lg:"300px"}} mr={{lg: "24%", xl:"25%"}}>
        <FooterLogoSection/>
        </Box>

        <Box ml={{md: "15%", lg:"41%", xl:"40%"}} mt={{md: "5%", lg:0}} mr={{lg: "-10px", xl:0}}>
        <FooterLinksSection title={"Legal"} displayLinks={footerLegalLinks}/>
        </Box>

        <Box ml={{lg:"26%"}}>
        <FooterLinksSection title={"Services"} displayLinks={footerServicesLinks}/>
        </Box>

        <Box ml={{md: "15%", lg:0}}>
        <FooterContactSection/>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
