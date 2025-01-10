import React from 'react';
import { Box, Text, UnorderedList, ListItem, Icon, Link } from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const OfficeAddress = () => {
  return (
    <Box
      id="houzez_contact-1"
      p={4}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="md"
      maxWidth="300px"
      width="100%"
      margin="auto"
      mt={10}
    >
      <Box className="widget-top" mb={4}>
        <Text fontSize="lg" fontWeight="bold" textAlign="center">Contact Us</Text>
      </Box>
      <Box className="widget-body">
        <UnorderedList spacing={4} color={'gray.500'}>
          <ListItem>
            <Icon as={MdLocationOn} color={'#fdb92e'} boxSize={5} mr={2} />
            Swiss County, Thergaon, Pune - 411033
          </ListItem>
          <ListItem>
            <Icon as={MdPhone} color={'#fdb92e'} boxSize={5} mr={2} />
            +91 - 7507117864
          </ListItem>
          <ListItem>
            <Icon as={MdEmail} color={'#fdb92e'} boxSize={5} mr={2} />
            <Link href="mailto:enquiry@harleenrealtors.com">enquiry@harleenrealtors.com</Link>
          </ListItem>
        </UnorderedList>
        <Text mt={4} textAlign="center">
          <Link href="#" color="#fdb92e">
            Contact us <Icon as={MdPhone} ml={1} />
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default OfficeAddress;
