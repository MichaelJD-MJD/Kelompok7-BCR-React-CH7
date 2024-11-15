import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createType } from "../../../service/types-service";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import Protected from "../../../components/Auth/Protected";

export const Route = createLazyFileRoute("/admin/types-routes/create")({
  component: () => (
    <Protected roles={[1]}>
      <CreateType />
    </Protected>
  ),
});

function CreateType() {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  // Use useMutation with mutationFn
  const mutation = useMutation({
    mutationFn: createType, // Pass the function that returns a promise
    onSuccess: (data) => {
      if (data?.success) {
        toast.success("Type created successfully!");
        navigate({ to: "/admin/types-routes/types" });
      } else {
        toast.error(data?.message || "Something went wrong.");
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Error occurred.");
    },
  });

  const onSubmit = (event) => {
    event.preventDefault();

    const request = {
      type,
      description,
    };

    mutation.mutate(request);
  };

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header
            className="text-left"
            style={{ fontWeight: "700", fontSize: "32px" }}
          >
            Add New Type
          </Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="type">
                <Form.Label column sm={3}>
                  Type
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Type"
                    required
                    value={type}
                    onChange={(event) => {
                      setType(event.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="Description">
                <Form.Label column sm={3}>
                  Description
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    required
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={mutation.isLoading}
                >
                  {mutation.isLoading ? "Creating..." : "Create Type"}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
}
