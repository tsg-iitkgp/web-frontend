import Staff from "../../pages/Contacts/Staff";
import CurrentOfficeBearers from "../../pages/Contacts/CurrentOfficeBearers";
import PreviousOfficeBearers from "../../pages/Contacts/PreviousOfficeBearers";

export default function RenderContactsFromDropdown({ option }) {
  return (
    <>
      {option === "CURRENT OFFICE BEARERS" && <CurrentOfficeBearers year="2025-2026"/>}
      {option === "PREVIOUS OFFICE BEARERS" && <PreviousOfficeBearers />}
      {option === "STAFF" && <Staff />}
    </>
  );
}
