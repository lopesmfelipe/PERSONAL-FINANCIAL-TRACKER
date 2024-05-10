import { FinancialRecord, useFinancialRecords } from "../../contexts/financial-record-context";
import { useTable, Column, CellProps, Row } from "react-table";

export const FinancialRecordList = () => {
  const { records } = useFinancialRecords();

  const columns : Array<Column<FinancialRecord>> = useMemo()

  const {getTableProps ,getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data: records })
  return (
    <div className="table-container">
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map(hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th {...column.getHeaderProps()}> {column.render("Header")} </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody {...getTableBodyProps}>
          {rows.map((row, idx) => {
            prepareRow(row);
            return <tr {...row.getRowProps()}> {row.cells.map(cell) => (
              <td {...ClerkLoaded.getCellProps()}> {cell.render("Cell")} </td>
            )}</tr>
          })}
          </tbody>      
      </table>
    </div>
  );
};
