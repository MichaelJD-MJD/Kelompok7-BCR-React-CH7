import { Button } from "@headlessui/react";
import imgCar from "../../../assets/img_car.svg";
import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { useEffect } from "react";

const Banner = () => {
    const location = useLocation();
    const [productSegment, setProductSegment] = useState("");

    useEffect(() => {
        const currentUrl = location.pathname;
        const pathSegments = currentUrl.split("/");
        const extractedSegment = pathSegments[0];
        setProductSegment(extractedSegment);
    }, [location]);

    return (
        <div className="bg-[#F1F3FF]">
            <div className="container mx-auto mt-5 pb-5 ">
                <div className="flex gap-5 flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 m-auto">
                        <h3 className="text-4xl font-bold">
                            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                        </h3>
                        <p className="mt-4 text-base">
                            Selamat datang di Binar Car Rental. Kami menyediakan
                            mobil kualitas terbaik dengan harga terjangkau.
                            Selalu siap melayani kebutuhanmu untuk sewa mobil
                            selama 24 jam.
                        </p>
                        {productSegment === "searchCar" ? (
                            <Button
                                className="start-btn btn bg-[#5CB85F] text-white py-2 px-4 rounded mt-4 inline-block hover:bg-[#4DAE4A] active:bg-[#4DAE4A] focus:outline-none focus:ring-2 focus:ring-[#4DAE4A] focus:ring-opacity-50"
                                as={Link}
                                to="/searchCar"
                                href="#"
                            >
                                Mulai Sewa Mobil
                            </Button>
                        ) : null}
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img src={imgCar} alt="" className="size-max" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
