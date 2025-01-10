import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

const ResetPasswordModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Reset Password</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={4}>
            Please enter your username or email address. You will receive a
            link to create a new password via email.
          </Text>
          <VStack spacing={4} align="stretch">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaEnvelope />
              </InputLeftElement>
              <Input placeholder="Username or Email" />
            </InputGroup>
            <Button colorScheme="yellow" w="full">
              Reset Password
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ResetPasswordModal;
