import { createLazyFileRoute } from "@tanstack/react-router";
import "../styles/list-car.css";
import Banner from "../components/User/Banner/Banner";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <div className="flex flex-col">
            <Banner />
        </div>
    );
}
