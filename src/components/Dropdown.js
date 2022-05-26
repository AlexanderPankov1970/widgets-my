import React, { useState, useEffect, useRef } from "react";
//import { useState } from "react/cjs/react.production.min";

const Dropdown = ({ options, label, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      //   console.log(event.target);
      console.log(`BODY CLICKED`);
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          console.log(`ITEM CLICKED`);
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  //console.log(ref.current);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label style={{ color: selected.value }} className="label">
          {label}
        </label>
        <div
          onClick={() => {
            console.log(`DROPDOWN CLICKED`);
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
      <h2 style={{ color: selected.value }}>
        {label} {selected.value}
      </h2>
    </div>
  );
};

export default Dropdown;
