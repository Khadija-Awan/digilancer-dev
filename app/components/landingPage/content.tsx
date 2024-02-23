import NextLink from 'next/link'
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { contentImage } from '@/public/content/index';
import { Poppins} from "next/font/google";

const poppinsBold = Poppins({ subsets: ["latin"], weight: "500" });
const poppinsNormal = Poppins({ subsets: ["latin"], weight: "400" });

export default function ContentSection() {
    return (
        <Flex direction={{ base: "column-reverse", lg: "row" }} width="100%" bg="white" py={{base: 16, md: 20}} alignItems={"center"} px={{ base: 6, lg: 12, xl: 52 }}>

            <Box width="100%">
                <Box width={{ base: "100%", md: "80%", lg:"96%" }} mx={{md: "auto", lg: 0}} pr={{ xl: 10 }} textAlign={{ base: "center", lg: "start" }}>
                    <Text mt={2} mb={5} bg="gray.600" px={3.5}  mx={{base: "auto", lg: 0}} py={2} width="180px" borderRadius="sm" color="white" letterSpacing={"1px"} fontWeight={"bold"} fontSize={{base: "13px", md:"14px"}} textTransform={"uppercase"}>Get Started Now</Text>
                    <Text mt={2} mb={{ base: 4, md: 8, lg: 1 }} lineHeight={{base: 1.5, md: 1.3}} color="#374A8A" letterSpacing={"0.6px"} className={poppinsBold.className} fontSize={{ base: "26px", md: "35px", lg:"32px", xl: "35px" }}>The world's most powerful website build now.</Text>
                    <Text pl={{ md: 6, lg: 0 }} pr={{ md: 6, lg: 0 }} fontSize="14px" lineHeight={1.6} color="gray.700" mt={4} letterSpacing={"0.4px"} className={poppinsNormal.className}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                    <Text pl={{ md: 6, lg: 0 }} pr={{ md: 6, lg: 0 }} fontSize="14px" lineHeight={1.6} color="gray.700" mt={4} letterSpacing={"0.4px"} className={poppinsNormal.className}>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book.</Text>
                    <Button mt={{base: 8, lg: 10}} as={NextLink} letterSpacing={"1px"} href="https://reprosify.com/" bg="green" color="white" _hover={{ bg: "purple" }} fontSize={{ base: "14px", md: "15px" }} textTransform={"uppercase"} height={{ base: "42px", md: "50px" }} width="170px" borderRadius={"50px"}>Read More</Button>
                </Box>
            </Box>

            <Box width="100%">
                <Box width={{ base: "270px", md: "440px", lg:"400px", xl: "510px"}} mx={{base:"auto", lg: 0}} ml={{lg:"auto"}} mr={{xl: 12}} height={{base: "229px", md: "370px", lg:"340px", xl: "440px"}} bgImage={`url(${contentImage.src})`} bgSize="cover" bgPosition="center" mb={{ base: 10, lg: 0 }}></Box>
            </Box>
        </Flex>
    );
}