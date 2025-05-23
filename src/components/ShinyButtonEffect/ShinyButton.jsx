import './ShinyButton.css';

const ShinyButton = ({ children, disabled = false, speed = 4, className = '', ...props }) => {
  const animationDuration = `${speed}s`;

  return (
    <button
      className={`shiny-button ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default ShinyButton;
