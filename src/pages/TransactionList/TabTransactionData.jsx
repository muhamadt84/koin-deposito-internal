import React from "react"
import { InputText, Button } from "../../components"

function TabTransactionData(props) {
  return (
    <>
      <div className=" w-7/12 mt-5 space-y-5 px-2 pb-12">
        <InputText
          label="Funding Code"
        />
        <InputText
          label="User Name"
        />
        <InputText
          label="User Email"
        />
        <InputText
          label="Funding Amount"
        />
        <InputText
          label="Deposito Name"
        />
        <InputText
          label="Created At"
        />
        <InputText
          label="Status"
        />
        <InputText
          label="Billyet Status"
        />
        <InputText
          label="Approve At"
        />
        <InputText
          label="Maturity Date"
        />
        <InputText
          label="Rollover Status"
        />
        <InputText
          label="Setlement Status"
        />
        <InputText
          label="Repayment Counter"
        />
        <InputText
          label="Repayment Amount"
        />
        <div className=" flex justify-end space-x-3">
          <Button
            text="Back"
            type="center"
            onClick={props.onClick}
          />
          <Button
            variant="success"
            text="Settlement"
            type="center"
            onClick={() => alert("Soon!")}
          />
        </div>
      </div>
    </>
  )
}
export default TabTransactionData