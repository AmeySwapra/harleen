import React from 'react';
import {
  Box,
  Heading,
  List,
  ListItem,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const PropertyType = () => {
  const propertyTypes = [
    { name: 'Apartment', count: 123 },
    { name: 'Bungalow', count: 39 },
    { name: 'Club', count: 1 },
    { name: 'Commercial Shop', count: 20 },
    { name: 'Farm', count: 4 },
    { name: 'Flat', count: 121 },
    { name: 'Independent House', count: 3 },
    { name: 'Industrial Land', count: 6 },
    { name: 'Industrial Shed', count: 4 },
    { name: 'Land', count: 70 },
    { name: 'Office Space', count: 56 },
    { name: 'Penthouse', count: 6 },
    { name: 'Resort', count: 2 },
    { name: 'Resto Space', count: 7 },
    { name: 'Villa', count: 26 },
  ];
  

  return (
    <Box
      p={4}
      borderRadius="lg"
      boxShadow="lg"
      bg={useColorModeValue('white', 'gray.800')}
      maxW="400px"
      mx="auto"
      mt={10}
      w={'300px'}
    >
      <Box mb={4}>
        <Heading
          as="h3"
          size="md"
          textAlign="center"
          color={useColorModeValue('gray.700', 'white')}
        >
          Property Type
        </Heading>
      </Box>
      <List spacing={3}>
        {propertyTypes.map((type, index) => (
          <ListItem
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid"
            borderColor={useColorModeValue('gray.200', 'gray.600')}
            pb={2}
          >
            <Link
              href={type.url}
              color={useColorModeValue('#fdb92e', 'blue.300')}
              fontWeight="medium"
              _hover={{ textDecoration: 'underline' }}
          
            >
              {type.name}
            </Link>
            <Text as="span" color={useColorModeValue('gray.500', 'gray.400')} fontSize="sm">
              ({type.count})
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PropertyType;
