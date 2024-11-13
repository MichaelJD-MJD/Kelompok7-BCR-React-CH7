import { createLazyFileRoute } from "@tanstack/react-router";
// import Protected from "../components/Auth/Protected";
import { Container } from "@radix-ui/themes";
import NavbarUser from "../components/Navbar-User";

export const Route = createLazyFileRoute("/searchCar")({
    component: () => (
        // <Protected roles={[1, 2]}>
        <SearchCar />
        // </Protected>
    ),
});

function SearchCar() {
    return (
        <>
            <NavbarUser />
            <Container>
                
            </Container>
        </>
    );
}
