import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: `What is React?`,
    content: `React is a front end javascript frameworc`,
  },
  {
    title: `Why use React?`,
    content: `React is a favorite JS library among engineers`,
  },
  {
    title: `How do you use React?`,
    content: `We use React by creating components`,
  },
];

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "The Color Blue", value: "blue" },
  { label: "The Color Gray", value: "gray" },
  { label: "The Color Yellow", value: "yellow" },
];
/*
const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};
const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};
*/
/*
const showComponent = (route, component) => {
  return window.location.pathname === route ? component : null;
};
*/

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()} */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

      <br />
    </div>
  );
};

export default App;
/////////////////////////////////////////////

// class App extends React.Component {
//   render() {
//     return <h1>Widgets App</h1>;
//   }
// }
