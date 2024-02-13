import { useNavigate } from "react-router-dom";
import useGeneralContext from "../../contexts/GeneralContext";

function TypeSwitch() {
  const { type, setType } = useGeneralContext();
  const navigate = useNavigate();

  const switchType = () => {
    if (type === "movies") {
      setType("series");
      navigate(`/`);
    } else {
      setType("movies");
      navigate(`/`);
    }
  };

  return (
    <>
      <label className="typeSwitch">
        <input type="checkbox" onChange={switchType} />
        <span className="typeSwitch__slider typeSwitch__slider--round"></span>
        <p
          className={
            type === "movies"
              ? "typeSwitch__p--movies visible"
              : "typeSwitch__p typeSwitch__p--movies"
          }
        >
          Movies
        </p>
        <p
          className={
            type === "movies"
              ? "typeSwitch__p typeSwitch__p--series"
              : "typeSwitch__p--series visible"
          }
        >
          Series
        </p>
      </label>
    </>
  );
}

export default TypeSwitch;
