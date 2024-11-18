import { Link } from "@tanstack/react-router";
import numeral from "numeral";

export default function CardCarDetail({ car }) {
    return (
        <div className="min-w-min max-w-md w-full bg-white border border-gray-200 rounded-lg drop-shadow flex flex-col justify-between">
            <div>
                <img
                    src={car?.image}
                    alt=""
                    className="object-cover h-56 w-full rounded-t-md pb-3 object-top"
                />
            </div>
            <p className="p-3 space-y-4 font-medium">
                {car?.model} / {car?.manufactures?.name}
            </p>
            <div className="p-3 flex flex-row gap-3 text-gray-500 text-sm">
                <p className="gap-3 flex items-center">
                    <img
                        src="../src/assets/icon/fi_users.svg"
                        alt=""
                        className="w-4"
                    />
                    {car?.capacity} orang
                </p>
                <p className="gap-3 flex items-center">
                    <img
                        src="../src/assets/icon/fi_settings.svg"
                        alt=""
                        className="w-4"
                    />
                    {car?.transmission}
                </p>
                <p className="gap-3 flex items-center">
                    <img
                        src="../src/assets/icon/fi_calendar.svg"
                        alt=""
                        className="w-4"
                    />
                    Tahun {car?.year}
                </p>
            </div>
            <div className="p-3 flex justify-between">
                <span>Tahun</span>
                <h5 className="font-bold text-xl">
                    Rp {numeral(car?.rentPerDay).format("0,0")} / hari
                </h5>
            </div>
            <button className="w-full p-3">
                <Link
                    to="#"
                    className="bg-[#5CB85F] text-white py-2 md:px-4 rounded mt-4 inline-block hover:bg-[#4DAE4A] active:bg-[#3b8d39] focus:outline-none focus:ring-2 focus:ring-[#4DAE4A] focus:ring-opacity-50 px-auto w-full self-end"
                >
                    Lanjutkan Pembayaran
                </Link>
            </button>
        </div>
    );
}
