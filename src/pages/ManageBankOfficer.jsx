import React, { useEffect, useState } from "react"
import { Button, Typography, InputText, InputSelect } from "../components"
import { ModalForm } from "../components/Modal"
import { dataBankOfficer } from "../data/DummyTables"
import { bankOfficer } from "../utils/FieldRow"
import Tables from "../utils/Tables"
import Dashboard from "./Dashboard"

function ManageBankOfficer() {
  const [modalAdd, setModalAdd] = useState(false)
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    let mounted = true
    if (mounted) {
      setState(prevState => {
        return {
          ...prevState,
          data: dataBankOfficer.map((row, index) => {
            return {
              ...row,
              action: actionButton(row, index)
            }
          })
        }
      })
    }

    return () => mounted === false
  }, [])

  const actionButton = (item, idx) => {
    // console.log(item, idx)
    return (
      <div className=" flex">
        {item.status !== 'Inactive' ? (
          <Button
            variant="danger"
            text="Terminate"
            transform="upper"
            type="center"
            // onClick={() => alert(item.no + '. Terminate soon!')}
            onClick={() => alert("Soon!")}
          />
        )
          : (
            <Button
              variant="success"
              text="Activate"
              transform="upper"
              type="center"
              // onClick={() => alert(item.no + '. Activate soon!')}
              onClick={() => alert("Soon!")}
            />
          )}

        <Button
          variant="primary"
          text="Edit"
          transform="upper"
          add="ml-3"
          // onClick={() => alert(item.no + '. Edit soon!')}
          onClick={() => setModalAdd(true)}
        />
      </div>
    )
  }

  return (
    <Dashboard>
      <Typography
        text="Bank Officer"
        variant="title page"
      />

      <Button
        variant="primary"
        text="add bank officer"
        add="mt-5"
        onClick={() => setModalAdd(true)}
      />
      <Tables
        data={state.data}
        fieldRow={bankOfficer}
        isSearch={true}
        variant="full"
      />

      {modalAdd ? (
        <ModalForm
          title="Add Bank Officer"
          isCancel={true}
          onCancel={() => setModalAdd(false)}
          isSubmit={true}
          onSubmit={
            () => {
              alert("Soon!")
            }
          }
        >
          <InputText
            label="officer name"
            type="text"
          />
          <InputText
            label="Email"
            type="email"
          />
          <InputSelect
            label="Role"
          />
          <InputText
            label="Password"
            type="password"
          />
          <InputText
            label="Confirm New Password"
            type="password"
          />
        </ModalForm>
      ) : null}
    </Dashboard>
  )
}
export default ManageBankOfficer