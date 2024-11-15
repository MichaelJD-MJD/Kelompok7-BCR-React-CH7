import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { getDetailManufacture } from "../../../service/manufacture";
import { useQuery } from "@tanstack/react-query";
import Protected from "../../../components/Auth/Protected";

export const Route = createLazyFileRoute("/admin/manufactures/$id")({
    component: () => (
      <Protected roles={[1]}>
        <ManufactureDetail />
      </Protected>
    ),
});

function ManufactureDetail() {
    const { id } = Route.useParams();

    const [manufacture, setManufacture] = useState(null);

    const { data, isSuccess, isPending, isError } = useQuery({
        queryKey: ["manufacture", id],
        queryFn: () => getDetailManufacture(id),
        enabled: !!id,
    });

    useEffect(() => {
        if (isSuccess) {
            setManufacture(data.data);
        }
    }, [isSuccess, data]);

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
                    <h1 className="text-center">Manufacture is not found</h1>
                </Col>
            </Row>
        );
    }

    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <Card>
                    <Card.Header
                        className="text-left"
                        style={{ fontWeight: "700", fontSize: "2rem" }}
                    >
                        Detail Manufacture
                    </Card.Header>
                    <Card.Img
                        variant="top"
                        className="p-5"
                        src={manufacture?.logo}
                    />
                    <Card.Body>
                        <Card.Title
                            style={{ fontWeight: "500", fontSize: "1.8rem" }}
                        >
                            Manufacture : {manufacture?.name}
                        </Card.Title>
                        <Card.Text>
                            Description : {manufacture?.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text>
                            Establishment : {manufacture?.establishment}
                        </Card.Text>
                        <Card.Text>Country : {manufacture?.country}</Card.Text>
                        <Card.Text>Office : {manufacture?.office}</Card.Text>
                        <Button
                            variant="outline-dark"
                            className="d-flex align-items-center"
                            style={{ fontWeight: 700, width: "4.063rem" }}
                            as={Link}
                            to="/admin/manufactures"
                        >
                            Back
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}></Col>
        </Row>
    );
}
