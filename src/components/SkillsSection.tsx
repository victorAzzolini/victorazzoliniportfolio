import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  Icon,
  Stack,
  Card,
  CardBody,
  useColorModeValue,
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

interface TechnologyData {
  [key: string]: Technology
}

interface Technology {
  icons: IconType[],
  texts: string[]
}

const technologyData: TechnologyData = {
  "Front End": {
    icons: [
      IoLogoJavascript,
      SiTypescript,
      SiReact,
      SiHtml5,
      SiCss3,
      TbBrandNextjs,
    ],
    texts: [
      "JavaScript",
      "TypeScript",
      "ReactJs",
      "HTML 5",
      "CSS 3",
      "Next.js",
    ],
  },
  "Skill Tools": {
    icons: [VscGithub, SiAxios, SiChakraui, SiJsonwebtokens, SiTailwindcss],
    texts: ["GitHub", "Axios", "Chakra UI", "JWT", "TailWind"],
  },
  "Back End": {
    icons: [IoLogoNodejs, SiExpress, SiMongodb, SiMysql, TbApi, SiPrisma],
    texts: ["NodeJs", "Express", "MongoDB", "MySQL", "API REST", "Prisma"]
  }
};

const SkillsSection = () => {
  const color = useColorModeValue("gray.600", "white");
  const colorHover = useColorModeValue("green.200", "purple.400");
  const colorCard = useColorModeValue("green.500", "purple.800")
  const [selectedTechnology, setSelectedTechnology] = useState<string>("")

  const handleTechnologyClick = (technology: string) => {
    setSelectedTechnology(technology)
  }

  const renderIconsChange = () => {
    const { icons, texts } = technologyData[selectedTechnology]
    return (
      <Stack spacing={0}>
        <Flex justifyContent={"space-around"} gap={2} flexWrap={"wrap"}>
          <AnimatePresence>
            {icons.map((iconText: IconType, index: number) => (
              <motion.div
                key={texts[index]}
                initial={{
                  opacity: 0,
                  translateX: 50,
                  translateY: -50,
                }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <Card
                  bg={colorCard}
                  border={"1px solid"}
                  color={"white"}
                  _hover={{ color: colorHover }}
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
                      {texts[index]}
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
        viewport={{ once: true }}
      >
        <Heading alignSelf={"flex-end"} color={color} pl={{ xl: "8vw" }}>
          Skills
        </Heading>
        <Flex
          alignItems={"center"}
          justifyContent={"space-evenly"}
          gap={{ base: 0, xl: 0 }}
          ml={{base: "4vw", xl: "8vw"}}
          pb={20}
          maxWidth={"65vw"}
          flexDir={{ base: "column", xl: "row" }}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Flex flexDir={"column"} pl={{ base: 0, md: 30, xl: 10 }}>
              <Icon
                as={Monitor}
                pos={"relative"}
                color={selectedTechnology == "Front End" ? colorHover : color}
                boxSize={{ base: "150px", md: "280px", xl: "300px" }}
                transitionDuration={"300ms"}
                _hover={{ color: colorHover, cursor: "pointer" }}
                onClick={() => {
                  handleTechnologyClick("Front End");
                }}
              />
              <Icon
                as={Keyboard}
                pos={"relative"}
                color={selectedTechnology == "Skill Tools" ? colorHover : color}
                boxSize={{ base: "150px", md: "280px", xl: "300px" }}
                transitionDuration={"300ms"}
                _hover={{ color: colorHover, cursor: "pointer" }}
                onClick={() => {
                  handleTechnologyClick("Skill Tools")
                }}
              />
            </Flex>
            <Icon
              as={Data}
              pos={"relative"}
              color={selectedTechnology == "Back End" ? colorHover : color}
              right={{ xl: 10 }}
              boxSize={{ base: "150px", md: "280px", xl: "300px" }}
              transitionDuration={"300ms"}
              _hover={{ color: colorHover, cursor: "pointer" }}
              onClick={() => {
                handleTechnologyClick("Back End")
              }}
            />
          </Flex>
          <Box pos={"relative"} bottom={{ base: 0, xl: 0 }}>
            {selectedTechnology == "" ? (
              <Text
                textAlign={"center"}
                fontSize={{ base: "sm", md: "lg", xl: "xl" }}
                color={color}
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
                  {selectedTechnology}
                </Text>
                {renderIconsChange()}
              </Box>
            )}
          </Box>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default SkillsSection;
