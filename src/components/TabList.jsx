function TabList(props) {
  return (
    <div
      className={` p-4 capitalize 
        ${props.tab === props.name
          ? ' border border-b-0 border-default rounded-t'
          : ' cursor-pointer'}`} onClick={props.onClick}
    >
      {props.name}
    </div>
  )
}
export default TabList