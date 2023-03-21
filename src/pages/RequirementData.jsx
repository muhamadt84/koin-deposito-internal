import React, { useEffect, useState } from "react"
import { Button, Typography, InputText } from "../components"
import { ModalForm } from "../components/Modal"
import { dataRequirementData } from "../data/DummyTables"
import { requirementData } from "../utils/FieldRow"
import Tables from "../utils/Tables"
import Dashboard from "./Dashboard"


function RequirementData() {
  const [modalCreate, setModalCreate] = useState(false)
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
          data: dataRequirementData.map((row, index) => {
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
      <>
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

      </>
    )
  }

  return (
    <Dashboard>
      <Typography
        text="Requirement Data"
        variant="title page"
      />
      <Button
        variant="primary"
        text="create"
        type="center"
        add="mt-5"
        onClick={() => setModalCreate(true)}
      />
      <Tables
        data={state.data}
        fieldRow={requirementData}
      />

      {modalCreate ? (
        <ModalForm
          title="Create Data"
          isCancel={true}
          onCancel={() => setModalCreate(false)}
          isSubmit={true}
          isSubmitText="Create"
          onSubmit={
            () => {
              alert("Soon!")
            }
          }
        >
          <InputText
            label="requirement name"
            type="text"
          />
          <InputText
            label="requirement type"
            type="text"
          />
        </ModalForm>
      ) : null}
    </Dashboard>
  )
}
export default RequirementData