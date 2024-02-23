import { NextPage } from 'next';
import { Text, SimpleGrid, Stack, Center } from "@chakra-ui/react";

interface CentralModulesProps {
    displayLinks: any;
}

const CentralModules: NextPage<CentralModulesProps> = ({ displayLinks }) => {
    return (
        <SimpleGrid columns={1} spacing={{ base: 10, md: 16 }} mx="auto">
            {displayLinks.map((d: any) => (
                <Stack width={{ base: "300px", md:"150px", lg:"240px", xl:"300px"}} key={d.id} textAlign={"center"}>
                    <Center>
                        <d.icon fontSize="37px" color="green" />
                    </Center>
                    <Text mt={2} fontWeight={"bold"}>{d.title}</Text>
                    <Text color="gray.700" fontSize="14.5px" lineHeight={1.6}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </Stack>
            ))}
        </SimpleGrid>
    );
}

export default CentralModules;