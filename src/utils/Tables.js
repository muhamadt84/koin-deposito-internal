import React from 'react'
import Search from "../assets/icon/Search"

function Tables(props) {
  return (
    <div className={` overflow-auto ${props.variant !== 'full' ? 'max-w-[90rem]' : ''}`}>
      <table className={` mt-3 mb-12 ${props.variant === 'full' ? 'w-full' : ''}`}>
        <thead>
          <tr>
            {props.isSelectAll && (
              <th className=" p-4 bg-main text-white font-medium text-left space-x-2 items-center">
                <input type="checkbox" className=" cursor-pointer" />
                <label>All</label>
              </th>
            )}
            {props.fieldRow && props.fieldRow.map((row, index) => (
              <th
                className=" p-4 bg-main text-white font-medium text-left"
                key={index}
              >
                {row.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.isSearch && (
            <tr>
              {props.fieldRow && props.fieldRow.map((row, index) => (
                row.search ? (
                  <td className={` p-4 border-b `} key={index}>
                    <div className=" flex border border-default rounded items-center px-2">
                      <input type="text" className=" py-2 ml-4 focus:outline-none" placeholder="Search.." />
                      <Search />
                    </div>
                  </td>
                )
                  :
                  (
                    <td className={` p-4 border-b `} key={index}></td>
                  )

              ))}
            </tr>
          )}
          {props.data && props.data.map((row, index) => (
            <tr key={index} className=" hover:bg-gray-50">
              {props.isSelectAll && (
                <td className="p-4 border-b ">
                  <input type="checkbox" className=" cursor-pointer" />
                </td>
              )}
              {props.fieldRow && props.fieldRow.map((item, index2) => {
                return (
                  <td
                    className={`p-4 border-b ${row.status === 'Inactive' ? 'text-gray-300' : ''} `}
                    key={index2}
                  >
                    {row[item.accessor]}

                    {/* {row[item.accessor] !== undefined ?
                    row[item.accessor]
                    // : item.action
                    : row[item.action]
                  } */}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    //  <table className=" mt-5 w-full">
    //     <thead className=" ">
    //       <tr >
    //         <th className=" p-4 bg-main text-white font-medium text-left">No.</th>
    //         <th className=" p-4 bg-main text-white font-medium text-left">Officer Name</th>
    //         <th className=" p-4 bg-main text-white font-medium text-left">Email</th>
    //         <th className=" p-4 bg-main text-white font-medium text-left">Role</th>
    //         <th className=" p-4 bg-main text-white font-medium text-left">Status</th>
    //         <th className=" p-4 bg-main text-white font-medium text-left">Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data && data.map((row) => (
    //         <tr key={row.no} className=" hover:bg-gray-50">
    //           <td className={` p-4 border-b  ${row.status === 'Inactive' && 'text-gray-300'} `}>{row.no}</td>
    //           <td className={` p-4 border-b  ${row.status === 'Inactive' && 'text-gray-300'} `}>{row.officer}</td>
    //           <td className={` p-4 border-b  ${row.status === 'Inactive' && 'text-gray-300'} `}>{row.email}</td>
    //           <td className={` p-4 border-b  ${row.status === 'Inactive' && 'text-gray-300'} `}>{row.role}</td>
    //           <td className={` p-4 border-b  ${row.status === 'Inactive' && 'text-gray-300'} `}>{row.status}</td>
    //           <td className={` p-4 border-b  ${row.status === 'Inactive' && 'text-gray-300'} `}>
    //             {row.status !== 'Inactive' ? (
    //               <Button
    //                 variant="danger"
    //                 text="Terminate"
    //                 transform="upper"
    //                 type="center"
    //               />
    //             )
    //               : (
    //                 <Button
    //                   variant="success"
    //                   text="Activate"
    //                   transform="upper"
    //                   type="center"
    //                 />
    //               )}

    //             <Button
    //               variant="primary"
    //               text="Edit"
    //               transform="upper"
    //               add="ml-3"
    //             />
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
  )
}
export default Tables