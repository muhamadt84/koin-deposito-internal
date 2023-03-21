import { useEffect, useState } from "react"
import { Typography, Button, InputText } from "../components"
import { ModalForm } from "../components/Modal"
import { dataLender } from "../data/DummyTables"
import { lender } from "../utils/FieldRow"
import Tables from "../utils/Tables"
import Dashboard from "./Dashboard"


function Lender() {
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
          data: dataLender.map((row, index) => {
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
        text="Lender"
        variant="title page"
      />


      <Tables
        data={state.data}
        fieldRow={lender}
      />

      {modalDetail ? (
        <ModalForm
          title="Detail"
          isCancelText="back"
          onCancel={() => setModalDetail(false)}
          isSubmit={false}
        >
          <InputText
            label="order code"
            type="label"
            value="0001"
          />
          <InputText
            label="BPR name"
            type="label"
            value="BPR Sample 1"
          />
          <InputText
            label="deposito name"
            type="label"
            value="deposito 1"
          />
          <InputText
            label="rate"
            type="label"
            value="7 %"
          />
          <InputText
            label="Tenor"
            type="label"
            value="12 Month"
          />
          <InputText
            label="status"
            type="label"
            value="active"
          />
          <InputText
            label="comission until capture date"
            type="label"
            value="100.000.000"
          />
        </ModalForm>
      ) : null}
    </Dashboard>
  )
}
export default Lender