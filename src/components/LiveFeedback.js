import { useField } from "formik";

import React from "react";


const LiveFeedback = ({ label, helpText, ...props }) => {
    const [field, meta] = useField(props);
  
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const handleChange = () => handleChange();
    const showFeedback =
      (!!didFocus && field.value.trim().length > 2) || meta.touched;
    
    return (
      <div
        className={`form-control ${
          showFeedback ? (meta.error ? "invalid" : "valid") : ""
        }`}
      >
        <div className="flex items-center justify-between flex-row text-lg font-semibold my-3">
          <label htmlFor={props.id}>{label}</label>
          <div
            className="text-sm font-light text-gray-600 "
            id={`${props.id}-help`}
            tabIndex="-1"
          >
            <div className="">
                <div className="min-w-fit whitespace-nowrap">
                  {helpText}
                </div>
            </div>
          </div>
        </div>
        {field.name !== 'course' ? 
          <div>
            <input
              className="border border-gray-200 px-2 rounded-md w-full h-10 "
              {...props}
              {...field}
              aria-describedby={`${props.id}-feedback ${props.id}-help`}
              onFocus={handleFocus}
            />
          </div> : <div>
            <select
              className="border border-gray-200 px-2 rounded-md w-full h-10 "
              {...props}
              {...field}
              aria-describedby={`${props.id}-feedback ${props.id}-help`}
              onFocus={handleFocus}
            ><option value={null}>-- Choose a course --</option>
                <option value={'frontend'}>Frontend</option>
            <option value={'graphic'}> Design</option></select>
          </div>}
        <div className="h-6 pt-1 ">
          {" "}
          {showFeedback ? (
            <div
              id={`${props.id}-feedback`}
              aria-live="polite"
              className="feedback text-sm pl-1 text-orange-600"
            >
              {meta.error ? meta.error : "✓"}
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  export default LiveFeedback;