import { Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { headerLinks } from "@/utils/header-utils";

export default function HeaderLargeScreen() {
  return (
       <>
        {headerLinks.map((h:any)=> (
          <Link key={h.id} as={NextLink} fontWeight={"semibold"} textTransform={"uppercase"} mr={{md: "18px", lg: "32px", xl:"40px"}} href={h.link} _hover={{textUnderline: "none", color: "green.600"}} isExternal>{h.title}</Link>
        ))}
       </>
  );
}