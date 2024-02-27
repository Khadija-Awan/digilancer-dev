import { Box, Text, Stack, Flex, Button } from "@chakra-ui/react";
import { background } from "../../../public/hero";
import NextLink from 'next/link'
import Partners from "./partners";

export default function Hero() {
  return (
    <Box width="100%" pt="48px" pb={40} bg="gray.100">
       <Box width="100%" height={{base:"680px", md: "780px", lg:"650px", xl:"780px"}} bgImage={`url(${background.src})`} bgSize="cover" bgPosition="center" position="relative">
        <Box zIndex={2} position="absolute" width="100%" height="100%" bg="black" opacity={0.5}></Box>

        <Box width="100%" position="absolute" left="0" top="0" zIndex={4}>
        <Stack px={{base: 7, lg: 10}} py={{base: "20%", md: "15%", lg: "8%"}} width={{base:"100%", lg:"800px"}} mb={6} mx="auto">
            <Text textAlign={"center"} fontFamily={"Times New Roman"} fontWeight="500" fontSize={{base: "40px", md: "72px", lg: "64px", xl:"75px"}} lineHeight={1.2} color="white">Hello folks, we are Transcend Studio.</Text>
            <Flex direction={{base:"column", lg:"row"}} mt={3}>
            <Box width={{base: "85px", md:"450px", lg: "85px"}} height="1.5px" mt={{base: 0, lg:"26px"}} mb={{base: "25px", lg:0}} ml={{base: "auto", lg:0}} mr={{base: "auto", lg: "15px"}} bg="pink.500"></Box>
            <Text  textAlign={{ base: "center", lg:"justify"}} fontSize={{base: "20px", md: "28px"}} color="white">We create stunning digital experiences that will help your business stand out.</Text>
            </Flex> 
            
            <Flex textAlign={"center"} justifyContent={"center"} mt={10}>
                <Button as={NextLink} href="https://reprosify.com/" bg="purple" color="white" mr={{base:"14px", md:"25px"}} _hover={{ bg: "green"}} fontSize={{base: "14px", md: "18px"}} textTransform={"uppercase"} height={{ base: "45px", md:"50px"}}  borderRadius={"50px"} width={{base: "94%", md: "250px"}}>Purchase Now</Button>
                <Button as={NextLink} href="https://reprosify.com/"  borderRadius={"50px"} bg="brown" color="white" _hover={{ bg: "green"}} fontSize={{base: "14px", md: "18px"}} textTransform={"uppercase"} height={{ base: "45px", md:"50px"}} width={{base: "94%", md: "250px"}}>Read More</Button>
            </Flex>
        </Stack>

        <Partners/> 

        </Box>
       </Box>
       </Box>
  );
}