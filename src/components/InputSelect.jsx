function InputSelect(props) {
  return (
    <div className="flex justify-between items-center">
      <label className=" capitalize">{props.label}</label>
      <select
        className=" py-1 w-2/3 px-2 border border-default rounded-sm focus:outline-none"
        onChange={(e) => props.onChange(e)}
      >
        <option value="">Bank Admin</option>
      </select>
    </div>
  )
}
export default InputSelect