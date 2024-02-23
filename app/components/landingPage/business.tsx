import { Box, Text, Button } from "@chakra-ui/react";
import NextLink from 'next/link'
import { business } from "@/public/business/index";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Business() {
    return (
        <Box width="100%" height={{ base: "570px", md: "540px", lg: "550px"}} bgImage={`url(${business.src})`} bgSize="cover" bgPosition={{ base: "center left", md: "center"}} position="relative">

            <Box width="100%" position="absolute" height="100%" left="0" top="0" textAlign={"center"} zIndex={4}  py={{base: 12, md: 16}} px={{ base: 6, md: 32, lg: 16, xl: 40 }}>
                <Box width={{base: "100%", md:"550px"}} mx="auto">
                <Text lineHeight={1.3} px={{xl: 10}} mt={2} mb={4} color="white" fontSize={{base: "32px", md: "45px"}}>Introduce your business or company</Text>
                <Text mt={2} mb={{base: 2, md: 1}} color="gray.50" fontWeight={"300"} fontSize={{base: "17.5px", md: "23px"}}>Since our foundation in 2005 our goal has been to use digital technology to create experiences.</Text>
                <Text fontSize="14.5px" lineHeight={1.6} color="#BFBFBF" mt={4}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</Text>
                <Button mt={10} as={NextLink} letterSpacing={"1px"} href="https://reprosify.com/" bg="green" color="white" _hover={{ bg: "purple"}} fontSize={{base: "14px", md: "16px"}} textTransform={"uppercase"} height={{ base: "45px", md:"54px"}} width={{base: "94%", md: "290px"}} borderRadius={"50px"} rightIcon={<FaLongArrowAltRight/>}>Continue Reading</Button>
                </Box>
            </Box>

            <Box position="absolute" zIndex={3} top={0} left={0} width="100%" height="100%" bg="black" opacity={0.65}></Box>
        </Box>
    );
}