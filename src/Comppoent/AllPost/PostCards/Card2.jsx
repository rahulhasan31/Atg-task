import { AiOutlineEye } from "react-icons/ai";
import { BiSolidShareAlt } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
const Card2 = () => {
  return (
    <div className="card mb-4 ">
      <img
        src="https://i.ibb.co/tJ0f9PG/Rectangle-5-1.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">🔬️ Education</h5>
        <div className="d-flex">
          <p className="card-text fs-3 fw-bold">
            Tax Benefits for Investment under National Pension Scheme launched
            by Government
          </p>
          <p className="fs-3">
            <FiMoreHorizontal></FiMoreHorizontal>
          </p>
        </div>
        <p className=" fs-5 fw-light">
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </p>
      </div>

      <div className=" border-0 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="https://i.ibb.co/tQ0C9ny/Rectangle-3-1.png"
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

export default Card2;
