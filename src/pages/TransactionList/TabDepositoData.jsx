import React from "react"
import { InputText, Button } from "../../components"

function TabDepositoData(props) {
  return (
    <>
      <div className=" w-7/12 mt-5 space-y-5 px-2 pb-12">
        <InputText
          label="Deposito Name"
        />
        <InputText
          label="Rate"
        />
        <InputText
          label="Tenure"
        />
        <InputText
          label="Breakability"
        />
        <InputText
          label="Minimum Amount"
        />
        <InputText
          label="Maximum Amount"
        />
        <InputText
          label="Interest Payment Type"
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
export default TabDepositoData