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
        <div className="container mx-auto px-5 py-8 bg-clip-border flex w-3/5 rounded-lg relative -top-14 bg-white shadow-md">
            <form className="flex justify-around gap-4">
                <div className="flex flex-col content-between">
                    <label htmlFor="typeDriver" className="text-gray-700">
                        Tipe Driver
                    </label>
                    <select
                        id="typeDriver"
                        value={typeDriver}
                        onChange={(e) => setTypeDriver(e.target.value)}
                        className="mt-1 block w-full p-2.5 pr- border border-gray-300 rounded-md"
                    >
                        <option value=" ">Pilih Tipe Driver</option>
                        <option value="Dengan Sopir">Dengan Sopir</option>
                        <option value="Tanpa Sopir">
                            Tanpa Sopir (Lepas Kunci)
                        </option>
                    </select>
                </div>
                <div className="flex flex-col content-between">
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
                <div className="flex flex-col">
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
                <div className="flex flex-col">
                    <label htmlFor="passangerCount" className="text-gray-700">
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
                <button
                    type="submit"
                    className="bg-[#5CB85F] text-white py-2 px-4 rounded mt-4 inline-block hover:bg-[#4DAE4A] active:bg-[#3b8d39] focus:outline-none focus:ring-2 focus:ring-[#4DAE4A] focus:ring-opacity-50 content-center justify-center"
                >
                    Cari Mobil
                </button>
            </form>
        </div>
    );
}
