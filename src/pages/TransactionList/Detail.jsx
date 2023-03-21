import React, { useState } from "react";
import { TabList, Typography } from "../../components";
import TabDepositoData from "./TabDepositoData";
import TabTransactionData from "./TabTransactionData";
import TabUserData from "./TabUserData";

function Detail(props) {
  const [tab, setTab] = useState('transaction data')

  return (
    <>
      <Typography
        text="[Transaction Code]"
        variant="title page"
      />
      <div className=" mt-5 text-gray-400 space-y-2">
        <div className=" flex">
          <div className=" w-40">Funding Code</div>
          <div>: 000000001</div>
        </div>
        <div className=" flex">
          <div className="  w-40">User Name</div>
          <div>: Alfa</div>
        </div>
      </div>

      <div className=" mt-5 flex border-b border-default text-primary w-7/12">
        <TabList
          name="transaction data"
          tab={tab}
          onClick={() => setTab('transaction data')}
        />
        <TabList
          name="user data"
          tab={tab}
          onClick={() => setTab('user data')}
        />
        <TabList
          name="deposito data"
          tab={tab}
          onClick={() => setTab('deposito data')}
        />
      </div>

      {tab === 'transaction data' && (
        <TabTransactionData {...props} />
      )}

      {tab === 'user data' && (
        <TabUserData {...props} />
      )}

      {tab === 'deposito data' && (
        <TabDepositoData {...props} />
      )}
    </>
  )
}
export default Detail