import Button from "./Button";

function InputText(props) {
  return (
    <div className={`flex justify-between ${props.type === 'textarea' ? 'items-start' : 'items-center'}`}>
      <label className="capitalize">{props.label}</label>
      {props.type === "textarea" ? (
        <textarea
          className=" py-1 px-3 w-2/3 border border-default rounded-sm focus:outline-none"
          placeholder={props.placeholder}
          rows={4}
        >
        </textarea>
      ) : props.type === "label" ? (
        <label className=" w-2/3">: {props.value}</label>
      ) : props.type === "file" ? (
        <div className="flex w-2/3 items-center">
          <Button
            variant="primary"
            text="Upload File"
            icon="with"
            iconName="upload"
          />
          <label className=" ml-5 text-xs">File image (PNG, JPG)</label>
        </div>
      ) : (
        <input
          className=" py-1 w-2/3 px-3 border border-default rounded-sm focus:outline-none"
          type={props.type || 'text'}
          placeholder={props.placeholder}
          name={props.name}
          autoComplete={
            props.type === "email" ? "off"
              : props.type === "password" ? "new-password"
                : ""
          }
          onChange={(e) => props.onChange(e)}
        />
      )}
    </div>
  )
}
export default InputText