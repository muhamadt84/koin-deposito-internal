import React, { useState, useEffect } from "react"
import { Typography, Button, InputText } from "../components"
import { ModalForm } from "../components/Modal"
import { dataDepositoEditRequest } from "../data/DummyTables"
import { depositoEditRequest } from "../utils/FieldRow"
import Tables from "../utils/Tables"
import Dashboard from "./Dashboard"


function DepositoEditRequest() {
  const [modalDetail, setModalDetail] = useState(false)
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
          data: dataDepositoEditRequest.map((row, index) => {
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
      <Button
        variant="primary"
        text="Detail"
        transform="upper"
        type="center"
        add="ml-3"
        onClick={() => setModalDetail(true)}
      />
    )
  }

  return (
    <Dashboard>
      <Typography
        text="Deposito Edit Request"
        variant="title page"
      />
      <Tables
        data={state.data}
        fieldRow={depositoEditRequest}
        isSearch={true}
      />

      {modalDetail ? (
        <ModalForm
          title="Patherning 1"
          isCancel={false}
          isSubmit={false}
        >
          <div className=" space-y-5">

            <InputText
              label="rate"
              type="label"
              value="7%"
            />
            <InputText
              label="min amount"
              type="label"
              value="100.000"
            />
            <InputText
              label="status"
              type="label"
              value="active"
            />
            <InputText
              label="Interest Payment Type"
              type="label"
              value="installment"
            />
            <InputText
              label="breakable"
              type="label"
              value="yes"
            />
            <InputText
              label="quota"
              type="label"
              value="3.000.000.000"
            />
            <InputText
              label="create at"
              type="label"
              value="20 April 2022"
            />

            <div className=" pt-8 flex justify-end space-x-3">
              <Button
                variant="primary"
                text="Back"
                onClick={() => setModalDetail(false)}
              />
              <Button
                variant="success"
                text="Accept"
                type="center"
                onClick={() => setModalDetail(false)}
              />
              <Button
                variant="danger"
                text="Reject"
                type="center"
                onClick={() => setModalDetail(false)}
              />
            </div>

          </div>
        </ModalForm>
      ) : null}
    </Dashboard>
  )
}
export default DepositoEditRequest