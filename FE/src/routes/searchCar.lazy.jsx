import { createLazyFileRoute } from "@tanstack/react-router";
// import Protected from "../components/Auth/Protected";
// import { Container } from "@radix-ui/themes";
import NavbarUser from "../components/User/Navbar/Navbar";
import Banner from "../components/User/Banner/Banner";

export const Route = createLazyFileRoute("/searchCar")({
    component: () => (
        // <Protected roles={[1, 2]}>
        <SearchCar />
        // </Protected>
    ),
});

function SearchCar() {
    return (
        <div className="flex flex-col">
            <NavbarUser />
            <Banner />
            {/* <Container> */}
                
            {/* </Container> */}
        </div>
    );
}
