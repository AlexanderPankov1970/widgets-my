import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    //console.log(`Title clicked ${index}`);
    setActiveIndex(index);
  };

  const renderendItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion ">
      {renderendItems}
      {/* <h1>{activeIndex}</h1> */}
    </div>
  );
};
export default Accordion;

/*
const Accordion = ({ items }) => {
  console.log(items);
  const onTitleClick = (index) => {
    console.log(`Title clicked ${index}`);
  };
  const renderendItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(index)} className={`title active`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content active`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion ">{renderendItems}</div>;
};
export default Accordion;
*/
//ui relaxed divided list
