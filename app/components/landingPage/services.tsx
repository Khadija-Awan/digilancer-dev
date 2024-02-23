import { servicesLinks } from "@/utils/services-utils";
import { Box, Text, SimpleGrid, HStack } from "@chakra-ui/react";

export default function Services() {
    return (
        <Box width="100%" py={{base: 16, md: 20, lg: 32}} px={{ base: 6, md: 20, lg: 16, xl: 52 }} bg="#F7F7F7">

            <Box textAlign={"center"} mb={{base: 16, lg: 28}} width={{base:"100%", lg:"80%", xl:"70%"}} mx="auto">
                <Text mb={8} textTransform={"uppercase"} color="green" fontSize={{base: "36px", md: "42px"}} fontWeight={"bold"}>Our Services</Text>
                <Text lineHeight={1.8} fontSize={{base: "14.5px", md:"15px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </Box>

            <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={{base: 10, md: 16}}>
                {servicesLinks.map((s:any)=>(
                <Box width="100%" key={s.id}>
                    <HStack mb={3.5}>
                        <s.icon fontSize="37px" color="green"/>
                        <Text ml={2.5} fontWeight={"bold"} textTransform={"uppercase"}>{s.title}</Text>
                    </HStack>
                    <Text fontSize="14.5px" lineHeight={1.6} textAlign="justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been he industry's standard dummy text ever since.</Text>
                </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}