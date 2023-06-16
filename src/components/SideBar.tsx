import React, { useRef } from "react";
import { Link } from "react-scroll";
import {
  Flex,
  Icon,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUpArrow } from "react-icons/bi";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const SideBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('gray.600', 'whiteAlpha.800')
  const colorHover = useColorModeValue('green.200', 'purple.400')


  return (
    <Flex
      right={0}
      pos={"fixed"}
      flexDir={"column"}
      justifyContent={"space-between"}
      h={"100vh"}
      w={"10vw"}
      color={color}
      fontSize={"20px"}
      zIndex={10}
      py={10}
    >
      <Stack>
        <a href="https://github.com/victorAzzolini" target="_blank">
          <Icon
            as={AiFillGithub}
            boxSize={{ base: 7, xl: 9 }}
            transition="0.3s"
            _hover={{
              cursor: "pointer",
              color: colorHover,
            }}
          />
        </a>
        <a href="https://www.instagram.com/victorazzolini/" target="_blank">
          <Icon
            as={AiFillInstagram}
            boxSize={{ base: 7, xl: 9 }}
            transition="0.3s"
            _hover={{
              cursor: "pointer",
              color: colorHover,
            }}
          />
        </a>
        <a href="https://www.linkedin.com/in/victor-azzolini/" target="_blank">
          <Icon
            as={AiFillLinkedin}
            boxSize={{ base: 7, xl: 9 }}
            transition="0.3s"
            _hover={{
              cursor: "pointer",
              color: colorHover,
            }}
          />
        </a>

        

        {colorMode === "light" ? (
          <Icon
            as={BsMoonFill}
            boxSize={{ base: 6, xl: 8 }}
            transition="0.3s"
            onClick={toggleColorMode}
            _hover={{
              cursor: "pointer",
              color: colorHover,
            }}
          />
        ) : (
          <Icon
          as={BsSunFill}
          boxSize={{ base: 7, xl: 9 }}
          transition="0.3s"
          onClick={toggleColorMode}
          _hover={{
            cursor: "pointer",
            color: "purple.700",
          }}
        />
        )}
      </Stack>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <Icon
          as={BiUpArrow}
          boxSize={{ base: 7, xl: 9 }}
          transition="0.3s"
          _hover={{
            cursor: "pointer",
            color: colorHover,
          }}
        />
      </Link>
    </Flex>
  );
};

export default SideBar;
