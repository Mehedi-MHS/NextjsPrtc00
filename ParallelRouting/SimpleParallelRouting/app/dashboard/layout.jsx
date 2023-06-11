export default function DashboardLayout(props) {
  return (
    <>
      <div className="w-screen h-96 bg-slate-300 relative p-5 grid grid-cols-3">
        <section>{props.children}</section>
        <section>{props.analytics}</section>
        <section>{props.balance}</section>
      </div>
    </>
  );
}
