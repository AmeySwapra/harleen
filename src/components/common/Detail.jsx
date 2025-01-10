import { Box, Heading, Text, UnorderedList, ListItem, Alert, AlertIcon } from '@chakra-ui/react';

const Detail = () => {
  return (
    <Box id="detail" className="detail-list" p={6} boxShadow="md" borderRadius="md">
      {/* Title Section */}
      <Box mb={4}>
        <Heading as="h2" size="lg">
          Detail
        </Heading>
      </Box>

      {/* Alert Section */}
      <Alert status="info" borderRadius="md" variant="subtle">
        <AlertIcon />
        <UnorderedList styleType="none" spacing={2}>
          <ListItem>
            <Text as="strong">Property ID:</Text> HR3294
          </ListItem>
        </UnorderedList>
      </Alert>
    </Box>
  );
};

export default Detail;
