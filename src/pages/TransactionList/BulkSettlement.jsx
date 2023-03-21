import React, { useState, useEffect } from "react"
import { bulkSettlement } from "../../utils/FieldRow"
import { Confirm } from "../../components/Modal"
import { dataBulkSettlement } from "../../data/DummyTables"
import { Button, Typography } from "../../components"
import Tables from "../../utils/Tables"
import Card from "../../components/Card"

function BulkSettlement() {
  const [confirm, setConfirm] = useState(false)
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
          data: dataBulkSettlement.map((row, index) => {
            return {
              ...row,
              check: false
            }
          })
        }
      })
    }

    return () => mounted === false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Typography
        text="Bulk Settlement List"
        variant="title page"
      />
      <input type="date" name="" id="" className=" border py-1 px-3 rounded-sm focus:outline-none mt-5" />
      <Card
        title="Total Settlement List"
        number="60,000,000"
        variant="info"
        add="mt-5"
      />

      <Tables
        data={state.data}
        fieldRow={bulkSettlement}
        variant="full"
        isSelectAll={true}
      />

      <div className=" flex justify-end">
        <Button
          variant="success"
          text="Confirm Payment"
          add="mt-5"
          onClick={() => setConfirm(true)}
        />
      </div>

      {confirm ? (
        <Confirm
          title="Confirm Settlement?"
          desc="This confirm will update Settlement status for this transaction to “Paid”"
          varian="payment"
          onYes={() => setConfirm(false)}
        />
      ) : null}
    </>
  )
}
export default BulkSettlement