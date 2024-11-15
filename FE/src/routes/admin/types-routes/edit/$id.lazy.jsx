import * as React from "react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getDetailType, updateType } from "../../../../service/types-service";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import Protected from "../../../../components/Auth/Protected";

export const Route = createLazyFileRoute("/admin/types-routes/edit/$id")({
  component: () => (
    <Protected roles={[1]}>
      <EditType />
    </Protected>
  ),
});

function EditType() {
  const { id } = Route.useParams();
  const navigate = useNavigate();

  // State for form data
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  // Fetch data using useQuery
  const { data, isLoading, isError } = useQuery({
    queryKey: ["typeDetails", id],
    queryFn: () => getDetailType(id),
    enabled: !!id, // Only fetch if id is available
    onSuccess: (result) => {
      if (result?.success) {
        setType(result.data?.type); // Set state when data is fetched
        setDescription(result.data?.description); // Set state when data is fetched
      }
    },
    onError: () => {
      navigate({ to: "/types" });
    },
  });

  // Handle mutation for updating data
  const mutation = useMutation({
    mutationFn: (request) => updateType(id, request),
    onSuccess: (result) => {
      if (result?.success) {
        navigate({ to: `/admin/types-routes/types` });
        return;
      }
      toast.error(result?.message);
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong.");
    },
  });

  // Submit handler for the form
  const onSubmit = async (event) => {
    event.preventDefault();
    const request = { type, description };
    mutation.mutate(request); // Trigger mutation for update
  };

  // Loading and error handling
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data?.success) {
    return <div>Type not found, redirecting...</div>;
  }

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header className="text-center">Edit Types</Card.Header>
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
              <Form.Group as={Row} className="mb-3" controlId="description">
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
                  {mutation.isLoading ? "Updating..." : "Edit Type"}
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
