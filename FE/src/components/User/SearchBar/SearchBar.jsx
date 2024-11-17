import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../../service/car/car.service.index";
import CardCar from "../CardCar/CardCar";
import { toast } from "react-toastify";
import { Col, Row } from "react-bootstrap";

export default function SearchBar() {
  const [typeDriver, setTypeDriver] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passangerCount, setPassangerCount] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ["searchCar"],
    queryFn: () => getCars(date, passangerCount),
    enabled: !!date && !!passangerCount, 
  });

  useEffect(() => {
    if (isSuccess) {
      if (data.length === 0) {
        setSearchResult([]);
        toast.warning("No cars found matching the criteria.");
      } else {
        setSearchResult(data);
      }
    } else if (isError) {
      toast.error(error?.message || "An error occurred while fetching data.");
    }
  }, [data, isSuccess, isError, error]);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true); // Menampilkan hasil pencarian
  };

  return (
    <div>
      <div className="container mx-auto px-5 py-8 bg-clip-border flex w-4/5 rounded-lg relative -top-14 bg-white shadow-md">
        <form
          onSubmit={handleSearch}
          className="flex flex-row justify-between items-stretch flex-wrap w-full lg:w-full"
        >
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
                <option value="">Pilih Tipe Driver</option>
                <option value="Dengan Sopir">Dengan Sopir</option>
                <option value="Tanpa Sopir">Tanpa Sopir (Lepas Kunci)</option>
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
          </div>
          <button
            type="submit"
            className="bg-[#5CB85F] text-white py-2 md:px-4 rounded mt-4 inline-block hover:bg-[#4DAE4A] active:bg-[#3b8d39] focus:outline-none focus:ring-2 focus:ring-[#4DAE4A] focus:ring-opacity-50 px-auto lg:w-1/5 w-full self-end"
          >
            Cari Mobil
          </button>
        </form>
      </div>

      {showResults && searchResult.length === 0 && (
        <Row className="mt-5">
          <Col>
            <h1 className="text-center">No cars found!</h1>
          </Col>
        </Row>
      )}

      {showResults && searchResult.length > 0 && (
        <div className="container w-4/5 flex flex-wrap">
          {searchResult.map((car, index) => (
            <CardCar key={index} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}
