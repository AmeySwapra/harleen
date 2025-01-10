import { Box, SimpleGrid, Text, Button, Icon, VStack, HStack } from '@chakra-ui/react';
import { FaCalendar, FaBookmark, FaCaretRight } from 'react-icons/fa';

const EventCard = ({ date, category, title, description, link }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      p="4"
      _hover={{ boxShadow: "xl" }}
    >
      <VStack align="start" spacing={3}>
        <HStack spacing={2}>
          <Icon as={FaCalendar} color="gray.500" />
          <Text fontSize="sm" color="#fdb92e">{date}</Text>
        </HStack>
        <HStack spacing={2}>
          <Icon as={FaBookmark} color="gray.500" />
          <Text fontSize="sm" color="gray.500">{category}</Text>
        </HStack>
        <Text fontSize="lg" fontWeight="bold" mt={2}>{title}</Text>
        <Text color="gray.600">{description}</Text>
        <Button as="a" href={link} color={'#fdb92e'} variant="link" rightIcon={<FaCaretRight/>}>
          Continue reading
        </Button>
      </VStack>
    </Box>
  );
};

const EventsSection = () => {
  const events = [
    {
      date: "June 15, 2017",
      category: "Uncategorized",
      title: "PROP Induction Ceremony.",
      description: "“Professional Realtors of Pune Welfare Association”, held on 6th Dec 2016 at Royal Cannought...",
      link: "https://harleenrealtors.com/prop-induction-ceremony/"
    },
    {
      date: "June 15, 2017",
      category: "Uncategorized",
      title: "Appreciation at 7 Plumeria Drive, Tathawade, Pune.",
      description: "Harleen Realtors™ received small token of appreciation by Bhandari Associates for dedication...",
      link: "https://harleenrealtors.com/appreciation-at-7-plumeria-drivetathawade-pune/"
    },
    {
      date: "June 15, 2017",
      category: "Uncategorized",
      title: "Felicitation Event, Melange Residences, Hinjawadi, Pune",
      description: "Harleen Realtors™ was felicitated for high performance and tireless efforts in assisting the sale...",
      link: "https://harleenrealtors.com/felicitation-event-melange-residences-hinjawadi-pune/"
    },
    {
      date: "June 15, 2017",
      category: "Uncategorized",
      title: "Property Exhibition, Balewadi, Pune.",
      description: "Sakal Vastu, Property Exhibition held at VITS, Balewadi on 23 rd & 24th July. We received...",
      link: "https://harleenrealtors.com/property-exhibition-balewadi-pune/"
    },
    {
      date: "June 15, 2017",
      category: "Uncategorized",
      title: "IT Park Event, Bavdhan, Pune",
      description: "Harleen Realtors™ Conducting A Promotional Activity At Kapil Zenith IT Park, Bavdhan...",
      link: "https://harleenrealtors.com/it-park-event-bavdhan-pune/"
    },
    {
      date: "June 15, 2017",
      category: "Uncategorized",
      title: "World’s Broker Day",
      description: "Celebrating World’s Broker Day on 9th of June. Interested Consultants can call on mentioned...",
      link: "https://harleenrealtors.com/worlds-broker-day/"
    }
  ];

  return (
    <Box py={8}  px={{ base: 4, md: 8 , lg: 14}} bg={'#f8f8f8'}>
      <Box mb={6}>
        <Text fontSize="3xl" fontWeight="bold">Events</Text>
      </Box>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
        {events.map((event, index) => (
          <EventCard
            key={index}
            date={event.date}
            category={event.category}
            title={event.title}
            description={event.description}
            link={event.link}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default EventsSection;
