import { BiSolidDownArrow } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AuthContext } from "../../Auth/AuthProvider";
import { useContext } from "react";
const AllPostSecton = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className=" col-xl d-flex w-auto justify-content-between mt-4 border-bottom ">
      <div className="d-flex gap-3">
        <p className="fw-bold ">All Posts(32)</p>
        <p className="fw-lighte d-lg-block d-none">Article</p>
        <p className="d-lg-block d-none">Event</p>
        <p className="d-lg-block d-none">Education</p>
        <p className="d-lg-block d-none">Job</p>
      </div>
      <div className="d-flex gap-3  ">
        <p className=" bg-secondary bg-opacity-25 rounded-1 px-3 py-1 fw-medium d-lg-block d-none">
          Write a Post
        </p>
        {user?.uid ? (
          <>
            <p
              onClick={logOut}
              className="  border px-3 py-1 rounded-1 fw-semibold d-lg-block d-none"
            >
              <IoExitOutline></IoExitOutline>Leave Group
            </p>
          </>
        ) : (
          <>
            <p className=" bg-primary text-white px-3 py-1 rounded-1 fw-semibold d-lg-block d-none">
              <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>Join Group
            </p>
          </>
        )}
        <p className=" bg-secondary bg-opacity-25 px-3 py-1 rounded-1 fw-semibold d-lg-none  ">
          Filter: All <BiSolidDownArrow></BiSolidDownArrow>
        </p>
      </div>
    </div>
  );
};

export default AllPostSecton;
