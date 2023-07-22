import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../../Auth/AuthProvider";
import LoginModal from "../../page/Login";

import "./Branner.css";

const Branner = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const handleShowModalLogin = () => setShowModalLogin(true);
  const handleHideModalLogin = () => setShowModalLogin(false);
  return (
    <>
      {/* <div className="card text-bg-dark   rounded-0 border-0">
        <img
          src="https://i.ibb.co/bdRmt95/Rectangle-2.png"
          className="card-img  "
          alt="..."
        />
        <div className="card-img-overlay    css-cls">
          <div className=" mt-lg-5 banner">
            <h5 className="mx-auto fs-1 ms-lg-5 mx-auto">
              Computer Engineering{" "}
            </h5>
            <p className="  ms-lg-5">
              140,324 computer engineering follow this
            </p>
          </div>
        </div>
      </div> */}
      <div className="banner-container">
        <img
          className="banner-image"
          src="https://i.ibb.co/bdRmt95/Rectangle-2.png" // Replace with the URL or path of your background image
          alt="Banner Background"
        />
        <div className="banner-overlay"></div>
        <Container className="banner-content">
          <div className="d-flex justify-content-between align-content-center">
            <h1 className="banner-text ">Computer Engineering</h1> <br />
            {user?.uid ? (
              <>
                <p
                  onClick={logOut}
                  className="  border px-3 py-1 rounded-1 fw-bold d-block d-lg-none mt-2"
                >
                  Leave Group
                </p>
              </>
            ) : (
              <>
                <p
                  onClick={handleShowModalLogin}
                  className="  border px-3 py-1 rounded-1 fw-bold d-block d-lg-none mt-2"
                >
                  Join Group
                </p>
                <LoginModal
                  show={showModalLogin}
                  onHide={handleHideModalLogin}
                />
              </>
            )}
          </div>
          <p className="d-flex">142,765 Computer Engineers follow this</p>
        </Container>
      </div>
    </>
  );
};

export default Branner;
