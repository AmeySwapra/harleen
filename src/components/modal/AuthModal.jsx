import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Checkbox,
  Text,
  Select,
  Button,
  Box,
} from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import ResetPasswordModal from "./ResetPasswordModal";


const AuthModal = ({ isOpen, onClose }) => {
  const [isResetModalOpen, setResetModalOpen] = useState(false);

  const handleResetOpen = () => {
    setResetModalOpen(true);
  };

  const handleResetClose = () => {
    setResetModalOpen(false);
  };

  return (
    <>
     
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted>
              <TabList>
                <Tab>Login</Tab>
                <Tab>Register</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <VStack spacing={4} align="stretch">
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaUser />
                      </InputLeftElement>
                      <Input placeholder="Username" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaLock />
                      </InputLeftElement>
                      <Input placeholder="Password" type="password" />
                    </InputGroup>
                    <Box display={'flex'} justifyContent={'space-between'}>
                    <Checkbox>Remember Me</Checkbox>
                    <Text
                      color="blue.500"
                      textAlign="right"
                      cursor="pointer"
                      onClick={handleResetOpen}
                    >
                      Lost your password?
                    </Text>
                    </Box>
                    <Button bg={"#fdb92e"} color={'white'} w="full">
                      Login
                    </Button>
                  </VStack>
                </TabPanel>
                <TabPanel>
                  <VStack spacing={4} align="stretch">
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaUser />
                      </InputLeftElement>
                      <Input placeholder="Username" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaEnvelope />
                      </InputLeftElement>
                      <Input placeholder="Email" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaLock />
                      </InputLeftElement>
                      <Input placeholder="Password" type="password" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaLock />
                      </InputLeftElement>
                      <Input placeholder="Retype Password" type="password" />
                    </InputGroup>
                    <Select placeholder="Select Role">
                      <option value="owner">Owner</option>
                      <option value="buyer">Buyer</option>
                    </Select>
                    <Checkbox>I agree to the terms and conditions</Checkbox>
                    <Button bg={"#fdb92e"} color={'white'} w="full">
                      Register
                    </Button>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>

      
      <ResetPasswordModal
        isOpen={isResetModalOpen}
        onClose={handleResetClose}
      />
    </>
  );
};

export default AuthModal;
