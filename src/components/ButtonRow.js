import AddInvoice from "./Buttons/AddInvoice"
import EditInvoice from "./Buttons/EditInvoice"
import DeleteInvoice from "./Buttons/DeleteInvoice"
import Predict from "./Buttons/Predict"
import ViewCorrespondence from "./Buttons/ViewCorrespondence"
import SearchInvoice from "./Buttons/SearchInvoice"

const ButtonRow = () => {
  return (
    <div>
      <Predict/>
      <ViewCorrespondence/>
      <AddInvoice />
      <EditInvoice/>
      <DeleteInvoice />
      <SearchInvoice />
    </div>
  );
};

export default ButtonRow;
