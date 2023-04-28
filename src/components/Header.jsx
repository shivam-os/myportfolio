import { HStack, Link, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <HStack className="secondary-font" color="#00ff00" justifyContent="space-between">
      <Heading>Shivam</Heading>
      <HStack gap="1rem">
        <Link>01.About</Link>
        <Link>02.Skills</Link>
        <Link>03.Projects</Link>
        <Link>04.Contact</Link>
      </HStack>
    </HStack>
  );
}
