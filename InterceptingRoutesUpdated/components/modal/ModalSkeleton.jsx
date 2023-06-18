export default function ModalComponent(props) {
  return (
    <div className=" background-overlay fixed w-full h-[100vh] top-0 left-0  bg-slate-700 bg-opacity-75 grid place-items-center z-[100]">
      <div className="modalContainer w-[90vw] h-[75vh]  transition-all bg-white shadow-md z-[200]">
        <div className="modalHeader w-full h-12 px-2 py-3  bg-blue-700">
          <h1
            onClick={props.closeClick}
            className="text-slate-300 float-right pr-5 text-2xl hover:text-red-500 cursor-pointer "
          >
            &times;
          </h1>
        </div>
        <div className="modalBody w-full h-full bg-blue-100 p-5 rounded overflow-x-hidden overflow-y-auto">
          {props.modalBody ? props.modalBody : ""}
        </div>
      </div>
    </div>
  );
}
