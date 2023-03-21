import React, { useEffect, useState } from "react"
import { Button, Typography, InputText, InputSelect, TabList } from "../components"
import Dashboard from "./Dashboard"
import Tables from "../utils/Tables"
import { bank, officer } from "../utils/FieldRow"
import { dataBank, dataOfficer } from "../data/DummyTables"
import { ModalForm } from "../components/Modal"

function Bank() {
  const [modalDetail, setModalDetail] = useState(false)
  const [modalCreate, setModalCreate] = useState(false)
  const [tab, setTab] = useState('detail')
  const [state, setState] = useState({
    data: [],
    dataOfficer: [],
    loading: true
  })

  useEffect(() => {
    let mounted = true
    if (mounted) {
      setState(prevState => {
        return {
          ...prevState,
          data: dataBank.map((row, index) => {
            return {
              ...row,
              action: actionButton(row, index)
            }
          }),
          dataOfficer: dataOfficer
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
        text="Bank"
        variant="title page"
      />
      <Button
        variant="primary"
        text="Create"
        type="center"
        add=" mt-5"
        onClick={() => setModalCreate(true)}
      />
      <Tables
        data={state.data}
        fieldRow={bank}
        isSearch={true}
        // variant="full"
        isSelectAll={false}
      />

      {modalCreate ? (
        <ModalForm
          title="Create Bank"
          isCancel={true}
          onCancel={() => setModalCreate(false)}
          isSubmit={true}
          onSubmit={
            () => {
              alert("Soon!")
            }
          }
        >
          <InputText
            label="bank name"
            type="text"
          />
          <InputText
            label="bank admin name"
            type="email"
          />
          <InputText
            label="comission rate"
            type="text"
          />
          <InputSelect
            label="billyet"
          />
        </ModalForm>
      ) : null}

      {modalDetail ? (
        <ModalForm
          // title="Create Bank"
          isCancel={true}
          isCancelText="back"
          onCancel={() => setModalDetail(false)}
          isSubmit={false}
        >
          <div className="flex border-b border-default text-primary ">
            <TabList
              name="detail"
              tab={tab}
              onClick={() => setTab('detail')}
            />
            <TabList
              name="officer"
              tab={tab}
              onClick={() => setTab('officer')}
            />
            <TabList
              name="requirement data"
              tab={tab}
              onClick={() => setTab('requirement data')}
            />
          </div>

          {tab === 'detail' && (
            <div className=" pt-5 space-y-5">
              <InputText
                label="bank name"
                type="label"
                value="Bank AAA"
              />
              <InputText
                label="total deposito listed"
                type="label"
                value="10"
              />
              <InputText
                label="total outstanding"
                type="label"
                value="100.000.000.000"
              />
              <InputText
                label="comission for current"
                type="label"
                value="100.000.000"
              />
            </div>
          )}

          {tab === 'officer' && (
            <Tables
              data={state.dataOfficer}
              fieldRow={officer}
              isSearch={false}
              variant="full"
              isSelectAll={false}
            />
          )}

          {tab === 'requirement data' && (
            <div className=" space-y-5">
              <InputText
                label="Billyet Type"
                type="label"
                value="Papper Billyet"
              />
              <InputText
                label="Requirement"
                type="label"
              />
              <ul>
                <li>• Full Name</li>
                <li>• Selfie KTP</li>
                <li>• NPWP</li>
              </ul>
            </div>
          )}

        </ModalForm>
      ) : null}
    </Dashboard>
  )
}
export default Bank