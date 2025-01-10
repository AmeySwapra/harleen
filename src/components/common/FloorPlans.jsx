import {
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Image,
    Link,
    Text,
  } from '@chakra-ui/react';
  import bhk2 from '../../assets/images/2bhk.jpeg'
  import bhk3 from '../../assets/images/3bhk.jpeg'
  const FloorPlans = () => {
    return (
      <Box id="floor_plan" p={6} boxShadow="md" borderRadius="md" className="property-plans">
       
        <Box mb={6}>
          <Heading as="h2" size="lg">
            Floor Plans
          </Heading>
        </Box>
  
       
        <Accordion allowToggle>
          {/* 2 BHK Plan */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="bold">
                    2 BHK
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Link
                href="https://harleenrealtors.com/wp-content/uploads/2017/06/Belmondo-two-bed-residence-plan.jpeg"
                isExternal
              >
                <Image
                  src={bhk2}
                  alt="2 BHK Floor Plan"
                  width="400px"
                  height="auto"
                  mx="auto"
                  borderRadius="md"
                />
              </Link>
            </AccordionPanel>
          </AccordionItem>
  
          {/* 3 BHK Plan */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="bold">
                    3 BHK
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Link
                href="https://harleenrealtors.com/wp-content/uploads/2017/06/Belmondo-three-bed-residence-plan.jpeg"
                isExternal
              >
                <Image
                  src={bhk3}
                  alt="3 BHK Floor Plan"
                  width="400px"
                  height="auto"
                  mx="auto"
                  borderRadius="md"
                />
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    );
  };
  
  export default FloorPlans;
  