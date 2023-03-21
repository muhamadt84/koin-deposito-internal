import Button from "../Button"
import Typography from "../Typography"

function ModalForm(props) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-3xl w-1/2">
          {/*content*/}
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-10 px-8">
            {/*header*/}
            {props.title !== undefined && (
              <div className="flex items-start">
                <Typography
                  text={props.title}
                  variant="title page"
                />
              </div>
            )}
            {/*body*/}
            <div className="relative flex-auto my-6 space-y-3 ">
              {props.children}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end ">
              {(props.isCancel || props.isCancel === undefined) && (
                <Button
                  variant="default"
                  type="center"
                  text={
                    props.isCancelText !== undefined
                      ? props.isCancelText
                      : 'cancel'
                  }
                  onClick={() => props.onCancel()}
                />
              )}

              {(props.isSubmit || props.isSubmit === undefined) && (
                <Button
                  variant="primary"
                  type="center"
                  text={
                    props.isSubmitText !== undefined
                      ? props.isSubmitText
                      : 'submit'
                  }
                  add="ml-3"
                  onClick={() => props.onSubmit()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black" />
    </>
  )
}
export default ModalForm