import { Flex } from "@chakra-ui/react";
import FaqsContent from "./content";
import FaqsAccordion from "./accordion";

export default function Faqs() {
    return (
       <Flex direction={{base: "column", lg: "row"}} width="100%" bg="white" py={20} alignItems={"center"} px={{base: 10, lg: 16, xl: 60}}>
        <FaqsContent/>
        <FaqsAccordion/>
       </Flex>
    );
}