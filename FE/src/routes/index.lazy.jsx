import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../styles/list-car.css";
import Protected from "../components/Auth/Protected";
import { Theme } from "@radix-ui/themes";
import { Flex, Text, Button } from "@radix-ui/themes";
import Navbar from "../components/User/Navbar/Navbar";

export const Route = createLazyFileRoute("/")({
    component: Index
});

function Index() {
  return (
    <>
      <Theme>
        <Navbar />
      </Theme>
    </>
  );
}
