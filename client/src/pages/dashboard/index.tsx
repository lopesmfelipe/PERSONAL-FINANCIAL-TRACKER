import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";

export const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="dashboard-container">
      <h1> Welcome {user?.firstName}! Here are Your finances: </h1>
      <FinancialRecordForm /> 
      <FinancialRecordList />
    </div>
  );
};
