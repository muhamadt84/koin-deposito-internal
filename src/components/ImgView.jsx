
import ImgEx from "../assets/img/Example.png"

function ImgView(props) {
  return (
    <div className="flex items-center">
      <label className=" capitalize w-1/3">{props.label}</label>
      <img src={ImgEx} alt="Example" />
      <label className=" underline text-primary text-sm ml-5">View</label>
      {props.isRemove && (
        <label className=" underline text-danger text-sm ml-5">Remove</label>
      )}
    </div>
  )
}
export default ImgView