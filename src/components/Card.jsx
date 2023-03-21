function Card(props) {
  return (
    <div
      className={` 
      p-4 text-white rounded-lg w-80 
      ${props.add}
      ${props.variant === 'info' ? 'bg-info'
          : props.variant === 'success' ? 'bg-success'
            : 'bg-default'}`
      }
    >
      <p>{props.title}</p>
      <div className=" font-semibold text-xl mt-2">Rp {props.number}</div>
    </div>
  )
}
export default Card