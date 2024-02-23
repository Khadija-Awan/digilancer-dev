"use client";
import { footerContactLinks, footerSocialLinks } from "@/utils/footer-utils";
import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link'

export default function FooterContactSection(){
  return (
    <Box width="100%" color="white" textAlign={{base:"center", md: "start"}}>
      <Text mb={6} fontSize={{base:"22px", lg:"26px"}} fontWeight="bold">Contact</Text>
      {footerContactLinks.map((contact: any)=>(
        <Box key={contact.id} mb={2} width="max-content" mx={{base: "auto", md: 0}}>
          <HStack mx={{base: "auto", md: 0}}>
          <Icon as={contact.icon} href={contact.link} boxSize={5} mr={2}/>
          <Text lineHeight="1.8">{contact.title}</Text>
          </HStack>
        </Box>
      ))}

      <HStack mt={{ base: 10, md: 6}} mx={{base: "auto", md: 0}} width="max-content">
      {footerSocialLinks.map((social: any)=>(
        <Box key={social.id} height="40px" width="40px" p={2} mr={2} _hover={{color: "green.300", borderColor: "green.300"}} borderRadius="xl" border="2px solid white">
          <Link as={NextLink} href={social.link} isExternal>
            <Icon as={social.icon} boxSize={5}/>
          </Link>
        </Box>
      ))}
      </HStack>
    </Box>
  );
}