import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import DataObjectIcon from "@mui/icons-material/DataObject";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CodeIcon from "@mui/icons-material/Code";
import EngineeringIcon from "@mui/icons-material/Engineering";

export const SidebarData = [
  {
    title: "About Me",
    icon: <PersonIcon />,
    href: "#about",
  },
  {
    title: "Programming Languages",
    icon: <DataObjectIcon />,
    href: "#programming",
  },
  {
    title: "Project",
    icon: <AccountTreeIcon />,
    href: "#project",
  },
  {
    title: "Other Project",
    icon: <CodeIcon />,
    href: "#other",
  },
  {
    title: "Experiences",
    icon: <EngineeringIcon />,
    href: "#experiences",
  },
];
