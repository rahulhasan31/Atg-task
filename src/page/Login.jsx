import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";

const LoginModal = ({ show, onHide }) => {
  const { loginUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Data:", formData);

    onHide();
    loginUser(formData.email, formData.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire("Login Success", "You clicked the button!", "success");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        const msg = e.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${msg}`,
        });
      });
  };

  return (
    <Modal className="" show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex ">
          <Form className="w-100" onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <p className="">Already have an account?</p>
            <Button
              className="mt-2 w-100 rounded-1"
              variant="primary"
              type="submit"
            >
              Sign In
            </Button>
          </Form>

          <img
            className="w-50 d-none d-lg-block"
            src="https://i.ibb.co/q7qfMPP/atg-illustration.png"
            alt=""
          />
        </div>
        <p className="mt-2 text-center border fw-medium  py-2 rounded-2">
          <BsFacebook className="me-2 ms-3 text-primary" /> Sign up with
          Facebook
        </p>
        <p className="mt-2 text-center  border fw-medium  py-2 rounded-2">
          <FcGoogle className="me-2 ms-3 text-primary " /> Sign up with Google
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
