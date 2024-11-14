import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../styles/list-car.css";
import { Theme } from "@radix-ui/themes";
import { Flex, Text, Button } from "@radix-ui/themes";
import WhyUs from "../components/User/WhyUs/WhysUs";
import OurService from "../components/User/OurServices/OurServices";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Theme>
        <OurService />
        <WhyUs />
      </Theme>
    </>
  );
}
