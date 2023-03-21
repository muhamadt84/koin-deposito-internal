import { useState, useEffect } from "react"
import { Typography, Button, InputText, InputSelect } from "../components"
import { ModalForm } from "../components/Modal"
import { dataDeposito } from "../data/DummyTables"
import { deposito } from "../utils/FieldRow"
import Tables from "../utils/Tables"
import Dashboard from "./Dashboard"

function Deposito() {
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
          data: dataDeposito.map((row, index) => {
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
            text="Inactive"
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
          text="Detail"
          transform="upper"
          type="center"
          add="ml-3"
          // onClick={() => alert(item.no + '. Edit soon!')}
          onClick={() => setModalDetail(true)}
        />
      </div>
    )
  }

  return (
    <Dashboard >
      <Typography
        text="Deposito List"
        variant="title page"
      />
      <Tables
        data={state.data}
        fieldRow={deposito}
        isSearch={true}
        isSelectAll={false}
      />

      {modalDetail ? (
        <ModalForm
          title="Patherning 1"
          isCancel={false}
          isSubmit={false}
        >
          <InputText
            label="deposito name"
            type="text"
          />
          <InputText
            label="deposito code"
            type="text"
          />
          <InputText
            label="rate"
            type="text"
          />
          <InputText
            label="tenure"
            type="text"
          />
          <InputText
            label="min amount"
            type="text"
          />
          <InputText
            label="max amount"
            type="text"
          />
          <InputText
            label="Created At"
            type="text"
          />
          <InputText
            label="status"
            type="text"
          />
          <InputText
            label="interest payment type"
            type="text"
          />
          <InputSelect
            label="Breakable"
          />
          <Button
            variant="success"
            text="Activate"
            type="center"
            onClick={() => setModalDetail(false)}
          />
          <Button
            variant="danger"
            text="Inactive"
            type="center"
            add="ml-5"
            onClick={() => setModalDetail(false)}
          />
        </ModalForm>
      ) : null}
    </Dashboard>
  )
}
export default Deposito