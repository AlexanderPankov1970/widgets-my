import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

//const key = `AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM`;

//Больше языков и описание google Translate - gg.191
const options = [
  { label: "Afrikaans", value: "af" },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Georgian",
    value: "ka",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Russian",
    value: "ru",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <hr />
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language:"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />

      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
