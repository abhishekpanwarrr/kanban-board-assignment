import { TbClockHour4 } from "react-icons/tb";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { LuCheckCircle2 } from "react-icons/lu";
import { PiCellSignalMediumFill } from "react-icons/pi";
import { PiCellSignalHighBold } from "react-icons/pi";
import { PiHourglassHighFill } from "react-icons/pi";
import { RxBorderDashed } from "react-icons/rx";

export const renderCustomBox = (groupNameChar) => {
  return (
    <div className="custom-box" style={{ backgroundColor: "#fff" }}>
      {groupNameChar}
    </div>
  );
};

export const statusMatch = (item) => {
  switch (item) {
    case "In progress":
      return <TbClockHour4 />;
    case "Todo":
      return <MdOutlineRadioButtonUnchecked />;
    default:
      return <LuCheckCircle2 />;
  }
};

export const priorityMatch = (groupName) => {
  switch (groupName) {
    case "Low":
      return <TbClockHour4 />;
    case "Medium":
      return <PiCellSignalMediumFill />;
    case "High":
      return <PiCellSignalHighBold />;
    case "Urgent":
      return <PiHourglassHighFill />;
    default:
      return <RxBorderDashed />;
  }
};
