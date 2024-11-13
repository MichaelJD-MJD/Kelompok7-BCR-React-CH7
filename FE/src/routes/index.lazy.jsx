import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../styles/list-car.css";
import { Theme } from "@radix-ui/themes";
import { Flex, Text, Button } from "@radix-ui/themes";

export const Route = createLazyFileRoute("/")({
    component: Index
});

function Index() {
  return (
    <>
      <Theme>
        <h1>Hello ini dashboard</h1>
      </Theme>
    </>
  );
}
