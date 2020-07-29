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

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
