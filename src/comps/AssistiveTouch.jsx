import { useNavigate } from "react-router-dom";

const AssistiveTouch = () => {
  const location = useNavigate();

  return (
    <div className="fab-wrapper">
      <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
      <label className="fab" htmlFor="fabCheckbox">
        <span className="fab-dots fab-dots-1"></span>
        <span className="fab-dots fab-dots-2"></span>
        <span className="fab-dots fab-dots-3"></span>
      </label>
      <div className="fab-wheel">
        <a
          className="fab-action fab-action-1"
          onClick={() => {
            location("/");
          }}
        >
          <i className="bi bi-house-door-fill"></i>
        </a>
        <a className="fab-action fab-action-2">
          <i className="fas fa-book"></i>
        </a>
        <a className="fab-action fab-action-3">
          <i className="fas fa-address-book"></i>
        </a>
      </div>
    </div>
  );
};

export default AssistiveTouch;
