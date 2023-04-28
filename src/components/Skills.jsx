import { VStack, Box, UnorderedList, ListItem, Text } from "@chakra-ui/react";

const languages = ["JavaScript", "Python", "SQL"];
const frontend = ["React", "Chakra UI", "HTML/CSS"];
const backend = ["Node.js", "MySQL, MongoDB"];
const tools = ["Git, GitHub", "VS Code", "Postman", "PyCharm"];

function CustomList(props) {
  const { array } = props;
  return (
    <UnorderedList>
      {array.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </UnorderedList>
  );
}

export default function Skills() {
  return (
    <VStack
      border="2px solid black"
      h="90vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="60%">
        <Text>
          These are the technologies with which I'm currently familiar:
        </Text>
        <Text>Programming Languages:</Text>
        <CustomList array={languages} />
        <Text>FrontEnd Technologies:</Text>
        <CustomList array={frontend} />
        <Text>Backend Technologies:</Text>
        <CustomList array={backend} />
        <Text>Backend Technologies:</Text>
        <CustomList array={tools} />
      </Box>
    </VStack>
  );
}
