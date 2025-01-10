import React from 'react';
import { Box, Flex, Text, Image, VStack, Heading, Icon } from '@chakra-ui/react';
import { MdPeople } from 'react-icons/md';
import couple from '../assets/images/couple.jpeg'
import paygif from '../assets/images/payb.gif'
const Team = () => {
  return (
    <Box className="container" px={{ base: 4, md: 8, lg: 14 }} py={4}>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        w="full"
        px={4}
        py={4}
      >
       
        <VStack align="flex-start" color={'gray.500'} w={{ base: '100%', md: '70%' }} mb={{ base: 6, md: 0 }}>
          <Heading as="h2" size="lg" fontWeight="bold" color="blackAlpha.800">
            Harleen Realtors™
          </Heading>
          <Text>
            Harleen Realtors™ is headed by an IT Professional couple who have retained
            their idealism and integrity of professional training and applied it to the
            marketing of Real Estate.
          </Text>
          <Text>
            The company aims in giving comprehensive real estate solutions and nurturing
            their relationships with the clients. Continuous training, educating ourselves,
            and upgrading our skills have been the foundations on which we have built a
            reputation of understanding our customer’s needs and finding the right product
            at the right price to satisfy them.
          </Text>
          <Text>
            Be it Sale, Purchase, Leasing, or Renting almost anything to do with real
            estate, Harleen Realtors™ aims at being the preferred choice in real estate
            sector with a reputation of result-oriented, dependable, transparent, and
            impeccable after-sales service team.
          </Text>
          <Text fontStyle="italic">
            <em>An Overall 17 years of invaluable experience in various industries like,
              Real Estate, Hospitality, Marketing, and IT makes us a preferred and organized
              real estate consultant.</em>
          </Text>
        </VStack>

       
        <Flex flexDirection="column" align="center" w={{ base: '100%', md: '30%' }} mb={{ base: 6, md: 0 }}>
          <Image
            src={couple}
            alt="Harleen Realtors Team"
            boxSize="225px"
            borderRadius="md"
            mb={4}
          />
          <Heading as="h3" size="md" textAlign="center" color="#fdb92e">
            <Icon as={MdPeople} boxSize={6} color="gray.600" mr={2} />
            Hitendra Singh, Priyanka Singh
          </Heading>
        </Flex>
      </Flex>

      
      <Flex justify="center" mt={6}>
        <Image
          src={paygif}
          alt="Animation"
          maxWidth="856px"
        />
      </Flex>
    </Box>
  );
};

export default Team;
