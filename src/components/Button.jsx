
// import Search from "../assets/icon/Search";
import Plus from "../assets/icon/Plus";
import Download from "../assets/icon/Download";
import Upload from "../assets/icon/Upload";

function Button(props) {
  const variant =
    props.variant === 'primary' ? ' bg-primary'
      : props.variant === 'success' ? ' bg-success'
        : props.variant === 'danger' ? ' bg-danger'
          : props.variant === 'info' ? ' bg-info'
            : 'bg-default'

  const transform =
    props.transform === 'upper' ? 'uppercase'
      : props.transform === 'lower' ? 'lowercase'
        : 'capitalize'

  const type =
    props.type === 'center' ? 'w-32'
      // : props.type === '' ? ''
      : 'px-3'

  const styles = `${variant} ${transform} ${type} ${props.add !== undefined && props.add}`

  // console.log(props);

  return (
    <button
      className={` ${styles} ${props.icon === 'with' && 'flex items-center'} py-2 text-white rounded tracking-wide hover:opacity-80`}
      onClick={props.onClick}
    >
      {props.icon === 'only' && (<Plus />)}
      {props.icon === 'with' && (
        <>
          {props.iconName === 'download' && (
            <Download />
          )}
          {props.iconName === 'upload' && (
            <Upload />
          )}
          <span className=" ml-2">
            {props.text}
          </span>
        </>
      )}
      {props.icon === undefined && (props.text)}
    </button>
  )
}
export default Button