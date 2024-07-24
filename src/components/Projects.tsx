import React from "react";
import { motion } from "framer-motion";
import {
  AspectRatio,
  Card,
  CardBody,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Projects = () => {
  const color = useColorModeValue("gray.600", "white");

  return (
    <Flex
      as={"section"}
      id="projects"
      flexDir={"column"}
      pt={"10vh"}
      color={color}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Heading pl={{ base: "10vw", xl: "18vw" }}>Projects</Heading>
        <Flex></Flex>
        <Stack
          pl={{ base: "10vw", xl: "18vw" }}
          pr={"12vw"}
          pt={"6vh"}
          display={"flex"}
        >
          <Heading fontWeight={500}>Site Pinguim Films</Heading>
          <Text>Site criada para um produtora de vídeos.</Text>
          <Text fontWeight={500}>
            <Text fontWeight={800} as={"span"}>
              Tecnologias:
            </Text>{" "}
            HTML5 | CSS3 | JavaScript | jQuery | BootsTrap | PHP | Figma |
          </Text>
        </Stack>
        <Link href="https://www.pinguimfilms.com/" isExternal>
          <Card
            maxW={"1200px"}
            mt={8}
            ml={{ base: "10vw", xl: "18vw" }}
            mr={"15vw"}
            transitionDuration={"200ms"}
            bg={color}
            _hover={{ transform: "scale(1.02)" }}
          >
            <CardBody p={1}>
              <AspectRatio ratio={16 / 9}>
                <Image src={"/screen-pinguim.png"} alt="animais site" objectFit='cover' />
              </AspectRatio>
            </CardBody>
          </Card>
        </Link>
        <Stack
          pl={{ base: "10vw", xl: "18vw" }}
          pr={"12vw"}
          pt={"6vh"}
          display={"flex"}
        >
          <Heading fontWeight={500}>Rescue the Animals</Heading>
          <Text>
            Projeção de um site para uma ONG de resgate e conservação da Fauna
            Silveste.
          </Text>
          <Text fontWeight={500}>
            <Text fontWeight={800} as={"span"}>
              Tecnologias:
            </Text>{" "}
            ReactJs | Next.js | JavaScript/TypeScript | NodeJs | Prisma |
            MongoDB | API REST | Chakra UI | Axios | JWT |
          </Text>
          <Text>
            <Text fontWeight={800} as={"span"}>
              Git Hub:
            </Text>
            <Link
              href="https://github.com/victorAzzolini/AnimalONG"
              isExternal
              ml={2}
            >
              Animals ONG Repo <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </Stack>
        <Link href="https://animal-ong.vercel.app/" isExternal>
          <Card
            maxW={"1200px"}
            mt={8}
            ml={{ base: "10vw", xl: "18vw" }}
            mr={"15vw"}
            transitionDuration={"200ms"}
            bg={color}
            _hover={{ transform: "scale(1.02)" }}
          >
            <CardBody p={1}>
              <AspectRatio ratio={16 / 9}>
                <Image src={"/siteRescurAnimals.png"} alt="animais site" />
              </AspectRatio>
            </CardBody>
          </Card>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Stack pl={{ base: "10vw", xl: "18vw" }} pr={"12vw"} pt={"10vh"}>
          <Heading fontWeight={500}>Lepetit Blog</Heading>
          <Text>
            Projeção de um blog usando json server para treinair maneiras de se
            operar as informações armazenadas (CRUD){" "}
          </Text>
          <Text fontWeight={500}>
            <Text fontWeight={800} as={"span"}>
              Tecnologias:
            </Text>{" "}
            ReactJs | JasvaScript | JSON | HTML 5 | CSS 3 |
          </Text>
          <Text>
            <Text fontWeight={800} as={"span"}>
              Git Hub:
            </Text>
            <Link
              href="https://github.com/victorAzzolini/Projeto-Blog"
              isExternal
              ml={2}
            >
              Projeto Blog Repo <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </Stack>
        <Link href="https://projeto-blog-lepetit.vercel.app/" isExternal>
          <Card
            maxW={"1200px"}
            mt={8}
            ml={{ base: "10vw", xl: "18vw" }}
            mr={"15vw"}
            transitionDuration={"200ms"}
            bg={color}
            _hover={{ transform: "scale(1.02)" }}
          >
            <CardBody p={1}>
              <AspectRatio ratio={16 / 9}>
                <Image src={"/siteBlog.png"} alt="site Blog" />
              </AspectRatio>
            </CardBody>
          </Card>
        </Link>
      </motion.div>
    </Flex>
  );
};

export default Projects;
