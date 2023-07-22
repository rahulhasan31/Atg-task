import { AiOutlineEye } from "react-icons/ai";
import { BiSolidShareAlt } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillCalendar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";

const Card3 = () => {
  const [showEditOption, setShowEditOption] = useState(false);

  const handleButtonClick = () => {
    setShowEditOption((prevShowEditOption) => !prevShowEditOption);
  };
  return (
    <div className="card mb-4 ">
      <img
        src="https://i.ibb.co/343sXgV/Rectangle-5-2.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">🗓️ Meetup</h5>
        <div className="d-flex justify-content-between">
          <p className="card-text fs-4 fw-bold">
            Finance & Investment Elite Social Mixer @Lujiazui
          </p>
          <p>
            <div>
              <p
                className="fs-3 bg-secondary bg-opacity-50   px-1 rounded-2"
                onClick={handleButtonClick}
              >
                {showEditOption ? (
                  <>
                    {" "}
                    <button
                      type="button"
                      className="btn-close border-0"
                      aria-label="Close"
                    ></button>
                  </>
                ) : (
                  <>
                    <FiMoreHorizontal className="border-0"></FiMoreHorizontal>
                  </>
                )}
              </p>
              {showEditOption && (
                <ui className="border-1">
                  <div className="">
                    <div id="list-example" className="list-group">
                      <a
                        className="list-group-item list-group-item-action"
                        href="#list-item-1"
                      >
                        Edit
                      </a>
                      <a
                        className="list-group-item list-group-item-action"
                        href="#list-item-2"
                      >
                        Report
                      </a>
                      <a
                        className="list-group-item list-group-item-action"
                        href="#list-item-3"
                      >
                        {" "}
                        Option 2
                      </a>
                    </div>
                  </div>
                </ui>
              )}
            </div>
          </p>
        </div>
        <div className="d-flex  align-content-center">
          <div className="d-flex align-content-center gap-2">
            <p>
              <AiFillCalendar></AiFillCalendar>
            </p>
            <p className=" fw-semibold">Fri, 12 Oct, 2018</p>
          </div>
          <div className="d-flex ms-5 align-content-center gap-2">
            <p>
              <IoLocationOutline></IoLocationOutline>
            </p>
            <p className="fw-semibold">Ahmedabad, India</p>
          </div>
        </div>
        <div>
          <p className="w-100 border rounded-1 px-2 py-2 text-danger  text-center fw-medium">
            Visit Website
          </p>
        </div>
      </div>

      <div className=" border-0 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="https://i.ibb.co/9gzpYDG/Rectangle-3-3.png"
            className="img-thumbnail py-2 px-3 border-0"
            alt="..."
          />
          <h1 className="fs-5 fw-medium">Sarah West</h1>
        </div>
        <div className="d-flex align-items-center gap-2 me-3">
          <p>
            <AiOutlineEye></AiOutlineEye>
          </p>
          <p className="me-4">1.4k views</p>
          <p className="bg-secondary bg-opacity-25 px-2  py-1 rounded-1">
            <BiSolidShareAlt></BiSolidShareAlt>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
