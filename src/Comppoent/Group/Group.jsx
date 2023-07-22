import "./Group.css";
import { AiFillLike } from "react-icons/ai";
import GroupCards from "./GroupCards";
import { AuthContext } from "../../Auth/AuthProvider";
import { useContext } from "react";
const Group = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user?.uid ? (
        <>
          <p className=" fs-5 grp ">
            <AiFillLike className="me-2" />
            {""}
            RECOMMENDED GROUPS
          </p>

          <GroupCards />
        </>
      ) : (
        <>{""}</>
      )}
    </div>
  );
};

export default Group;
