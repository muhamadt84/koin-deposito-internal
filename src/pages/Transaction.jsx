import React, { useState, useEffect } from "react"
import { Typography, Button } from "../components"
import Card from "../components/Card"
import { dataTransactionList } from "../data/DummyTables"
import { transactionList } from "../utils/FieldRow"
import Tables from "../utils/Tables"
import Dashboard from "./Dashboard"
import Detail from "./TransactionList/Detail"
import BulkSettlement from "./TransactionList/BulkSettlement"

function Transaction() {
  const [showDetail, setShowDetail] = useState(false)
  const [showBulkSettlement, setShowBulkSettlement] = useState(false)
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
          data: dataTransactionList.map((row, index) => {
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
        // onClick={() => alert(item.no + '. Edit soon!')}
        onClick={() => setShowDetail(true)}
      />
    )
  }

  return (
    <Dashboard>
      {!showDetail && !showBulkSettlement && (
        <>
          <Typography
            text="Transaction List"
            variant="title page"
          />
          <div className=" flex justify-between mt-5">
            <div className=" flex space-x-5">
              <Card
                title="Total Outstanding"
                number="900,000,000"
                variant="info"
              />
            </div>
            <div className="flex items-end">
              <Button
                variant="primary"
                text="Bulk Settlement"
                onClick={() => setShowBulkSettlement(true)}
              />
            </div>
          </div>
          <Tables
            data={state.data}
            fieldRow={transactionList}
            variant="full"
            isSearch={true}
          />
        </>
      )}

      {showDetail && (
        <Detail onClick={() => setShowDetail(false)} />
      )}

      {showBulkSettlement && (
        <BulkSettlement />
      )}
    </Dashboard>
  )
}
export default Transaction