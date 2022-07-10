import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CodeIcon from "@mui/icons-material/Code";

export const SidebarData = [
  {
    title: "About Me",
    icon: <PersonIcon />,
    href: "#about",
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
];
