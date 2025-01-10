import {
  Box,
  Flex,
  Text,
  Link,
  List,
  ListItem,
  Stack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLocationArrow,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#6d6e73" color="white" overflowX="hidden">
      <Box py={10} px={{ base: 5, md: 10 }} maxW="100%" mx="auto">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          gap={10}
        >
          <Box flex={{ base: "1", md: "1" }} maxW={{ md: "33%" }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              About Us
            </Text>
            <Text fontSize="sm" lineHeight="tall">
              Harleen Realtors™ is a real estate company dealing in New-Launch,
              Resale, Rentals & Group Bookings of Residential & Commercial
              projects in Pune & Mumbai.
            </Text>
          </Box>
          <Box flex={{ base: "1", md: "1" }} maxW={{ md: "33%" }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Contact Us
            </Text>
            <List spacing={3}>
              <ListItem>
                <Icon as={FaLocationArrow} mr={2} />
                Swiss County, Thergaon, Pune.
              </ListItem>
              <ListItem>
                <Icon as={FaPhone} mr={2} />
                Phone: 9130584436 / 7507117864
              </ListItem>
              <ListItem>
                <Icon as={FaEnvelope} mr={2} />
                <Link href="mailto:enquiry@harleenrealtors.com">
                  enquiry@harleenrealtors.com
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box flex={{ base: "1", md: "1" }} maxW={{ md: "33%" }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Pages
            </Text>
            <Flex wrap="wrap" justify="space-between">
              <List spacing={2} flex="1">
                <ListItem>
                  <Link href="/" _hover={{ textDecoration: "underline" }}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/about/us"
                    _hover={{ textDecoration: "underline" }}
                  >
                    About Us
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/service"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Services
                  </Link>
                </ListItem>
              </List>
              <List spacing={2} flex="1">
                <ListItem>
                  <Link
                    href="/properties"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Properties
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/testimonials"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Testimonials
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/contact"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Contact
                  </Link>
                </ListItem>
              </List>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Divider borderWidth={2} borderColor="#fdb92e" />
      <Box bg="#3f3f3f" py={4}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          maxW="100%"
          mx="auto"
          px={{ base: 5, md: 10 }}
          wrap="wrap"
          gap={4}
        >
          <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
            Harleen Realtors™ : All Rights Reserved
          </Text>
          <Flex
            align="center"
            gap={4}
            wrap="wrap"
            justify={{ base: "center", md: "flex-start" }}
          >
            <Link
              href="/payment"
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              Make a Payment
            </Link>
            <Text>|</Text>
            <Link
              href="/disclaimer"
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              Disclaimer
            </Link>
          </Flex>
          <Flex
            align="center"
            gap={4}
            wrap="wrap"
            justify={{ base: "center", md: "flex-end" }}
          >
            <Text fontSize="sm">Follow us:</Text>
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebookF} boxSize={4} />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize={4} />
            </Link>
            <Link href="https://wa.me/9130584436" isExternal>
              <Icon as={FaWhatsapp} boxSize={4} />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
