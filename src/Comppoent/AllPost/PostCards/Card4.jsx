import { AiOutlineEye } from "react-icons/ai";
import { BiSolidShareAlt } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillCalendar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const Card4 = () => {
  return (
    <div className="card mb-4 ">
      <div className="card-body">
        <h5 className="card-title">💼️ Job</h5>
        <div className="d-flex justify-content-between">
          <p className="card-text fs-4 fw-bold">Software Developer</p>
          <p className="fs-3">
            <FiMoreHorizontal></FiMoreHorizontal>
          </p>
        </div>
        <div className="d-flex  align-content-center">
          <div className="d-flex align-content-center gap-2">
            <p>
              <AiFillCalendar></AiFillCalendar>
            </p>
            <p className=" fw-semibold">Innovaccer Analytics Private Ltd.</p>
          </div>
          <div className="d-flex ms-5 align-content-center gap-2">
            <p>
              <IoLocationOutline></IoLocationOutline>
            </p>
            <p className="fw-semibold">Noida, India</p>
          </div>
        </div>
        <div>
          <p className="w-100 border rounded-1 px-2 py-2 text-success text-center fw-medium ">
            Apply on Timesjobs
          </p>
        </div>
      </div>

      <div className=" border-0 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="https://i.ibb.co/hFKKL0p/Rectangle-3-4.png"
            className="img-thumbnail py-2 px-3 border-0"
            alt="..."
          />
          <h1 className="fs-5 fw-medium">Joseph Gray</h1>
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

export default Card4;
