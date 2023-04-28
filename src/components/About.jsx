import {
  Box,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function About() {
  return (
    <VStack
      border="2px solid black"
      h="90vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="50%">
        <Text className="secondary-font">01. About Me</Text>
        <Text>
          Hello! My name is Shivam and I enjoy building web apps. My journey in
          programming started from class 11. During that time, "Computer science
          with Python" was the additional subject which I had to do during the
          curriculum. This sparked my interest in programming world.
          <br />
          <br />
          In between, I also got my hands on WordPress so I had to learn HTML &
          CSS to customize the theme and look of the websites. This experience
          expanded my limited view of computer science.
          <br />
          <br />
          Fast forward to today, I've learnt a thing or two in both frontend and
          backend side of the web development. Currently, my main focus is to
          get hands on experience in the industry and learn about the best
          practices regarding professional programming and development.
        </Text>
      </Box>
    </VStack>
  );
}
