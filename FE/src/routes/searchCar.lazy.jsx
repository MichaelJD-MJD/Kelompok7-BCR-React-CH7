import { createLazyFileRoute } from "@tanstack/react-router";
// import Protected from "../components/Auth/Protected";
import SearchBar from "../components/User/SearchBar/SearchBar";
import Header from "../components/User/Header/Header";
import Footer from "../components/User/Footer/Footer";

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
            <Header />
            <SearchBar />
            <Footer />
        </>
    );
}
