import { createLazyFileRoute, Link } from "@tanstack/react-router";
import plusIc from "../../../assets/icon/fi_plus.png";
import "../../../styles/list-car.css";
import { getCars } from "../../../service/car/car.service.index";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CarItem from "../../../components/cars_components/CarItem";
import { Col, Row } from "react-bootstrap";
import Protected from "../../../components/Auth/Protected";
import { useQuery } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/admin/cars/")({
  component: () => (
    <Protected roles={[1]}>
      <Cars />
    </Protected>
  ),
});

function Cars() {
  const { user, token } = useSelector((state) => state.auth);

  const [cars, setCars] = useState([]);

  // use react query to fetch API
  const { data, isSuccess, isPending } = useQuery({
    queryKey: ["cars"],
    queryFn: () => getCars(),
    enabled: !!token,
  });

  useEffect(() => {
    if(isSuccess) {
      setCars(data);
    }
  }, [data, isSuccess])

  if (!token) {
    return (
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">Please login first to get car data!</h1>
        </Col>
      </Row>
    );
  }

  if(isPending) {
    return (
      <Row className="mt-4">
        <h1>Loading...</h1>
      </Row>
    );
  }

  return (
    <div className="container-fluid content-container p-3">
      <div className="row">
        <div className="col-10">
          <h3>List Car</h3>
        </div>
        <div className="col-2">
          {user && user?.role_id === 1 && (
            <Link to={"/admin/cars/create"} className="btn add-btn">
              <img src={plusIc} alt="" />
              <span>
                Add New Car
              </span>
            </Link>
          )}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col d-flex p-0">
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">All</button>
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">Small</button>
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">Medium</button>
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">Large</button>
        </div>
      </div>
      <div className="row">
        {cars.length === 0 ? (
          <h1>Car data is not found!</h1>
        ) : (
          cars.map((car) => <CarItem car={car} key={car?.id} />)
        )}
      </div>
    </div>
  );
}
