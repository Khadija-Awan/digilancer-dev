"use client";
import { faqsLinks } from "@/utils/faqs-utils";
import {
    Box, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
} from "@chakra-ui/react";

export default function FaqsAccordion() {
    return (
        <Box width="100%" pl={{ lg: 10 }}>
            <Accordion allowToggle>
                {faqsLinks.map((f:any)=>(
                <AccordionItem key={f.id} border="none" mb={3}>
                    {({ isExpanded }) => (
                    <>
                    <h2>
                        <AccordionButton bg="#F7F7F7" borderRadius="xl" p={4}>
                            <Box fontWeight={"medium"} as="span" flex='1' textAlign='left'>
                                <Text color={isExpanded ? "green" : "gray.900"} _hover={{color: "green"}}> {f.title}</Text>
                            </Box>
                            <AccordionIcon ml={6} boxSize={6} color="green"/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel py={4} fontSize="14.5px" lineHeight={1.6} color="gray.800">{f.content}</AccordionPanel>
                    </>
                    )}
                </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
}