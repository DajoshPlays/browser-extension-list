import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import DevLens from "/images/logo-devlens.svg";

const dataItems = [
  {
    logo: "/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: false,
  },
  {
    logo: "/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

function List() {
  const [extensions, setExtensions] = useState(dataItems);
  const [filter, setFilter] = useState("all");

  const handleToggle = (name) => {
    const updated = extensions.map((item) =>
      item.name === name ? { ...item, isActive: !item.isActive } : item
    );
    setExtensions(updated);
  };
  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "all") return true;
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
  });

  const handleRemove = (name) => {
    const updated = extensions.filter((item) => item.name !== name);
    setExtensions(updated);
  };

  return (
    <div w-full max-w-6xl mx-auto px-4 sm:px-6>
      <div className=" w-[80vw] mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left">
          Extensions List
        </h2>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
          <button
            className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-sm sm:text-base font-medium cursor-pointer ${
              filter === "all"
                ? "bg-[#c43b2b] text-black"
                : "bg-[#2d3040] text-white"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-sm sm:text-base font-medium cursor-pointer ${
              filter === "active"
                ? "bg-[#c43b2b] text-black"
                : "bg-[#2d3040] text-white"
            }`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-sm sm:text-base font-medium cursor-pointer ${
              filter === "inactive"
                ? "bg-[#c43b2b] text-black"
                : "bg-[#2d3040] text-white"
            }`}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>
      {/* <div>
        <Mylist
          photoName="/images/logo-devlens.svg"
          name="DevLens"
          description="Quickly inspect page layouts and visualize element boundaries."
        />
      </div> */}
      <div className="w-[80vw] mx-auto my-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredExtensions.map((list) => (
          <Mylist
            listObj={list}
            key={list.name}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}

function Mylist({ listObj, onToggle, onRemove }) {
  const { name, description, logo, isActive } = listObj;
  return (
    <div className="flex flex-col gap-7 justify-between bg-[#2d3040] border border-[#ccc] p-4 rounded-lg  ">
      <div className="flex gap-4">
        <div className=" aspect-square overflow-hidden">
          <img
            className=" max-w-full h-auto block object-cover"
            src={logo}
            alt={name}
          />
        </div>
        <div>
          <h3 className=" font-bold mb-1.5 ">{name}</h3>
          <p className=" text-sm mb-auto">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onRemove(name)}
          className="bg-[transparent] border border-[#c7c7c7] rounded-full py-2 px-3.5 cursor-pointer"
        >
          Remove
        </button>
        <span onClick={() => onToggle(name)}>
          {isActive ? (
            <i className="fa-solid fa-toggle-on text-4xl cursor-pointer text-[#f26a5e]"></i>
          ) : (
            <i className="fa-solid fa-toggle-off text-4xl cursor-pointer text-[#c7c7c7]"></i>
          )}
        </span>
      </div>
    </div>
  );
}
export default List;
