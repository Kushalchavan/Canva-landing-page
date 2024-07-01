import "./Button.css";

const Button = ({ children, ...props }) => {
  return <button className="main-button">{children}</button>;
};

export default Button;
