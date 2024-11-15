import { createLazyFileRoute, useNavigate, Link } from "@tanstack/react-router";
import Protected from "../../../../components/Auth/Protected";
import {
    getDetailManufacture,
    updateManufacture,
} from "../../../../service/manufacture";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import "../../../../styles/manufactures/manufacture.css";
import { useMutation, useQuery } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/admin/manufactures/edit/$id")({
    component: () => (
        <Protected roles={[1]}>
            <EditManufacture />
        </Protected>
    ),
});

function EditManufacture() {
    const { id } = Route.useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [establishment, setEstablishment] = useState("");
    const [country, setCountry] = useState("");
    const [office, setOffice] = useState("");
    const [logo, setLogo] = useState(undefined);
    const [currentLogo, setCurrentLogo] = useState(undefined);

    const { data, isSuccess, isError } = useQuery({
        queryKey: ["manufacture", id],
        queryFn: () => getDetailManufacture(id),
        enabled: !!id,
    });

    const { mutate: updateManufactureMutation, isPending:isUpdateProcessing } = useMutation({
        mutationFn: (request) => updateManufacture(id, request),
        onSuccess: () => {
            navigate({ to: "/admin/manufactures" });
        },
        onError: (error) => {
            toast.error(error?.message);
        },
    });

    useEffect(() => {
        if (isSuccess) {
            setName(data.data?.name);
            setDescription(data.data?.description);
            setEstablishment(data.data?.establishment);
            setCountry(data.data?.country);
            setOffice(data.data?.office);
            setCurrentLogo(data.data?.logo);
        }
    }, [isSuccess, data]);

    if (isError) {
        navigate({ to: "/manufactures" });
        return;
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const request = {
            name,
            description,
            establishment,
            country,
            office,
            logo,
        };
        updateManufactureMutation(request);
    };

    return (
        <div className="container-fluid content-container p-3">
            <Button
                variant="outline-dark"
                className="d-flex align-items-center"
                style={{ fontWeight: 700, width: "65px" }}
                as={Link}
                to="/manufactures"
            >
                Back
            </Button>
            <Row className="mt-5">
                <Col className="offset-md-3">
                    <Card>
                        <Card.Header className="text-center">
                            Create Manufacture
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="name"
                                >
                                    <Form.Label column sm={3}>
                                        Name
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="Manufacture Name"
                                            required
                                            value={name}
                                            onChange={(event) => {
                                                setName(event.target.value);
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="description"
                                >
                                    <Form.Label column sm={3}>
                                        Description
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Description"
                                            required
                                            value={description}
                                            onChange={(event) => {
                                                setDescription(
                                                    event.target.value
                                                );
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="establishment"
                                >
                                    <Form.Label column sm={3}>
                                        Establishment
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="number"
                                            placeholder="Establishment"
                                            required
                                            value={establishment}
                                            onChange={(event) => {
                                                setEstablishment(
                                                    event.target.value
                                                );
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="country"
                                >
                                    <Form.Label column sm={3}>
                                        Country
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="country"
                                            required
                                            value={country}
                                            onChange={(event) => {
                                                setCountry(event.target.value);
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="office"
                                >
                                    <Form.Label column sm={3}>
                                        Office
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="office"
                                            required
                                            value={office}
                                            onChange={(event) => {
                                                setOffice(event.target.value);
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="logo"
                                >
                                    <Form.Label column sm={3}>
                                        Logo
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="file"
                                            placeholder="Choose File"
                                            required
                                            onChange={(event) => {
                                                setLogo(event.target.files[0]);
                                                setCurrentLogo(
                                                    URL.createObjectURL(
                                                        event.target.files[0]
                                                    )
                                                );
                                            }}
                                            accept=".jpg,.png"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="logo"
                                >
                                    <Form.Label column sm={3}></Form.Label>
                                    <Col sm={9}>
                                        <Image src={currentLogo} fluid />
                                    </Col>
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button type="submit" disabled={isUpdateProcessing} variant="primary">
                                        Edit Manufacture
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}></Col>
            </Row>
        </div>
    );
}
