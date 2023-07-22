import { IoLocationOutline } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { BiErrorCircle } from "react-icons/bi";
const Info = () => {
  return (
    <div>
      <div className="card  border-0">
        <div className="input-group mb-3">
          <span className=" ">
            <IoLocationOutline />
          </span>
          <input
            type="text"
            className="form-control border-0 border-bottom "
            aria-label="|Enter your location"
            placeholder="|Enter your location"
          />
          <span className="">
            <MdClear />
          </span>
        </div>
      </div>

      <p className="d-flex p-2 fw-light fs-6">
        <span>
          <BiErrorCircle />
        </span>{" "}
        Your location will help us serve better and extend a personalised
        experience.
      </p>
    </div>
  );
};

export default Info;
