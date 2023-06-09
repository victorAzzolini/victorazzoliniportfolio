import React from "react";
import { motion } from "framer-motion";
import { Flex, Box, Icon, Heading } from "@chakra-ui/react";
import { BiDownArrow } from "react-icons/bi";

const LeftLine = () => {
  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      w={"18vw"}
      alignSelf={"flex-start"}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Box
          width={"4px"}
          height={"30vh"}
          background={"linear-gradient(#805AD5, #805AD5, #0d1117)"}
          borderRadius={"lg"}
          mt={"10vh"}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Icon
          as={BiDownArrow}
          color={"white"}
          boxSize={{ base: 4, md: 6, xl: 8 }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Box
          width={"4px"}
          height={"70vh"}
          background={"linear-gradient(#0d1117,#805AD5, #805AD5,#0d1117 )"}
          borderRadius={"lg"}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Heading
          alignSelf={"flex-start"}
          color={"white"}
          fontWeight={400}
          fontSize={{ base: "md", md: "xl", xl: "2xl" }}
        >
          Skills
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{}}
        transition={{ duration: 4 }}
        whileInView={{ opacity: 3 }}
      >
        <Box
          width={"4px"}
          height={"97vh"}
          background={"linear-gradient(#0d1117,#805AD5, #805AD5,#0d1117 )"}
          borderRadius={"lg"}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Heading
          alignSelf={"flex-start"}
          color={"white"}
          fontWeight={400}
          fontSize={{ base: "md", md: "xl", xl: "2xl" }}
        >
          Projects
        </Heading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{}}
        transition={{ duration: 4 }}
        whileInView={{ opacity: 3 }}
      >
        <Box
          width={"4px"}
          height={"140vh"}
          background={"linear-gradient(#0d1117,#805AD5, #805AD5,#0d1117 )"}
          borderRadius={"lg"}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Heading
          alignSelf={"flex-start"}
          color={"white"}
          fontWeight={400}
          fontSize={{ base: "md", md: "xl", xl: "2xl" }}
        >
          Contact
        </Heading>
      </motion.div>
    </Flex>
  );
};

export default LeftLine;
