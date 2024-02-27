"use client";
import { partnerLinks } from "@/utils/partners-utils";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

export default function Partners() {

    const [isPaused, setIsPaused] = useState(false);
    const totalWidth = partnerLinks.length * (120 + 40) * 2;
    const animationDuration = totalWidth / 100;

    return (
        <Box width="100%" pr={{xl: "2.5%"}} mt={{base: 16, md: 10, lg: 16, xl: 0}}>
            <Box mx="auto" mt="-60px" width={{ base: "94%", md: "90%", lg: "92%", xl: "80%" }} bg="white" borderRadius="50px" px={4} py={4}>
                <Text mb={{base: 8, md: 12}} color="green" fontSize={{ base: "24px", md: "30px" }} textAlign={"center"} fontWeight={"semibold"}>Connecting You With Trusted Brands</Text>

                <Box mx="auto" width={{ base: "90%", md: "93%" }} height="130px" overflow="hidden" position="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}>
                    <SimpleGrid columns={partnerLinks.length * 2} spacingX={{ base: 20, md: 28 }}
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