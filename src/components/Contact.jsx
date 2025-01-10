import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Input,
  Textarea,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Icon,
} from "@chakra-ui/react";
import { FaBuilding, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Box py={10} px={6} bg="#f8f8f8">
      <Heading  px={{ base: 4, md: 8 }} mb={4} as={'h2'}>Contact</Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={10}
        maxW="1200px"
        mx="auto"
      >
       
        <Box flex={2} bg="white" p={8} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" mb={6}>
            <strong>Note</strong>: If you have not found the property you were
            looking for, please fill out and submit the form below mentioning
            your requirement. We will surely source something that suits your
            requirement and update you accordingly.
          </Text>
          <VStack spacing={4} as="form">
            <FormControl isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input placeholder="Enter your name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Your Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Your Phone</FormLabel>
              <Input type="tel" placeholder="Enter your phone number" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>
              <Input placeholder="Enter the subject" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Your Message</FormLabel>
              <Textarea placeholder="Write your message here" />
            </FormControl>
            <Button
              type="submit"
              bg={"#fdb92e"} 
              color={'white'}
              size="lg"
              alignSelf="flex-start"
            >
              Send
            </Button>
          </VStack>
        </Box>

        
        <Box flex={1} bg="white" p={8} borderRadius="md" boxShadow="md">
          <VStack spacing={'100px'} align="center">
            <Flex direction="column" align="center">
              <Icon as={FaBuilding} boxSize={10} color="#fdb92e" mb={2} />
              <Text textAlign="center">
                Swiss County, Thergaon,
                <br />
                Pune-411033.
              </Text>
            </Flex>

            <Flex direction="column" align="center">
              <Icon as={FaPhone} boxSize={10} color="#fdb92e" mb={2} />
              <Text textAlign="center">
                Primary: <strong>+91 – 9130584436</strong>
                <br />
                Secondary: <strong>+91 – 7507117864</strong>
              </Text>
            </Flex>

            <Flex direction="column" align="center">
              <Icon as={FaEnvelope} boxSize={10} color="#fdb92e" mb={2} />
              <Text textAlign="center">
                <a href="mailto:harleenrealtors@gmail.com">
                  harleenrealtors@gmail.com
                </a>
              </Text>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
