import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import plusIc from "../../../assets/icon/fi_plus.png";
import "../../../styles/manufactures/manufacture.css";

import ManufactureItem from "../../../components/Manufacture/ManufactureItem";
import { getManufacture } from "../../../service/manufacture";
import Protected from "../../../components/Auth/Protected";

export const Route = createLazyFileRoute("/admin/manufactures/")({
    component: () => (
        <Protected roles={[1]}>
            <Manufactures />
        </Protected>
    ),
});

function Manufactures() {
    const { user, token } = useSelector((state) => state.auth);
    const [manufacture, setManufacture] = useState([]);

    const { data, isSuccess, isPending } = useQuery({
        queryKey: ["manufacture"],
        queryFn: () => getManufacture(),
        enabled: !!token,
    });

    useEffect(() => {
        if (isSuccess) {
            setManufacture(data.data);
        }
    }, [isSuccess, data]);

    if (!token) {
        return (
            <Row className="mt-4">
                <Col>
                    <h1 className="text-center">
                        Please login first to get manufacture data!
                    </h1>
                </Col>
            </Row>
        );
    }

    if (isPending) {
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
                    <h3>List Manufacture</h3>
                </div>
                {user && user?.role_id === 1 && (
                    <div className="col-2">
                        <button className="btn add-btn">
                            <img src={plusIc} alt="" />
                            <span>
                                <Link to={"/admin/manufactures/create"}>
                                    Add New Manufacture
                                </Link>
                            </span>
                        </button>
                    </div>
                )}
            </div>
            <div className="row mb-2">
                <div className="col d-flex p-0">
                    <button className="btn size-filter ps-3 pe-3 p-2 m-2">
                        All
                    </button>
                    <button className="btn size-filter ps-3 pe-3 p-2 m-2">
                        Small
                    </button>
                    <button className="btn size-filter ps-3 pe-3 p-2 m-2">
                        Medium
                    </button>
                    <button className="btn size-filter ps-3 pe-3 p-2 m-2">
                        Large
                    </button>
                </div>
            </div>
            {/* <div className="d-flex justify-content-start"> */}
            <div className="d-flex flex-wrap justify-content-start">
                {/* <div className="d-flex justify-content-start"> */}
                {manufacture.length === 0 ? (
                    <h1>Manufacture data is not found!</h1>
                ) : (
                    manufacture.map((manufacture) => (
                        <ManufactureItem
                            manufacture={manufacture}
                            key={manufacture?.id}
                        />
                    ))
                )}
                {/* </div> */}
            </div>
        </div>
    );
}
