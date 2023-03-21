function Typography(props) {
  return (
    <div
      className={` capitalize 
        ${props.variant === 'title page'
          ? 'text-2xl font-semibold'
          : props.variant === 'title detail'
            ? 'text-primary font-semibold'
            : ''}`
      }
    >
      {props.text}
    </div>
  )
}
export default Typography