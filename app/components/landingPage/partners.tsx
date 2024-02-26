"use client";
import { partnerLinks } from "@/utils/partners-utils";
import { Box, Text, SimpleGrid, HStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Partners() {

    const [isPaused, setIsPaused] = useState(false);
    const totalWidth = partnerLinks.length * (120 + 40) * 2;
    const animationDuration = totalWidth / 100;

    return (
        <Box width="100%" py={16} bg="gray.200">
            <Box mx="auto" width={{ base: "94%", md: "90%", lg: "85%", xl: "60%" }} bg="white" borderRadius="50px" p={8}>
                <Text mb={{base: 12, md: 16}} color="green" fontSize={{ base: "24px", md: "36px" }} textAlign={"center"} fontWeight={"bold"}>Connecting You With Trusted Brands</Text>

                <Box mx="auto" width={{ base: "90%", md: "93%" }} height="130px" overflow="hidden" position="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}>
                    <SimpleGrid columns={partnerLinks.length * 2} spacingX={{ base: 24, md: 28 }}
                        templateColumns={`repeat(${partnerLinks.length * 2}, 150px)`} gap={16}
                        animation={`${animationDuration}s linear 0s infinite normal none running slide`}
                        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                    >
                        {partnerLinks.concat(partnerLinks).map((c, index) => (
                            <Box key={index} as="span" width="200px" height="130px" bgImage={`url(${c.photo.src})`} backgroundSize="cover" backgroundPosition="center">
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

                <style jsx global>{`
                @keyframes slide {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-${totalWidth / 2}px);
                    }
                }
            `}</style>
            </Box>
        </Box>
    );
}