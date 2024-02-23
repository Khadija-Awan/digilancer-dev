import NextLink from 'next/link'
import { Box, Text, Button} from "@chakra-ui/react";

export default function FaqsContent() {
    return (
        <Box width="100%" pr={{ lg: 10}} textAlign={{base: "center", lg:"start"}} mb={{base: 12, lg: 0}}>
            <Text mt={2} mb={4} color="green" letterSpacing={"1px"} fontWeight={"bold"} fontSize="14.5px" textTransform={"uppercase"}>Introduce your business or company</Text>
                <Text mt={2} mb={{base: 2, md: 1}} fontWeight={"bold"}  fontSize={{base: "28px", md: "34px"}}>Frequently Asked Questions (FAQs).</Text>
                <Text pl={{md: 6, lg: 0}} pr={{ md: 6, lg: 12}} fontSize="14.5px" lineHeight={1.6} color="gray.800" mt={4}>We understand things can get tricky, but this is where our FAQs section comes in! Get answers to your most pressing questions related to real estate.</Text>
                <Button mt={7} as={NextLink} letterSpacing={"1px"} href="https://reprosify.com/" bg="green" color="white" _hover={{ bg: "purple"}} fontSize={{base: "14px", md: "16px"}} textTransform={"uppercase"} height={{ base: "45px", md:"54px"}} width="170px" borderRadius={"50px"}>Contact Us</Button>
        </Box>
    );
}