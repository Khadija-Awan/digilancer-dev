"use client";
import { Box, Text } from "@chakra-ui/react";
import { NextPage } from 'next';
import NextLink from 'next/link'

interface FooterLinksSectionProps{
  title: string;
  displayLinks: any;
}

const FooterLinksSection: NextPage<FooterLinksSectionProps> = ({title, displayLinks}) => {
  return (
    <Box textAlign={{base:"center", md: "start"}}>
      <Text mb={6} fontSize={{base:"22px", lg:"26px"}}  color="white" fontWeight="bold">{title}</Text>
      {displayLinks.map((d: any)=>(
        <Box key={d.id} mb={2}>
          <Text _hover={{color: "green.300"}}  color="white" lineHeight="1.8" as={NextLink} href={d.link}>{d.title}</Text>
        </Box>
      ))}
    </Box>
  );
}

export default FooterLinksSection;