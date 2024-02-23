"use client";
import NextLink from 'next/link'
import { headerLinks } from "@/utils/header-utils";
import {
    Box,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    Link,
  } from "@chakra-ui/react";
import { MdOutlineMenu } from "react-icons/md";

export default function HeaderMobileScreen() {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
        <IconButton
          color="gray.900"
          aria-label="Toggle Menu"
          onClick={onOpen}
          icon={<MdOutlineMenu />}
          bg="inherit"
          _hover={{
            color: "green.700",
            bg: "inherit",
          }}
          size="lg"
        />

        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody px={4} pb={6} pt={8} bg="#F9F9F9">
            {headerLinks.map((h:any)=> (
                <Box key={h.id} mb={5} textAlign="center">
          <Link as={NextLink} fontWeight={"semibold"} textTransform={"uppercase"} href={h.link} _hover={{textUnderline: "none", color: "green.600"}} isExternal>{h.title}</Link>
          </Box>
        ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer> 
      </Box>
  );
}