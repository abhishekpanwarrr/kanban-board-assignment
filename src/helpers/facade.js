import { priorityMatch, renderCustomBox, statusMatch } from "./utils";

export const checkTicketsPriority = (priority) => {
  const priorityNames = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
  };
  return priorityNames[priority] || "No priority";
};

export const checkGrouping = (item, groupName) => {
  switch (item) {
    case "userId":
      return renderCustomBox(groupName?.[0]);
    case "priority":
      return priorityMatch(groupName);
    default:
      return statusMatch(groupName);
  }
};

export const getRandomActiveColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
