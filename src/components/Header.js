//import react from "react";
import Linc from "./Link";
//VAR 2
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Linc href="/" className="item">
        Accordion
      </Linc>
      <Linc href="/list" className="item">
        Search
      </Linc>
      <Linc href="/dropdown" className="item">
        Dropdown
      </Linc>
      <Linc href="/translate" className="item">
        Translate
      </Linc>
    </div>
  );
};

//VAR 1
// const Header = () => {
//   return (
//     <div className="ui secondary pointing menu">
//       <a href="/" className="item">
//         Accordion
//       </a>
//       <a href="/list" className="item">
//         Search
//       </a>
//       <a href="/dropdown" className="item">
//         Dropdown
//       </a>
//       <a href="/translate" className="item">
//         Translate
//       </a>
//     </div>
//   );
// };

export default Header;
