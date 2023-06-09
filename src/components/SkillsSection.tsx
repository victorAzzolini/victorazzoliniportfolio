import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  Icon,
  Stack,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { Data, Keyboard, Monitor } from "./Icons";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import {
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiAxios,
  SiChakraui,
  SiJsonwebtokens,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPrisma,
} from "react-icons/si";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { IconType } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

const SkillsSection = () => {
  const [colorMonitor, setColorMonitor] = useState<string>("white");
  const [colorKeyboard, setColorKeyboard] = useState<string>("white");
  const [colorData, setColorData] = useState<string>("white");
  const [technology, setTechnology] = useState<string>("");
  let iconsTypeArray: IconType[] = [];
  let iconsTextArray: string[] = [];

  const frontEndIcons = [
    IoLogoJavascript,
    SiTypescript,
    SiReact,
    SiHtml5,
    SiCss3,
    TbBrandNextjs,
  ];

  const frontEndText = [
    "JavaScript",
    "TypeScript",
    "ReactJs",
    "HTML 5",
    "CSS 3",
    "Next.js",
  ];

  const toolsIcons = [
    VscGithub,
    SiAxios,
    SiChakraui,
    SiJsonwebtokens,
    SiTailwindcss,
  ];

  const toolsText = ["GitHub", "Axios", "Chakra UI", "JWT", "TailWind"];

  const backEndIcons = [IoLogoNodejs, SiExpress, SiMongodb, TbApi, SiPrisma];

  const backEndText = ["NodeJs", "Express", "MongoDB", "API REST", "Prisma"];

  if (technology === "Front End") {
    iconsTypeArray = frontEndIcons;
    iconsTextArray = frontEndText;
  } else if (technology === "Tools") {
    iconsTypeArray = toolsIcons;
    iconsTextArray = toolsText;
  } else if (technology === "Back End") {
    iconsTypeArray = backEndIcons;
    iconsTextArray = backEndText;
  }

  const renderIconsChange = (icons: IconType[], stack: string) => {
    return (
      <Stack spacing={0}>
        <Flex justifyContent={"space-around"} gap={2} flexWrap={"wrap"}>
          <AnimatePresence>
            {icons.map((iconText: IconType, index: number) => (
              <motion.div
                key={iconsTextArray[index]}
                initial={{
                  opacity: 0,
                  translateX: 50,
                  translateY: -50,
                }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <Card
                  bg={"purple.900"}
                  border={"1px solid"}
                  color={"white"}
                  _hover={{ color: "purple.400" }}
                  w={{ base: "20vw", xl: "10vw" }}
                  h={{ base: "12vh", md: "10vh" }}
                >
                  <CardBody
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Icon as={iconText} boxSize={{ base: 4, md: 8, xl: 8 }} />
                    <Text fontSize={{ base: "0.4em", md: "1em" }}>
                      {iconsTextArray[index]}
                    </Text>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </Flex>
      </Stack>
    );
  };

  const handleMonitorClick = () => {
    setColorMonitor("purple.500");
    setColorKeyboard("white");
    setColorData("white");
    setTechnology("Front End");
  };

  const handleKeyboardClick = () => {
    setColorKeyboard("purple.500");
    setColorData("white");
    setColorMonitor("white");
    setTechnology("Tools");
  };

  const handleDataClick = () => {
    setColorData("purple.500");
    setColorKeyboard("white");
    setColorMonitor("white");
    setTechnology("Back End");
  };

  return (
    <Flex
      as={"section"}
      flexDir={"column"}
      justifyContent={"center"}
      id="skills"
      pl={"10vw"}
      paddingTop={{ base: "0", xl: "10vh" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <Heading alignSelf={"flex-end"}>Skills</Heading>
        <Flex
          alignItems={"center"}
          justifyContent={"space-evenly"}
          gap={{ base: 0, xl: 0 }}
          ml={"8vw"}
          pb={20}
          maxWidth={"65vw"}
          flexDir={{ base: "column", xl: "row" }}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Flex flexDir={"column"} pl={{ base: 0, md: 30, xl: 10 }}>
              <Icon
                as={Monitor}
                pos={"relative"}
                color={colorMonitor}
                boxSize={{ base: "150px", md: "280px", xl: "300px" }}
                transitionDuration={"300ms"}
                _hover={{ color: "purple.500", cursor: "pointer" }}
                onClick={() => {
                  handleMonitorClick();
                }}
              />
              <Icon
                as={Keyboard}
                pos={"relative"}
                color={colorKeyboard}
                boxSize={{ base: "150px", md: "280px", xl: "300px" }}
                transitionDuration={"300ms"}
                _hover={{ color: "purple.500", cursor: "pointer" }}
                onClick={handleKeyboardClick}
              />
            </Flex>
            <Icon
              as={Data}
              pos={"relative"}
              color={colorData}
              right={{ xl: 10 }}
              boxSize={{ base: "150px", md: "280px", xl: "300px" }}
              transitionDuration={"300ms"}
              _hover={{ color: "purple.500", cursor: "pointer" }}
              onClick={handleDataClick}
            />
          </Flex>
          <Box pos={"relative"} bottom={{ base: 0, xl: 0 }}>
            {technology === "" ? (
              <Text
                textAlign={"center"}
                fontSize={{ base: "sm", md: "lg", xl: "xl" }}
                color={"white"}
              >
                Desvende os segredos ocultos do computador e descubra as
                tecnologias que impulsionam sua operação. Clique nas partes e
                mergulhe em um universo de inovação e conhecimento.
              </Text>
            ) : (
              <Box
                maxH={"35vh"}
                minW={"35vw"}
                pos={"relative"}
                right={{ xl: 14 }}
                bottom={{ xl: 24 }}
              >
                <Text
                  textAlign={"center"}
                  mb={{ base: 2, md: 4 }}
                  color={"white"}
                  fontSize={{ base: "sm", md: "xl" }}
                >
                  {technology}
                </Text>
                {renderIconsChange(iconsTypeArray, technology)}
              </Box>
            )}
          </Box>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default SkillsSection;
