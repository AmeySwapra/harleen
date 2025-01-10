import { Box, Flex, Text, Stack, Heading } from "@chakra-ui/react";

const PropertyDetailSection = () => {
  return (
    <Box py={10}>
      <Flex direction="column" maxW="1200px" mx="auto" px={5}>
        <Box bg="white" borderRadius="md" boxShadow="lg" p={6}>
          <article id="post-748" className="post-748 page type-page">
            <div className="entry-content">
              <Flex direction="column" gap={5}>
                <Box>
                  <Stack spacing={5}>
                    <Text fontSize="lg" lineHeight="tall">
                      All the details mentioned about any property on this portal posted by us is accurate and to the best of our knowledge. All the details entered i.e. Brochure, Floor Plans, Amenities, Price, Possession dates etc are provided by the builders and their sales team. We have not added or altered any of these details. We have tried to scrutinize the documents like Title deed and non-agriculture order, 7/12 extract, Project plan approval, NOCs from various authorities & commencement certificate, Environmental Clearance Certificate, APF numbers of various banks. We assume that all these approvals are authentic, legitimate and cent percent legally obtained documents.
                    </Text>
                    <Text fontWeight="bold" fontSize="lg">
                      We are “RERA certified company” and will be working with RERA registered builders only. The site is under maintenance as RERA certified projects are yet to be updated as per the new RERA rules and regulations.
                    </Text>
                  </Stack>
                </Box>
              </Flex>
            </div>
          </article>
        </Box>
      </Flex>
    </Box>
  );
};

export default PropertyDetailSection;
