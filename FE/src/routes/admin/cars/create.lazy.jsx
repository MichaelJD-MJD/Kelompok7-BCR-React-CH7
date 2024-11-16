import { useEffect, useState } from "react";
import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import "../../../styles/add-car.css";
import { createCar } from "../../../service/car/car.service.index";
import { getTypes } from "../../../service/types-service";
import Protected from "../../../components/Auth/Protected";
import { getManufacture } from "../../../service/manufacture";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Row } from "react-bootstrap";

export const Route = createLazyFileRoute("/admin/cars/create")({
  component: () => (
    <Protected roles={[1]}>
      <CreateCar />
    </Protected>
  ),
});

function CreateCar() {
  const navigate = useNavigate();

  const [plate, setPlate] = useState("");
  const [manufactureId, setManufactureId] = useState("");
  const [model, setModel] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [availableAt, setAvailableAt] = useState("");
  const [transmission, setTransmission] = useState("");
  const [available, setAvailable] = useState("");
  const [typeId, setTypeId] = useState("");
  const [year, setYear] = useState("");
  const [options, setOptions] = useState([]);
  const [specs, setSpecs] = useState([]);
  const [image, setImage] = useState("");
  const [currentImage, setCurrentImage] = useState("");

  const { data : manufactures} = useQuery({
    queryKey: ["manufacture"],
    queryFn: () => getManufacture(),
    enabled: true,
  });

  const { data: types } = useQuery({
    queryKey: ["types"],
    queryFn: () => getTypes(),
    enabled: true,
  });

  const { mutate: create, isPending } = useMutation({
    mutationFn: (request) => createCar(request),
    onSuccess: () => {
      navigate({ to: "/admin/cars" });
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  if (isPending) {
    return (
      <Row className="mt-4">
        <h1>Loading...</h1>
      </Row>
    );
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const optionsArray =
      typeof options === "string"
        ? options.split(",").map((item) => item.trim())
        : options;
    const specsArray =
      typeof specs === "string"
        ? specs.split(",").map((item) => item.trim())
        : specs;

    const request = {
      plate,
      manufactureId,
      model,
      rentPerDay,
      capacity,
      description,
      availableAt,
      transmission,
      available,
      typeId,
      year,
      options: optionsArray,
      specs: specsArray,
      image,
    };

    create(request);
  };

  return (
    <div className="container-fluid content-container-add p-3">
      <h3>Add New Car</h3>
      <form
        encType="multipart/form-data"
        className="add-form p-3"
        onSubmit={onSubmit}
      >
        <div className="mb-3 row">
          <label htmlFor="inputPlate" className="col-sm-2 col-form-label">
            Plate
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPlate"
              required
              value={plate}
              onChange={(event) => {
                setPlate(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputManufacture" className="col-sm-2 col-form-label">
            Manufacture
          </label>
          <div className="col-sm-10">
            <select
              name="inputManufacture"
              id="inputManufacture"
              className="form-control form-select"
              onChange={(event) => setManufactureId(event.target.value)}
            >
              <option selected disabled>
                Select Manufacture
              </option>
              {manufactures?.data &&
                manufactures.data?.length > 0 &&
                manufactures.data.map((manufacture) => (
                  <option key={manufacture?.id} value={manufacture.id}>
                    {manufacture.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputModel" className="col-sm-2 col-form-label">
            Model
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPlate"
              required
              value={model}
              onChange={(event) => {
                setModel(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputRentPerDay" className="col-sm-2 col-form-label">
            Rent Per Day
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="inputRentPerDay"
              required
              value={rentPerDay}
              onChange={(event) => {
                setRentPerDay(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputCapacity" className="col-sm-2 col-form-label">
            Capacity
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="inputCapacity"
              required
              value={capacity}
              onChange={(event) => {
                setCapacity(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputDescription" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputDescription"
              required
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputAvailableAt" className="col-sm-2 col-form-label">
            Available At
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="inputAvailableAt"
              required
              value={availableAt}
              onChange={(event) => {
                setAvailableAt(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="inputTransmission"
            className="col-sm-2 col-form-label"
          >
            Transmission
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputTransmission"
              required
              value={transmission}
              onChange={(event) => {
                setTransmission(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputAvailable" className="col-sm-2 col-form-label">
            Available
          </label>
          <div className="col-sm-10">
            <select
              name="inputAvailable"
              id="inputAvailable"
              className="form-control form-select"
              value={available}
              onChange={(event) => setAvailable(event.target.value)}
            >
              <option selected disabled>
                Select Available
              </option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputType" className="col-sm-2 col-form-label">
            Type
          </label>
          <div className="col-sm-10">
            <select
              name="inputType"
              id="inputType"
              className="form-control form-select"
              onChange={(event) => setTypeId(event.target.value)}
            >
              <option selected disabled>
                Select Types
              </option>
              {types?.data &&
                types.data?.length > 0 &&
                types.data.map((type) => (
                  <option value={type.id} key={type?.id}>
                    {type.type}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputYear" className="col-sm-2 col-form-label">
            Year
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="inputYear"
              required
              value={year}
              onChange={(event) => {
                setYear(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputOptions" className="col-sm-2 col-form-label">
            Options
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputOptions"
              required
              value={options}
              onChange={(event) => {
                setOptions(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputSpecs" className="col-sm-2 col-form-label">
            Specs
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputSpecs"
              required
              value={specs}
              onChange={(event) => {
                setSpecs(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputImage" className="col-sm-2 col-form-label">
            Image
          </label>
          <div className="col-sm-10">
            <input
              type="file"
              className="form-control"
              id="inputImage"
              required
              onChange={(event) => {
                setImage(event.target.files[0]);
                setCurrentImage(URL.createObjectURL(event.target.files[0]));
              }}
              accept=".jpg,.png"
            />
            <div className="form-text">File size max. 2MB</div>
          </div>
        </div>
        <div className="mb-3 row">
          <img src={currentImage} alt="" className="w-50" />
        </div>
        <div className="action-btn">
          <Link to={"/admin/cars"} type="button" className="btn btn-danger">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
