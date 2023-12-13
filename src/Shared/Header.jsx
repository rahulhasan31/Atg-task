import { useContext } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AuthContext } from "../Auth/AuthProvider";
import LoginModal from "../page/Login";
import Signup from "../page/Signup";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const { user } = useContext(AuthContext);
  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  const handleShowModalLogin = () => setShowModalLogin(true);
  const handleHideModalLogin = () => setShowModalLogin(false);
  return (
    <nav className="navbar bg-light d-lg-block d-none">
      <div className="container-fluid d-flex justify-content-lg-between">
        <dir className="">
          <a className="navbar-brand">
            <img
              className="me-5"
              src="https://i.ibb.co/vYdpV3v/whole-1.png"
              alt=""
            />
          </a>
          <small className=" bg-secondary bg-opacity-10 rounded-4 px-5 py-2 fw-semibold  ms-5">
            <AiOutlineSearch />
            Search for your favorite groups in ATG
          </small>
        </dir>
        <div className="d-flex gap-3 justify-content-center">
          {user?.uid ? (
            <>
              <p>{user?.email}</p>
            </>
          ) : (
            <>
              <p className=" text-white border border-0  bg-warning   px-2 p-1 rounded-1  align-content-center fs-6 fw-bold">
                <smail className="" onClick={handleShowModal}>
                  Sign Up
                </smail>
                <Signup show={showModal} onHide={handleHideModal} />
              </p>
              <p className=" text-white border border-0 bg-danger px-2 p-1 rounded-1  align-content-center fs-6 fw-bold">
                <smail onClick={handleShowModalLogin}> Sign In</smail>
                <LoginModal
                  show={showModalLogin}
                  onHide={handleHideModalLogin}
                />
              </p>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
