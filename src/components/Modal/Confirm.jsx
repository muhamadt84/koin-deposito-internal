import Button from "../Button"
import Typography from "../Typography"

function Confirm(props) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
        <div className="relative my-6 mx-auto max-w-3xl w-1/4">
          {/*content*/}
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-8">
            {/*header*/}
            <div className="flex items-start">
              <Typography
                text={props.title}
                variant="title page"
              />
            </div>
            {/*body*/}
            <div className="relative flex-auto my-2 space-y-3 ">
              <p className=" tracking-wide">
                {props.desc}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end mt-5">
              {props.variant === 'payemnt' ? (
                <>
                  <Button
                    variant="default"
                    type="center"
                    text="Cancel"
                    onClick={() => props.onCancel()}
                  />
                  <Button
                    variant="primary"
                    type="center"
                    text="Yes"
                    add="ml-3"
                    onClick={() => props.onYes()}
                  />
                </>
              ) :
                (
                  <Button
                    variant="success"
                    type="center"
                    text="Confirm"
                    onClick={() => props.onYes()}
                  />
                )
              }

            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black" />
    </>
  )
}
export default Confirm