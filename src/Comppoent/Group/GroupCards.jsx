import { Link } from "react-router-dom";

const GroupCards = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-content-center gap-2">
          <img src="https://i.ibb.co/P6jfdFf/Rectangle-6.png" alt="" />
          <p className="fs-5 fw-medium">Leisure</p>
        </div>
        <p className=" bg-secondary bg-opacity-25 px-3 py-1 rounded-4 fw-medium">
          Follow
        </p>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex align-content-center gap-2">
          <img src="https://i.ibb.co/HrxdsKM/Rectangle-6-1.png" alt="" />
          <p className="fs-5 fw-medium">Activism</p>
        </div>
        <p className=" bg-secondary bg-opacity-25 px-3 py-1 rounded-4 fw-medium">
          Follow
        </p>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex align-content-center gap-2">
          <img src="https://i.ibb.co/7z7xQWg/Rectangle-6-2.png" alt="" />
          <p className="fs-5 fw-medium">MBA</p>
        </div>
        <p className=" bg-secondary bg-opacity-25 px-3 py-1 rounded-4 fw-medium">
          Follow
        </p>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex align-content-center gap-2">
          <img src="https://i.ibb.co/3fnv3Lc/Rectangle-6-3.png" alt="" />
          <p className="fs-5 fw-medium">Philosophy</p>
        </div>
        <p className=" bg-secondary bg-opacity-25 px-3 py-1 rounded-4 fw-medium">
          Follow
        </p>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <div className="d-flex align-content-center gap-2">
          <img
            className="d-none"
            src="https://i.ibb.co/3fnv3Lc/Rectangle-6-3.png"
            alt=""
          />
          <p className="d-none fs-5 fw-medium">Philosophy</p>
        </div>
        <Link className="  px-3 py-1  fw-medium">See More...</Link>
      </div>
    </>
  );
};

export default GroupCards;
