import { Box, Flex } from "@chakra-ui/react";
import {logo} from "../../../../public/footer/index";
import NextLink from 'next/link'
import HeaderLargeScreen from "./largeScreen";
import HeaderMobileScreen from "./mobileScreen";

import { NextPage } from "next";

interface HeaderProps {
  isFooterInView: boolean;
}

const Header: NextPage<HeaderProps> = ({ isFooterInView }) => {
  return (
    <Flex width="100%" zIndex={8} px={{base: 4, lg: 16, xl: 60}} position={isFooterInView ? 'absolute' : 'fixed'} height="80px" bg="gray.50" alignItems="center" justifyContent="space-between">
       <Box as={NextLink} href="/" width="170px" height="38px" bgImage={`url(${logo.src})`} bgSize="cover" bgPosition="center"></Box>

       <Flex display={{base:"none", md: "block"}}>
        <HeaderLargeScreen/>
       </Flex>

       <Flex display={{base:"block", md: "none"}}>
        <HeaderMobileScreen/>
       </Flex>
    </Flex>
  );
}

export default Header;