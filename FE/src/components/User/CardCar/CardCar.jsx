import { Link } from "@tanstack/react-router";

export default function CardCar({ car }) {
    return (
        <div className="max-w-2/6 w-1/3  bg-white border border-gray-200 rounded-lg drop-shadow">
            <img
                src={car.image}
                alt=""
                className="object-contain  h-56 w-full rounded-t-md pb-3"
            />
            <div className="p-3">
                <div className="gap-3">
                    <h6 className="">{car.type}</h6>
                    <h5>Rp {car.rentPerDay}/ hari</h5>
                    <p>{car.description}</p>
                    <p className="gap-3 flex items-center">
                        <img
                            src="../src/assets/icon/fi_users.svg"
                            alt=""
                            className="w-6"
                        />{" "}
                        {car.capacity} orang
                    </p>
                    <p className="gap-3 flex items-center">
                        <img
                            src="../src/assets/icon/fi_settings.svg"
                            alt=""
                            className="w-6"
                        />{" "}
                        {car.transmission}
                    </p>
                    <p className="gap-3 flex items-center">
                        <img
                            src="../src/assets/icon/fi_calendar.svg"
                            alt=""
                            className="w-6"
                        />{" "}
                        Tahun {car.year}
                    </p>
                </div>
                <button className="w-full">
                    <Link
                        to="/detailCar"
                        className="bg-[#5CB85F] text-white py-2 md:px-4 rounded mt-4 inline-block hover:bg-[#4DAE4A] active:bg-[#3b8d39] focus:outline-none focus:ring-2 focus:ring-[#4DAE4A] focus:ring-opacity-50 px-auto w-full self-end"
                    >
                        Detail
                    </Link>
                </button>
            </div>
        </div>
    );
}
