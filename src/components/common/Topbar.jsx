import { Box, Text, Stack, Wrap, WrapItem, Image } from "@chakra-ui/react";
import React from "react";
import { BiHome, BiPhone, BiEnvelope, BiLogoFacebookSquare, BiLogoInstagramAlt } from "react-icons/bi";
import logo from "../../assets/logo/Logo.jpg";

function Topbar() {
  return (
    <Box
      display="flex"
      flexDirection={["column", "column", "row"]}
      alignItems="center"
      justifyContent="space-between"
      px={[4, 8, 12]}
      py={4}
    >
      <Box display={["none", "none", "block"]} mb={[4, 4, 0]}>
        <Image src={logo} alt="Harleen Realtors logo" w={["150px", "200px"]} />
      </Box>

      <Wrap spacing={8} justify="center">
        <WrapItem>
          <Stack direction="row" align="center" spacing={3}>
            <BiHome size="30px" />
            <Box>
              <Text fontSize="sm" fontWeight="bold">
                MahaRERA ID
              </Text>
              <Text fontSize="sm">A52100000302</Text>
            </Box>
          </Stack>
        </WrapItem>

        <WrapItem>
          <Stack direction="row" align="center" spacing={3}>
            <BiPhone size="30px" />
            <Box>
              <Text fontSize="sm">+91 - 9130584436</Text>
              <Text fontSize="sm">+91 - 7507117864</Text>
            </Box>
          </Stack>
        </WrapItem>

        <WrapItem>
          <Stack direction="row" align="center" spacing={3}>
            <BiEnvelope size="30px" />
            <Text fontSize="sm">harleenrealtors@gmail.com</Text>
          </Stack>
        </WrapItem>
      </Wrap>

      <Box display={["none", "none", "flex"]} mt={[4, 4, 0]} gap={4}>
        <BiLogoFacebookSquare size="30px" color="blue" />
        <BiLogoInstagramAlt size="30px" color="purple" />
      </Box>
    </Box>
  );
}

export default Topbar;
