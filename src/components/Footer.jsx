import { Center, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Center>
      <Text textAlign="center">
        Made with ❤️ by Shivam. <br />
        Inspired by{" "}
        <Link href="https://brittanychiang.com/">Brittany Chiang</Link>
      </Text>
    </Center>
  );
}
