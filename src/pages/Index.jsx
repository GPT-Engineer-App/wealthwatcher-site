import { Box, Container, Flex, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">Financial Times</Heading>
            <Flex>
              <Link href="#" mx={2}><FaTwitter size="24px" /></Link>
              <Link href="#" mx={2}><FaFacebook size="24px" /></Link>
              <Link href="#" mx={2}><FaLinkedin size="24px" /></Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8}>
          <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h2" size="md" mb={2}>Main News Headline</Heading>
            <Text>Summary of the main news article. This is a brief description to give readers an idea of what the article is about.</Text>
          </Box>
          <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h2" size="md" mb={2}>Secondary News Headline</Heading>
            <Text>Summary of the secondary news article. This is a brief description to give readers an idea of what the article is about.</Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <Flex>
              <Link href="#" mx={2}>Privacy Policy</Link>
              <Link href="#" mx={2}>Terms of Service</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;