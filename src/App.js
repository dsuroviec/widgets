import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "what is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "what is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "what is React?",
    content: "React is a front end javascript framework",
  },
];

const options = [
  {
    label: "a color of red",
    value: "red",
  },

  {
    label: "a color of green",
    value: "green",
  },

  {
    label: "a shade of blue",
    value: "blue",
  },
];

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

const ShowDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default () => {
  return <div>{showAccordion()}</div>;
};
