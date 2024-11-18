import { createLazyFileRoute } from "@tanstack/react-router";
import SearchBar from "../../components/User/SearchBar/SearchBar";
import CardCarDetail from "../../components/User/CardCar/CardCarDetail";
import Accordian, { AccordianItem } from "../../components/User/Accordian";
import Footer from "../../components/User/Footer/Footer";

export const Route = createLazyFileRoute("/searchCar/$id")({
    component: detailMobil,
});

function detailMobil() {
    const { id } = Route.useParams();

    return (
        <div className="pt-20">
            <div className="bg-[#F1F3FF] h-48"></div>
            <SearchBar />
            <div className="container flex flex-row justify-between gap-4">
                <div className="p-3 border shadow-sm w-2/3 rounded-lg">
                    <h1 className="font-semibold">Tentang Paket</h1>
                    <header className="py-4 font-menium">Include</header>
                    <ul className="list-disc list-inside text-gray-500">
                        <li>
                            Apa saja yang termasuk dalam paket misal durasi max
                            12 jam
                        </li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                    </ul>
                    <header className="py-4 font-medium">Exclude</header>
                    <ul className="list-disc list-inside text-gray-500">
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                            Jika overtime lebih dari 12 jam akan ada tambahan
                            biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                    <Accordian className="">
                        <AccordianItem
                            value={1}
                            trigger="Refund, Reschedule, Overtime"
                        >
                            <ul className="list-disc text-gray-500">
                                <li>
                                    Tidak termasuk biaya makan sopir Rp
                                    75.000/hari
                                </li>
                                <li>
                                    Jika overtime lebih dari 12 jam akan ada
                                    tambahan biaya Rp 20.000/jam
                                </li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>
                                    Tidak termasuk biaya makan sopir Rp
                                    75.000/hari
                                </li>
                                <li>
                                    Jika overtime lebih dari 12 jam akan ada
                                    tambahan biaya Rp 20.000/jam
                                </li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>
                                    Tidak termasuk biaya makan sopir Rp
                                    75.000/hari
                                </li>
                                <li>
                                    Jika overtime lebih dari 12 jam akan ada
                                    tambahan biaya Rp 20.000/jam
                                </li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                        </AccordianItem>
                    </Accordian>
                </div>

                <CardCarDetail className="w-1/3" />
            </div>
            <Footer />
        </div>
    );
}
