import { useState } from "react";
import { useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";
import LoginModal from "./Login";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Signup = ({ show, onHide }) => {
  const { createUser } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleShowModal = () => {
    setShowModal(true);
    <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  };
  const handleHideModal = () => setShowModal(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
    createUser(formData.email, formData.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire("Register Success", "You clicked the button!", "success");
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
        <Modal.Title>Create Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex ">
          <Form className="w-100" onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

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
            <p className="">
              Already have an account?
              <Link>
                <p onClick={handleShowModal}>Login</p>

                <LoginModal show={showModal} onHide={handleHideModal} />
              </Link>
            </p>
            <Button className="mt-2 w-100" variant="primary" type="submit">
              Create Account
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
        <p className="mt-2 text-center border fw-medium  py-2 rounded-2">
          <FcGoogle className="me-2 ms-3 text-primary" /> Sign up with Google
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default Signup;
