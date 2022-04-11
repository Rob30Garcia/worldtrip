import { Flex, Image, Icon, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex
      as="header"
      w="100%"
      mx='auto'
      px='1rem'
      minHeight={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        templateColumns="repeat(3,1fr)"
        h="100%"
        mx="auto"
        w="100%"
        maxWidth="1160px"
        alignItems="center"
        justifyContent="center"
      >
        {
          notHomePage && (
            <Link
              href="/"
            >
              <a>
                <Icon 
                  as={RiArrowLeftSLine}
                  fontSize={32}
                  justifySelf="start"
                />
              </a>
            </Link>
          )
        }

        <Image 
          src="/images/Logo.svg" 
          alt="Logo"
          height={45}
          width="180px"
          gridColumn="2"
          justifySelf="center"
        />
      </Grid>
    </Flex>
  );
}