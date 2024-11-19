import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import numeral from "numeral";
import { getDetailManufacture, getManufacture } from "../../../service/manufacture";
import { useEffect, useState } from "react";
import { getDetailType, getTypes } from "../../../service/types-service";
import { toast } from "react-toastify";
import { getDetailCar } from "../../../service/car/car.service.index";
import { Col, Row } from "react-bootstrap";

export default function CardCarDetail({ id }) {
  const [car, setCar] = useState("");
  const [type, setType] = useState([]);
  const [manufacture, setManufacture] = useState([]);

  const { data: detailManufacture, isSuccess: isSuccessManufacture } = useQuery(
    {
      queryKey: ["manufacture", car.manufacture_id],
      queryFn: () => getDetailManufacture(car.manufacture_id),
      enabled: !!car.manufacture_id,
    }
  );

  const { data: detailType, isSuccess: isSuccessType } = useQuery({
    queryKey: ["type", car.type_id],
    queryFn: () => getDetailType(car.type_id),
    enabled: !!car.type_id,
  });

  const { data, isSuccess, isPending, isError } = useQuery({
    queryKey: ["cars", id],
    queryFn: () => getDetailCar(id),
    enabled: !!id,
  });

  useEffect(() => {
    if (isSuccess) {
      setCar(data);
    }
    if (isSuccessType) {
      setType(detailType.data);
    }
    if (isSuccessManufacture) {
      setManufacture(detailManufacture.data);
    }
  }, [
    data,
    isSuccess,
    isSuccessManufacture,
    isSuccessType,
    detailManufacture,
    detailType,
  ]);

  if (isPending) {
    return (
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Loading...</h1>
        </Col>
      </Row>
    );
  }

  if (isError) {
    return (
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Car is not found!</h1>
        </Col>
      </Row>
    );
  }

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
        {car?.model} / {manufacture?.name} / {type?.type}
      </p>
      <div className="p-3 flex flex-row gap-3 text-gray-500 text-sm">
        <p className="gap-3 flex items-center">
          <img src="../src/assets/icon/fi_users.svg" alt="" className="w-4" />
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
        <span>Harga Sewa</span>
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
