import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Box, Flex, HStack, Button, useColorModeValue } from "@chakra-ui/react";

const HomePage = () => {
  const color = useColorModeValue('gray.600', 'white')
  const colorBorder = useColorModeValue('black', 'white')
  const colorSubs = useColorModeValue('green.400', 'purple.400')
  const colorHover = useColorModeValue('green.200', 'purple.400')

  return (
    <Flex
      as={"section"}
      id="home"
      h={"100vh"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Box
        color={color}
        paddingLeft={{ base: 10, md: "10vw", xl: "18vw" }}
        paddingBottom={{ base: 18 }}
      >
        <Box
          lineHeight={"40%"}
          fontSize={{ base: "6xl", md: "130px", xl: "140px" }}
          fontWeight={600}
        >
          <motion.div
            initial={{ x: "-10vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2, bounce: 0.3 }}
            viewport={{ once: true }}
          >
            Victor
          </motion.div>
          <br />
          <motion.div
            initial={{ x: "-10vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2, bounce: 0.3 }}
            viewport={{ once: true }}
          >
            Azzolini
          </motion.div>
        </Box>
        <Box
          as={"span"}
          position={"relative"}
          top={{ base: 2, md: 6, xl: 8 }}
          left={{ md: 2 }}
          fontSize={{ base: "20px", md: "40px", xl: "45px" }}
          fontWeight={300}
          color={colorSubs}
          p={0}
          m={0}
        >
          <motion.div
            initial={{ x: "-10vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2, bounce: 0.3 }}
            viewport={{ once: true }}
          >
            WEB DEVELOPER
          </motion.div>
        </Box>
        <motion.div
          initial={{ x: "-10vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
          viewport={{ once: true }}
        >
          <HStack spacing={0} mt={{ base: 2, md: 6, xl: 8 }}>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Button
                fontSize={{ base: "12px", md: "16px", xl: "18px" }}
                paddingY={{ base: 0, md: 2, xl: 4 }}
                paddingX={{ base: 4, md: 6, xl: 8 }}
                h={{ base: 8, md: 10 }}
                variant={"ghost"}
                color={color}
                borderRadius={""}
                border={`1px solid ${colorBorder}`}
                transitionDuration={"500ms"}
                _hover={{
                  bg: colorHover,
                }}
              >
                Skills
              </Button>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Button
                fontSize={{ base: "12px", md: "16px", xl: "18px" }}
                paddingY={{ base: 0, md: 2, xl: 4 }}
                paddingX={{ base: 4, md: 6, xl: 8 }}
                h={{ base: 8, md: 10 }}
                variant={"ghost"}
                color={color}
                borderRadius={""}
                border={`1px solid ${colorBorder}`}
                transitionDuration={"500ms"}
                _hover={{
                  bg: colorHover,
                }}
              >
                Projects
              </Button>
            </Link>
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Button
                fontSize={{ base: "12px", md: "16px", xl: "18px" }}
                paddingY={{ base: 0, md: 2, xl: 4 }}
                paddingX={{ base: 4, md: 6, xl: 8 }}
                h={{ base: 8, md: 10 }}
                variant={"ghost"}
                color={color}
                borderRadius={""}
                border={`1px solid ${colorBorder}`}
                transitionDuration={"500ms"}
                _hover={{
                  bg: colorHover,
                }}
              >
                Contact
              </Button>
            </Link>
            <a
              href={"/curricullum.pdf"}
              target="_blank"
            >
              <Button
                fontSize={{ base: "12px", md: "16px", xl: "18px" }}
                paddingY={{ base: 0, md: 2, xl: 4 }}
                paddingX={{ base: 4, md: 6, xl: 8 }}
                h={{ base: 8, md: 10 }}
                display={{ base: "none", md: "flex" }}
                variant={"ghost"}
                color={color}
                borderRadius={""}
                border={`1px solid ${colorBorder}`}
                transitionDuration={"500ms"}
                _hover={{
                  bg: colorHover,
                }}
              >
                Download CV
              </Button>
            </a>
          </HStack>
        </motion.div>
      </Box>
    </Flex>
  );
};

export default HomePage;
