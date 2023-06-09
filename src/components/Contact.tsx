import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Flex,
  Heading,
  Stack,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";


const Contact = () => {
  const [formsInputs, setFormsInputs] = useState<any>({
    user_name: "",
    user_email: "",
    message: "",
  });
  const form: any = useRef();
  const toast = useToast();

  function handleChange(
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormsInputs({
      ...formsInputs,
      [(e.target as HTMLTextAreaElement).name]: (
        e.target as HTMLTextAreaElement
      ).value,
    });
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        form.current!,
        process.env.REACT_APP_USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            description: result.text,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setFormsInputs({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            description: error.text,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Flex
      as={"section"}
      id="contacts"
      justifyContent={"center"}
      alignItems={{ base: "center", xl: "flex-start" }}
      color={"white"}
      marginBottom={"20vh"}
      marginRight={{ base: "5vw", xl: "0" }}
      marginTop={{ base: "0", xl: "10vh" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={{ base: "column", xl: "row" }}
          h={{ base: "50%", xl: "57vh" }}
          w={"60vw"}
          bg={{ base: "none", xl: "blackAlpha.300" }}
          border={{ base: "none", xl: "1px solid" }}
          borderRadius={"md"}
          boxShadow={"xl"}
          mt={{ base: "10" }}
        >
          <Flex
            minW={{ base: "90vw", xl: "30vw" }}
            alignItems={"center"}
            textAlign={"center"}
            pb={{ xl: 32 }}
          >
            <Heading
              fontSize={{ base: "xl", md: "3xl" }}
              padding={10}
              fontWeight={500}
            >
              Quer trocar ideias? Deixe uma mensagem e vamos conversar.
            </Heading>
          </Flex>
          <form ref={form} onSubmit={sendEmail}>
            <Stack
              spacing={5}
              border={"1px solid"}
              p={{ base: "15px", md: "20px", xl: "50px" }}
              bg="white"
              color={"black"}
              position={{ base: "static", xl: "relative" }}
              borderRadius={"lg"}
              alignItems={"center"}
              w={{ base: "75vw", xl: "30vw" }}
              maxW={"4xl"}
              top={"-20"}
              right={"-4"}
            >
              <FormControl w={"95%"}>
                <InputGroup>
                  <InputLeftAddon
                    borderRadius={"0"}
                    border={0}
                    bg="none"
                    borderBottom={"2px"}
                  >
                    Name
                  </InputLeftAddon>
                  <Input
                    type="text"
                    name="user_name"
                    value={formsInputs.user_name}
                    variant="flushed"
                    borderBottom="2px"
                    focusBorderColor="none"
                    isRequired
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl w={"95%"}>
                <InputGroup>
                  <InputLeftAddon
                    borderRadius={"0"}
                    border={0}
                    bg="none"
                    borderBottom={"2px"}
                  >
                    Email
                  </InputLeftAddon>
                  <Input
                    type="email"
                    name="user_email"
                    value={formsInputs.user_email}
                    variant="flushed"
                    borderBottom="2px"
                    focusBorderColor="none"
                    onChange={handleChange}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl w={"95%"}>
                <InputGroup>
                  <InputLeftAddon
                    borderRadius={"0"}
                    border={0}
                    bg="none"
                    borderBottom={"2px"}
                  >
                    Message
                  </InputLeftAddon>
                  <Input
                    type="text"
                    name="message"
                    value={formsInputs.message}
                    variant="flushed"
                    borderBottom="2px"
                    focusBorderColor="none"
                    onChange={handleChange}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <Button
                type="submit"
                bg={"black"}
                w={"40%"}
                alignSelf={"flex-end"}
                pos={{ base: "static", xl: "relative" }}
                right={{ base: "0", md: "0", xl: "-14" }}
                color={"white"}
                zIndex={10}
                borderRadius={"sm"}
                _hover={{
                  bg: "black",
                  color: "white",
                  transform: "scale(1.02)",
                }}
              >
                Enviar
              </Button>
            </Stack>
          </form>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default Contact;
