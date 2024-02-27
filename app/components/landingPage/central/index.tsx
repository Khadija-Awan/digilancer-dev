import { Box, Flex } from "@chakra-ui/react";
import CentralModules from "./modules";
import { centralLeftLinks, centralRightLinks } from "@/utils/central-utils";
import { central } from "@/public/central//index";

export default function Central() {
    return (
        <Flex alignItems="center" width="100%" direction={{base: "column", md: "row"}} py={{ base: 16, lg: 20}} px={{ base: 6, md: 4, lg: 8, xl: 32 }} bg="#F7F7F7">
            
            <CentralModules displayLinks={centralLeftLinks}/>
            <Box width={{base: "280px", lg:"300px"}} height={{ base: "580px", lg: "620px"}} bgImage={`url(${central.src})`} bgSize="cover" bgPosition="center" my={{ base: 16, lg: 0 }}></Box>
            <CentralModules displayLinks={centralRightLinks}/>

        </Flex>
    );
}