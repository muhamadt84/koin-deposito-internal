import React from "react"
import { ImgView, InputText, Button, Typography } from "../../components"

function TabUserData(props) {
  return (
    <>
      <div className=" w-7/12 mt-5 space-y-5 px-2 pb-12">
        <Typography
          variant="title detail"
          text="Personal Data"
        />
        <ImgView
          label="Selfie Foto"
        />
        <ImgView
          label="Selfie w/ KTP Photo"
        />
        <ImgView
          label="KTP Photo"
        />
        <InputText
          label="KTP Number"
        />
        <InputText
          label="Full Name"
        />
        <InputText
          label="Birth Place"
        />
        <InputText
          label="Birth Date"
        />
        <InputText
          label="Gender"
        />
        <InputText
          label="ID Address"
        />
        <InputText
          label="Current Address"
        />
        <InputText
          label="Current Province"
        />
        <InputText
          label="Current City"
        />
        <InputText
          label="Current District"
        />
        <InputText
          label="Current Sub District"
        />
        <InputText
          label="Current RT RW"
        />
        <InputText
          label="Current Postal Code"
        />
        <InputText
          label="Marriage"
        />
        <InputText
          label="Religion"
        />
        <InputText
          label="Last Education"
        />
        <InputText
          label="Mother Maiden Name"
        />
        <InputText
          label="Emergency Contact"
        />
        <Typography
          variant="title detail"
          text="Financial Data"
        />
        <ImgView
          label="NPWP PHoto"
        />
        <InputText
          label="NPWP Number"
        />
        <InputText
          label="Source of Founds"
        />
        <InputText
          label="Income Range Monthly"
        />
        <InputText
          label="Occupation"
        />
        <InputText
          label="File of Occupation"
        />
        <Typography
          variant="title detail"
          text="Additional Data"
        />
        <Typography
          text="Show data type that BPR ask to user spesifically for user"
        />
        <Typography
          variant="title detail"
          text="Virtual Account Data"
        />
        <InputText
          label="Virtual Account Bank"
        />
        <InputText
          label="Virtual Account Name"
        />
        <div className=" flex justify-end space-x-3">
          <Button
            text="Back"
            type="center"
            onClick={props.onClick}
          />
          <Button
            variant="success"
            text="Settlement"
            type="center"
            onClick={() => alert("Soon!")}
          />
        </div>
      </div>


    </>
  )
}
export default TabUserData