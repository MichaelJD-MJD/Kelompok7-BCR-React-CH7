import { createLazyFileRoute } from "@tanstack/react-router";
// import Protected from "../components/Auth/Protected";
import SearchBar from "../components/User/SearchBar/SearchBar";
import Header from "../components/User/Header/Header";
import Footer from "../components/User/Footer/Footer";
import CardCar from "../components/User/CardCar/CardCar";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCars } from "../service/car/car.service.index";

export const Route = createLazyFileRoute("/searchCar")({
    component: () => (
        // <Protected roles={[1, 2]}>
        <SearchCar />
        // </Protected>
    ),
});

function SearchCar() {
    const [cars, setCars] = useState([]);

    const { data, isSuccess, isPending } = useQuery({
        queryKey: ["cars"],
        queryFn: () => getCars(),
        // enabled: !!token,
    });

    useEffect(() => {
        if (isSuccess) {
            setCars(data);
        }
    }, [data, isSuccess]);

    if (isPending) {
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <>
            <Header />
            <SearchBar />
            <div className="container w-4/5 flex flex-wrap justify-center gap-4">
                {cars.length === 0 ? (
                    <h1 className="text-center font-bold ">Maaf pencarian anda tidak ditemukan</h1>
                ) : (
                    cars.map((car) => <CardCar key={car.id} car={car} />)
                )}
                {/* <CardCar />
                <CardCar />
                <CardCar /> */}
            </div>
            <Footer />
        </>
    );
}
