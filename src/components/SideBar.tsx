import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";
import { Flex, Icon, Stack, useToast } from "@chakra-ui/react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUpArrow } from "react-icons/bi";

const SideBar = () => {

  return (
    <Flex
      right={0}
      pos={"fixed"}
      flexDir={"column"}
      justifyContent={"space-between"}
      h={"100vh"}
      w={"10vw"}
      color={"whiteAlpha.800"}
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
              color: "purple.700",
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
              color: "purple.700",
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
              color: "purple.700",
            }}
          />
        </a>
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
            color: "purple.700",
          }}
        />
      </Link>
    </Flex>
  );
};

export default SideBar;
