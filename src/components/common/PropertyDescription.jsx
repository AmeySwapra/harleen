import React from "react";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Container,
  Image,
  Divider,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import payb from "../../assets/images/payb.gif";

const Section = ({ heading, children }) => (
  <Box mb={8}>
    <Heading as="h3" size="lg" mb={4}>
      {heading}
    </Heading>
    {children}
  </Box>
);

const InfoList = ({ items }) => (
  <List spacing={3} mb={4}>
    {items.map((item, index) => (
      <ListItem color={"gray.500"} key={index}>
        {item}
      </ListItem>
    ))}
  </List>
);

const InfoTable = ({ data }) => (
  <Table variant="striped" colorScheme="gray" mb={4}>
    <Tbody>
      {data.map((row, index) => (
        <Tr key={index}>
          <Td>{row.title}</Td>
          <Td>{row.size}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

const PropertyDescription = () => {
  const carpetAreaData = [
    { title: "Golf Suite", size: "500 sq. ft." },
    { title: "2 Bed", size: "960 sq. ft." },
    { title: "2 Bed Large", size: "1260 sq. ft." },
    { title: "3 Bed", size: "1440 sq. ft." },
    { title: "3 Bed Large", size: "1650 sq. ft." },
  ];

  const projectHighlights = [
    "Signature Greg Norman-designed golf course along the Pavana river with a 1 km riverside jogging track.",
    "50,000 sq. ft. clubhouse with spa by Evason (Six Senses group), gourmet restaurants, pools, gaming room, library, and more.",
    "Fully air-conditioned residences with imported fittings and finishes.",
    "Concierge services, in-room dining, and housekeeping for a hassle-free experience.",
    "Plug-and-play residences for ultimate convenience and luxury.",
  ];

  const additionalAspects = [
    "Brand partners include Greg Norman (legendary golfer), Six Senses (world-class spa and resort management), and HBA (acclaimed interior designers).",
    "Schools nearby: Akshara International School, Blossom Public School, Orchid School.",
    "Colleges: Symbiosis Institute, DY Patil Institute of Management Studies.",
    "Hospitals: Sanjeevani, DY Patil, Aditya Birla Hospitals.",
  ];

  const externalAmenities = [
    "Golf course designed by Greg Norman",
    "Landscape of over 100 acres, more than 90% of it open space",
    "50,000 sq. ft. spa and club managed by Evason by Six Senses, with:",
    "World standard spa by Evason",
    "State-of-the-art gym and aerobics center",
    "Yoga and meditation center",
    "KidzFun: dedicated indoor play area and crèche for kids from 2 to 5 years",
    "Ultimate Gaming: dedicated play zone for kids from 6 to 12 years",
    "Private theatre",
    "Fine dining restaurant",
    "Elegant party hall and open-air lawn",
    "Indoor games room with carrom, table tennis, billiards",
    "Cards room",
    "Library Lounge with Business Centre",
    "Art and culture centre",
    "Outdoor 25m swimming pool",
    "Separate kids’ pool",
    "24-hour concierge service",
    "Organic farm",
    "Private helipad with charter helicopter services (For helipad, chopper services would be available from Mumbai, through various charter operators)",
    "Full-sized cricket ground",
    "Tennis courts",
    "Badminton court",
    "Multipurpose basketball court",
    "1 km long riverside promenade",
    "Riverside jetty and boating facilities",
    "Jogging/walking track",
    "Multiple play areas for children",
    "Picturesque barbecue and picnic spots",
    "Sheltered cabanas, sit-outs and social spaces",
  ];

  const internalAmenities = [
    "Laminated wooden flooring for all bedrooms",
    "Air conditioned with Split Units (except for Kitchen, store, bathrooms, terraces, utility areas)",
    "MarbItal flooring in living, dining, puja, and passages",
    "Granite platform in Kitchen with sink and sink mixer",
    "Kohler / Jaquar* bath fittings",
    "Toilets finished with designer tiles",
    "Motion sensors for automated lighting in bathrooms",
    "Video Door Phone in each apartment",
    "CCTV monitoring of key common areas",
    "Gas detector in kitchen",
    "Provision for cable, telephone, and internet connectivity",
  ];

  return (
    <Container maxW="container.xl" p={4}>
      <Box mb={8}>
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          <Image
            src={payb}
            alt="discount on 3 BHK Flats in Gahunje"
            width="100%"
            maxWidth="856px"
            mx="auto"
            mb={4}
          />
          Lodha Belmondo
        </Heading>
        <Divider />
      </Box>

      <Section heading="Description">
        <Text mb={4} color={"gray.500"}>
          Consider a project within the ‘Top 10 Investment Destinations’ in
          India – located a brisk 90 minutes from Mumbai off the Mumbai-Pune
          Expressway, opposite Sahara Cricket Stadium, Pune, and just 10 minutes
          from India’s largest IT hub Hinjewadi and India’s largest auto hub
          Pimpri-Chinchwad.
        </Text>
        <Text mb={4} color={"gray.500"}>
          Presenting Lodha Belmondo, best 2 BHK / 3 BHK Flats in Gahunje, Pune
          is a 100-acre Greg Norman-designed golf development. Your ultimate
          second homes: Plush Golf Suites, 2 &amp; 3 bed residences at exclusive
          prices. Lodha Belmondo is now ready to move with CC and OC received.
          Call Harleen Realtors™ on +91 7507117864 or +91 9130584436 for price
          details and to schedule a site visit.
        </Text>
        <Text mb={4} color={"gray.500"}>
          This superlative product is adjacent to the location Ravet which is
          rated as one of the top 10 investment destinations in India according
          to Knight Frank Investment Advisory report. You will multiply your
          investment as this region is predicted to yield 100% returns by 2017
          as per the same report.
        </Text>
      </Section>

      <Section heading="Why Invest in Lodha Belmondo">
        <InfoList
          items={[
            "Located 10 minutes away from the IT hub of Hinjewadi and the automotive hub of Pimpri-Chinchwad.",
            "Golf course developments yield up to 80% premium over non-golf developments in proximity, according to Cornell University.",
            "Pune is rated amongst the top five real estate investment destinations within India.",
          ]}
        />
        <Text mb={4} color={"gray.500"}>
          Lodha Belmondo is a branded golf development designed by legendary
          Greg Norman. Spend your weekends in your ultimate investment
          destination abutting the golf course.
        </Text>
      </Section>

      <Section heading="Project Highlights">
        <InfoList items={projectHighlights} />
      </Section>

      <Section heading="Carpet Area Details">
        <InfoTable data={carpetAreaData} />
      </Section>

      <Section heading="Other Must-Know Aspects">
        <Text mb={4} color={"gray.500"}>
          Brand partners include Greg Norman (legendary golfer), Six Senses
          (world-class spa and resort management), and HBA (acclaimed interior
          designers).
        </Text>
        <InfoList items={additionalAspects} />
      </Section>

      <Section heading="External Amenities">
        <InfoList items={externalAmenities} />
      </Section>

      <Section heading="Internal Amenities">
        <InfoList items={internalAmenities} />
      </Section>

      <Box>
        <Text color={"gray.500"}>
          Lodha Belmondo offers a spectrum of luxury amenities, making it an
          aspirational and lucrative investment opportunity. Don’t miss this
          limited-time offer!
        </Text>
      </Box>
    </Container>
  );
};

export default PropertyDescription;
