const InputField = ({ label, type, value, onChange, min, step, error }) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        min={min}
        step={step}
        className={`form-control ${error ? 'is-invalid' : ''}`}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
  
  export default InputField;
  