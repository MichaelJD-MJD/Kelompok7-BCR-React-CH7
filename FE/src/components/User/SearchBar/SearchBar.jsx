import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useQuery } from "@tanstack/react-query";

export default function SearchBar() {
    // const { token } = useSelector((state) => state.auth);

    const [typeDriver, setTypeDriver] = useState(" ");
    const [date, setDate] = useState(" ");
    const [time, setTime] = useState(" ");
    const [passangerCount, setPassangerCount] = useState(" ");

    // const { data, isSuccess, isPending } = useQuery({
    //     queryKey: ["searchCar"],
    //     queryFn: () => getSearchCar(),
    //     enabled: !!token,
    // });

    return (
        <div className="container mx-auto px-5 py-8 bg-clip-border flex w-4/5 rounded-lg relative -top-14 bg-white shadow-md">
            <form className="flex flex-row justify-between items-stretch flex-wrap w-full lg:w-full">
                <div className="flex flex-row flex-wrap justify-between lg:w-2/5 w-full">
                    <div className="flex flex-col content-end w-full md:w-1/2 lg:w-1/2 justify-between px-2">
                        <label htmlFor="typeDriver" className="text-gray-700">
                            Tipe Driver
                        </label>
                        <select
                            id="typeDriver"
                            value={typeDriver}
                            onChange={(e) => setTypeDriver(e.target.value)}
                            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md"
                        >
                            <option value=" ">Pilih Tipe Driver</option>
                            <option value="Dengan Sopir">Dengan Sopir</option>
                            <option value="Tanpa Sopir">
                                Tanpa Sopir (Lepas Kunci)
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col content-end w-full md:w-1/2 lg:w-1/2 justify-between px-2">
                        <label htmlFor="date" className="text-gray-700">
                            Tanggal
                        </label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-between lg:w-2/5 w-full">
                    <div className="flex flex-col content-end w-full md:w-1/2 lg:w-1/2 justify-between px-2">
                        <label htmlFor="time" className="text-gray-700">
                            Waktu Jemput/Ambil
                        </label>
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col content-end w-full md:w-1/2 lg:w-1/2 justify-between px-2">
                        <label
                            htmlFor="passangerCount"
                            className="text-gray-700"
                        >
                            Jumlah Penumpang (optional)
                        </label>
                        <input
                            type="number"
                            id="passangerCount"
                            value={passangerCount}
                            onChange={(e) => setPassangerCount(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Jumlah Penumpang"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-[#5CB85F] text-white py-2 md:px-4 rounded mt-4 inline-block hover:bg-[#4DAE4A] active:bg-[#3b8d39] focus:outline-none focus:ring-2 focus:ring-[#4DAE4A] focus:ring-opacity-50 px-auto lg:w-1/5 w-full self-end"
                >
                    Cari Mobil
                </button>
            </form>
        </div>
    );
}
