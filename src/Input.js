import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, ...props }, ref) {
  // Accepted the forwarded ref and "connected" it to the <input> element
  return (
    <p className="control">
      <label>{label}</label>
      {/* "Forwarded" the remaining props to <input> element
      Why do this instead of just forwarding the "type" prop?  
      */}
      <input ref={ref} {...props} />
    </p>
  );
});

export default Input;
