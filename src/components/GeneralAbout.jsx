import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Link,
  UnorderedList,
  ListItem,
  VStack,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from '@chakra-ui/react';
import logo from '../assets/logo/Logo.jpg';
import logobanner from '../assets/images/logopropnar.jpg';

const GeneralAbout = () => {
  return (
    <Box className="container" px={{ base: 4, md: 8, lg: 14 }} py={4}>
      <Card boxShadow="lg" borderRadius="lg" bg="white">
        <CardHeader textAlign="center" bg="#fdb92e" p={4}>
          <Heading size="lg" color="white">
            Harleen Realtors™
          </Heading>
        </CardHeader>
        <CardBody>
          <Flex flexDirection={{ base: 'column', md: 'row' }} align="flex-start">
            <Image src={logo} alt="Harleen Realtors Logo" boxSize="225px" mr={4} />
            <VStack align="flex-start" color="gray.500">
              <Text fontSize="lg" fontWeight="bold" color="blackAlpha.800">
                Harleen Realtors™
              </Text>
              <Text>
                Harleen Realtors™ is a MahaRERA certified real estate company dealing in
                New Launch, Resale, Rentals & Group Bookings of new ongoing Residential
                projects in Pune & also new ongoing commercial projects in Pune & Mumbai.
              </Text>
              <Text>
                Every client is important to us whether their need is small or large. Their
                satisfaction is the sole purpose of our existence and all the activities
                that we engage in from sourcing, to negotiating, to helping in getting the
                least expensive finances to, acting as an interface with builders for
                charges, etc. are dedicated to this cause.
              </Text>
              <Text>
                Because of our relationships, performance & networking with major
                developers, traders, investors, and stakeholders, we get the best deals. We
                deal with most of the new ongoing commercial projects in Pune. All clients
                get expert service with integrity and total transparency.
              </Text>
            </VStack>
          </Flex>

          <Divider my={6} />

          <Flex flexDirection={{ base: 'column', md: 'row' }} justify="space-between">
            <Box flex={3} pr={{ base: 0, md: 4 }}>
              <Heading as="h3" size="lg" mb={4} color="#fdb92e">
                <Link href="https://harleenrealtors.com/properties-list/">
                  New ongoing Residential projects in Pune.
                </Link>
              </Heading>
              <Heading as="h3" size="md" mb={2}>
                Our Mission
              </Heading>
              <Text color="gray.500">
                A good real estate consultant doesn’t disappear once the closing papers are
                signed. In fact, that’s when the relationship is built and taken forward to
                the next generation as we believe in Converting Transactions into
                Relationships. We deal with most of the new ongoing commercial projects in
                Pune. Our mission statement is <strong>’’Selling Lifestyles Through Real
                Estate’’</strong>. It’s not just about generic property, it’s about selling
                the lifestyle.
              </Text>
              <Text color="gray.500" mt={2} fontStyle="italic">
                Customer is our priority and customer delight is our Goal, Mission, and
                Vision.
              </Text>

              <Heading as="h3" size="md" mt={4}>
                Affiliations
              </Heading>
              <Image src={logobanner} alt="Affiliations" mt={4} />
            </Box>

            <Box flex={1} mt={{ base: 6, md: 0 }}>
              <Heading as="h3" size="md" mb={4}>
                Consultation Panel
              </Heading>
              <UnorderedList color="gray.500">
                <ListItem>Lawyers</ListItem>
                <ListItem>Chartered Accountants</ListItem>
                <ListItem>Realtors</ListItem>
                <ListItem>Bankers</ListItem>
                <ListItem>Architects & Interior Designers</ListItem>
              </UnorderedList>

              <Heading as="h4" size="sm" mt={6} mb={2}>
                Frequent Searches
              </Heading>
              <UnorderedList color="#fdb92e">
                <ListItem>
                  <Link href="https://harleenrealtors.com/properties-list/">
                    New ongoing commercial projects in Pune
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://harleenrealtors.com/properties-list/">
                    New ongoing Residential projects in Pune
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://harleenrealtors.com/properties-list/">
                    New projects in Pune
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default GeneralAbout;
