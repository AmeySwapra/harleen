// components/Header.js

import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Divider,
  Collapse,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaChevronDown, FaChevronUp, FaUser } from "react-icons/fa";
import logo from "../../assets/logo/Logo.jpg";
import { Link } from "react-router-dom";
import AuthModal from "../modal/AuthModal";


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } =
    useDisclosure();
  const [openDropdown, setOpenDropdown] = useState({});

  const handleToggleDropdown = (label) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const dropdownItems = {
    About: [
      { label: "About Us", href: "/about/us" },
      { label: "Our Team", href: "/about/team" },
    ],
  };

  const menuOrder = [
    { label: "Home", href: "/" },
    { label: "About Us", dropdown: dropdownItems.About },
    { label: "Service", href: "/service" },
    { label: "Properties", href: "/properties" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Events", href: "/events" },
    { label: "Payment", href: "/payment" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <Box
      as="header"
      bg={{ base: "white", md: "#fdb92e" }}
      boxShadow="sm"
      h={{ base: "80px", md: "100px" }}
      w="100%"
      overflowX="hidden"
      zIndex="sticky"
    >
      <Flex
        h="100%"
        align="center"
        justify="space-between"
        px={{ base: 4, md: 8 }}
        w="100%"
        wrap="wrap"
      >
        {/* Hamburger Menu */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          variant="ghost"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />

        {/* Logo */}
        <Image
          src={logo}
          alt="logo"
          h="50px"
          display={{ base: "block", md: "none" }}
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
        />

        {/* Profile Icon */}
        <IconButton
          aria-label="Profile"
          icon={<FaUser />}
          variant="ghost"
          display={{ base: "block", md: "none" }}
          onClick={onModalOpen} // Open Modal
        />

        {/* Desktop Navbar */}
        <Flex
          as="nav"
          display={{ base: "none", md: "flex" }}
          align="center"
          w="100%"
        >
          <Flex flex="1">
            {menuOrder.map((menuItem, index) =>
              menuItem.dropdown ? (
                <Menu key={index} isLazy>
                  <MenuButton
                    mx={4}
                    color="white"
                    fontSize="18px"
                    as={Text}
                    cursor="pointer"
                  >
                    {menuItem.label} <ChevronDownIcon />
                  </MenuButton>
                  <MenuList
                    placement="bottom-start"
                    mt="0"
                    border="1px solid #fdb92e"
                    zIndex="dropdown"
                  >
                    {menuItem.dropdown.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <Link to={item.href}>
                          <MenuItem
                            key={idx}
                            color="black"
                            _hover={{ color: "#fdb92e" }}
                          >
                            {item.label}
                          </MenuItem>
                        </Link>
                        {idx < menuItem.dropdown.length - 1 && (
                          <Divider borderColor="gray.500" borderWidth="1px" />
                        )}
                      </React.Fragment>
                    ))}
                  </MenuList>
                </Menu>
              ) : (
                <Link
                  to={menuItem.href}
                  key={index}
                  style={{
                    marginLeft: "20px",
                    fontSize: "18px",
                    color: "white",
                  }}
                >
                  {menuItem.label}
                </Link>
              )
            )}
          </Flex>

          {/* Sign In / Register Button */}
          <Flex align="center">
            <Button
              variant="outline"
              color="white"
              borderColor="white"
              mr={4}
              _hover={{ bg: "white", color: "#fdb92e" }}
              onClick={onModalOpen} // Open Modal
            >
              Sign In / Register
            </Button>
            <Button
              bg="white"
              color="#fdb92e"
              _hover={{ bg: "#fdb92e", color: "white" }}
            >
              Add Your Property
            </Button>
          </Flex>
        </Flex>

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={4}>
                {menuOrder.map((menuItem, index) =>
                  menuItem.dropdown ? (
                    <Box key={index} w="100%">
                      <Flex
                        justify="space-between"
                        align="center"
                        onClick={() => handleToggleDropdown(menuItem.label)}
                        cursor="pointer"
                      >
                        <Text fontWeight="normal" color="#fdb92e">
                          {menuItem.label}
                        </Text>
                        {openDropdown[menuItem.label] ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </Flex>
                      <Collapse in={openDropdown[menuItem.label]}>
                        <VStack align="start" pl={4} spacing={2}>
                          {menuItem.dropdown.map((item, idx) => (
                            <Link key={idx} color="#fdb92e" to={item.href}>
                              {item.label}
                            </Link>
                          ))}
                        </VStack>
                      </Collapse>
                    </Box>
                  ) : (
                    <Link key={index} color="#fdb92e" to={menuItem.href}>
                      {menuItem.label}
                    </Link>
                  )
                )}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>

      {/* Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={onModalClose} />
    </Box>
  );
};

export default Header;
