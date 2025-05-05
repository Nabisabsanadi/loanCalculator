import './style.css'
const CalculateButton = ({ onClick }) => (
  <div className="mb-6 text-center btnCal">
    <button
      onClick={onClick}
      className="btn btn-primary btn-lg shadow-lg "
    >
      Calculate
    </button>
  </div>
);

export default CalculateButton;
