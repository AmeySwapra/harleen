import {
    Box,
    VStack,
    HStack,
    Image,
    Text,
    Divider,
    Icon,
  } from "@chakra-ui/react";
import { FiFileText } from "react-icons/fi";
import pay from '../assets/images/QRCode-1.jpeg'  
import payb from '../assets/images/payb.gif'
  
  const Consultation = () => {
    return (
      <Box bg="gray.50" p={8}>
        <VStack spacing={8} align="center" textAlign="center">
        
          <Box>
            <Image
              src={pay}
              alt="QR Code Placeholder"
              maxW="100%"
            />
          </Box>
  
          
          <Box
          bg="gray.200"
          borderRadius="full"
          p={4}
          display="inline-flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon as={FiFileText} boxSize={20} color="orange.400" />
        </Box>

  
         
          <Text fontSize="lg" fontWeight="bold">
            Consultation Fee : ₹ 1,100/-
          </Text>
  
         
          <Divider borderWidth={4} borderColor="gray.300" maxW="100%" />
  
        
          <VStack spacing={4} align="center">
            <Image
              src={payb}
              alt="Payment Disclaimer"
              maxW="100%"
            />
  
            <Text textAlign="justify"  color={'gray.500'}>
              <strong>Consultation fee:</strong> Is ₹ 1100/- only. Here is why we
              charge a consultation fee and why a “free consultation” is not
              necessarily in your best interest. We believe that in consulting
              with a professional – as with all things in life – “you get what you
              pay for.” IF YOU PAY NOTHING, YOU RECEIVE NOTHING IN VALUE.
            </Text>
  
            <Text textAlign="justify" color={'gray.500'}>
              Unfortunately, too often, a “free consultation” turns into nothing
              but a high-pressured sales pitch. Rather, a professional
              consultation should be a learning experience, an educational
              opportunity for you and not a “sales closing.” It should function
              solely for your benefit and to your advantage. Valid for{" "}
              <strong>6 months*</strong>. Conditions apply*.
            </Text>
  
            <Text textAlign="justify" color={'gray.500'}>
              <strong>Note:</strong> This is just to attract the right
              seller/buyer. Any genuine buyer/seller will not hesitate to pay
              this amount if interested in property sale/purchase. To top it up we
              generally refund/adjust this fee against the service fee, so that
              there is no direct cost to you. Conditions apply*
            </Text>
  
            <Text textAlign="justify" color={'gray.500'}>
              <strong>Service fee:</strong> Can vary based on the services
              availed. It can vary with the service type and consists of services
              like Property Management, Purchases for the upkeep of property, and
              Brokerage in case of rental and resale deals. Conditions Apply*
            </Text>
          </VStack>
        </VStack>
      </Box>
    );
  };
  
  export default Consultation;
  