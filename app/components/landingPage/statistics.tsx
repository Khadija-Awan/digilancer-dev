import { Box, Text, SimpleGrid, Center } from "@chakra-ui/react";
import { statistics } from "@/public/statistics/index";
import { staticticsLinks } from "@/utils/statistics-utils";

export default function Statistics() {
    return (
        <Box width="100%" height={{ base: "470px", md: "480px", lg: "380px"}} bgImage={`url(${statistics.src})`} bgSize="cover" bgPosition="center" position="relative">

            <Box width="100%" position="absolute" height="100%" left="0" top="0" zIndex={4}  py={{base: 16, md: 12, lg: 20}} px={{ base: 10, md: 32, lg: 16, xl: 40 }}>
            <SimpleGrid columns={{ base: 2, lg: 4 }} color="white" py={{ lg: 10}} spacing={{ base: 10, md: 16, lg: 10}}>
                    {staticticsLinks.map((s:any)=>(
                        <Box fontWeight={"semibold"} key={s.id} mx="auto" textAlign={"center"}>
                            <Center>
                            <s.icon fontSize="58px"/>
                            </Center>
                            <Text mt={2} mb={{base: 2, md: 1}} fontSize={{base: "25px", md: "35px"}}>{s.quantity}</Text>
                            <Text fontSize={{base: "15px", md: "16px"}}>{s.title}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>

            <Box position="absolute" zIndex={3} top={0} left={0} width="100%" height="100%" bg="black" opacity={0.65}></Box>
        </Box>
    );
}