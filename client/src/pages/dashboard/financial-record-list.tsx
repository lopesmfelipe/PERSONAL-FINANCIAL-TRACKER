import { useFinancialRecords } from "../../contexts/financial-record-context";

export const FinancialRecordList = () => {
  const { records } = useFinancialRecords();

  return (
    <div className="table-container">
      <table>
        <thead></thead>
        <tbody></tbody>      
      </table>
    </div>
  );
};
