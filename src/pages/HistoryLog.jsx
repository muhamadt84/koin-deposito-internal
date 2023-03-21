import React, { useEffect, useState } from "react"
import { Typography, Button } from "../components"
import { ModalForm } from "../components/Modal"
import { dataLogHistory, dataLogHistoryDetail } from "../data/DummyTables"
import { historyLog, historyLogDetail } from "../utils/FieldRow"
import Tables from "../utils/Tables"
import Dashboard from "./Dashboard"

function HistoryLog() {
  const [modalDetail, setModalDetail] = useState(false)
  const [state, setState] = useState({
    data: [],
    dataDetail: [],
    loading: true
  })

  useEffect(() => {
    let mounted = true
    if (mounted) {
      setState(prevState => {
        return {
          ...prevState,
          data: dataLogHistory.map((row, index) => {
            return {
              ...row,
              action: actionButton(row, index)
            }
          }),
          dataDetail: dataLogHistoryDetail
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
        text="History Log"
        variant="title page"
      />
      <Tables
        data={state.data}
        fieldRow={historyLog}
        variant="full"
      />

      {modalDetail ? (
        <ModalForm
          title="Details"
          isCancel={true}
          onCancel={() => setModalDetail(false)}
          isSubmit={false}
        >
          <div className=" flex flex-col space-y-2">
            <div>Change data: 29/05/2022 23:00:00</div>
            <div>Requestor: Budiman@gmail.com</div>
            <div className=" font-medium">Type: Deposito Request Data</div>
          </div>
          <Tables
            data={state.dataDetail}
            fieldRow={historyLogDetail}
            variant="full"
          />
        </ModalForm>
      ) : null}
    </Dashboard>
  )
}
export default HistoryLog