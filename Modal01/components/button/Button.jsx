export default function Button(props) {
  return (
    <>
      <button
        onClick={props.onClick ? props.onClick : null}
        className={`px-2 py-3 shadow-sm ${
          props.backgroundColor ? props.backgroundColor : "bg-blue-600"
        } text-white rounded`}
      >
        {props.text ? props.text : "Click Me"}
      </button>
    </>
  );
}
