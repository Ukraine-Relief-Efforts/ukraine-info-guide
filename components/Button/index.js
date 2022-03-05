const Button = ({ label, onSubmit }) => (
  <button
    className="p-2 mt-5 mb-10 uppercase rounded font-semibold text-white hover:text-yellow-ukraine"
    style={{ width: "120px", backgroundColor: "green" }}
    onClick={onSubmit}
  >
    {label}
  </button>
);

export default Button;
