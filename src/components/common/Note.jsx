import React from 'react';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Note = () => {
  return (
    <Box
      id="text-2"
      className="widget widget_text"
      p={4}
      borderRadius="lg"
      boxShadow="lg"
      bg={useColorModeValue('white', 'gray.800')}
      maxW="400px"
      mx="auto"
      mt={10}
      w={'300px'}
    >
      <Box className="widget-top" mb={4}>
        <Heading
          className="widget-title"
          as="h3"
          size="md"
          textAlign="center"
          color={useColorModeValue('gray.700', 'white')}
        >
          Note:
        </Heading>
      </Box>
      <Box className="widget-body">
        <Text color={useColorModeValue('gray.500', 'gray.400')} fontSize="sm">
          We are awaiting RERA certified projects to be uploaded on our site.
          Once we receive the details, the same will be uploaded. Meanwhile, you
          can call us for enquiries and site visits.
        </Text>
      </Box>
    </Box>
  );
};

export default Note;
