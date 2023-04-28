import { Button, Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <VStack
      border="2px solid black"
      h="90vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="60%">
        <Text color="gray.300" className="secondary-font" mb="1rem">
          Hi, my name is
        </Text>
        <Heading fontSize="7xl">Shivam.</Heading>
        <Heading fontSize="7xl" color="gray.500">
          I'm an aspiring web developer.
        </Heading>
        <Text my="3rem" w="60%">
          I'm a fourth year engineering student who is passionate about the web
          development. Currently I'm looking for opportunities to work. I'm
          interested to learn more about this awesome & complex world of
          programming.
        </Text>
        <Button
          color="#00ff00"
          bgColor="transparent"
          border="1px solid #00ff00"
          size="lg"
          _hover={{
            border: "3px solid #00ff00",
          }}
        >
          Check out my projects!
        </Button>
      </Box>
    </VStack>
  );
}
