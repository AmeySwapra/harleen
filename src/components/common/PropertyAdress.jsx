import { Box, Flex, Heading, Link, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { FaMapMarker } from 'react-icons/fa';

const PropertyAdress = () => {
  return (
    <Box p={6} boxShadow="md" borderRadius="md">
     
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h2" size="lg" fontWeight={'400'}>
          Address
        </Heading>
        <Link
          href="http://maps.google.com/?q=Opp.%20MCA%20Cricket%20Stadium,Mumbai%20Pune%20Expressway,%20Pune,%20Maharashtra%20412101,%20India"
          target="_blank"
          color="blue.500"
          fontWeight="bold"
          display="flex"
          alignItems="center"
        >
          Open on Google Maps <Icon as={FaMapMarker} ml={2} />
        </Link>
      </Flex>

      {/* Address Details in 3 Columns */}
      <SimpleGrid columns={3} spacing={4}>
        {/* Column 1: Address */}
        <Box>
          <Text>
            <Text as="strong">Address:</Text> Opp. MCA Cricket Stadium, Mumbai Pune Expressway, Pune, Maharashtra 412101, India
          </Text>
        </Box>

        {/* Column 2: City, State, Zip, Neighborhood */}
        <Box>
          <Text>
            <Text as="strong">City:</Text> Pune
          </Text>
          <Text>
            <Text as="strong">State/county:</Text> Maharashtra
          </Text>
          <Text>
            <Text as="strong">Zip/Postal Code:</Text> 412101
          </Text>
          <Text>
            <Text as="strong">Neighborhood:</Text> Gahunje
          </Text>
        </Box>

        {/* Column 3: Country */}
        <Box>
          <Text>
            <Text as="strong">Country:</Text> India
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default PropertyAdress;
