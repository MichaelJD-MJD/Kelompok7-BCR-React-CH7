import { Link } from "@tanstack/react-router";
import numeral from "numeral";

export default function CardCar({ car }) {
    return (
        <div className="min-w-min max-w-xs w-full bg-white border border-gray-200 rounded-lg drop-shadow flex flex-col justify-between">
            <div>
                <img
                    src={car?.image}
                    alt=""
                    className="object-cover h-56 w-full rounded-t-md pb-3 object-top"
                />
                <div className="space-y-4 p-3">
                    <p className="font-medium">
                        {car?.model} / {car?.manufactures?.name}
                    </p>
                    <h5 className="font-bold text-xl">
                        Rp {numeral(car?.rentPerDay).format("0,0")} / hari
                    </h5>
                    <p>{car?.description}</p>
                </div>
            </div>
            <div className="p-3 flex flex-col gap-2">
                <p className="gap-3 flex items-center">
                    <img
                        src="../src/assets/icon/fi_users.svg"
                        alt=""
                        className="w-6"
                    />
                    {car?.capacity} orang
                </p>
                <p className="gap-3 flex items-center">
                    <img
                        src="../src/assets/icon/fi_settings.svg"
                        alt=""
                        className="w-6"
                    />
                    {car?.transmission}
                </p>
                <p className="gap-3 flex items-center">
                    <img
                        src="../src/assets/icon/fi_calendar.svg"
                        alt=""
                        className="w-6"
                    />
                    Tahun {car?.year}
                </p>

                <button className="w-full">
                    <Link
                        to={`/searchCar/${car.id}`}
                        className="bg-[#5CB85F] text-white py-2 md:px-4 rounded mt-4 inline-block hover:bg-[#4DAE4A] active:bg-[#3b8d39] focus:outline-none focus:ring-2 focus:ring-[#4DAE4A] focus:ring-opacity-50 px-auto w-full self-end"
                    >
                        Pilih Mobil
                    </Link>
                </button>
            </div>
        </div>
    );
}
