import { Box, HStack, Text } from "@chakra-ui/react";
import {logo} from "../../../../public/footer/index";

export default function FooterLogoSection() {
  return (
    <Box width="100%">
        <HStack mb={6}>
            <Box mx={{base: "auto", md:0}} width={{base: "200px", md: "270px"}} height={{base:"45px", md:"60px"}} borderRadius="xl" bgImage={`url(${logo.src})`} bgSize="cover" bgPosition="center"></Box>
        </HStack>
        <Text  color="white" textAlign={{base:"center", md:"justify"}} lineHeight={1.8}>Reprosify.com is a service offered by Equinox Holdings, LLC a cutting-edge Platform as a Service (PaaS) designed to supercharge real estate agents enabling them to attain the remarkable levels of success.</Text>
    </Box>
  );
}
