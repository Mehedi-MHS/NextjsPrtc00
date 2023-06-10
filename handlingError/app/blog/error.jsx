"use client"; //Error Components must be client component
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    //Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <div>
        <h1 className="text-center text-3xl text-red-600">
          Something Went Wrong!
        </h1>
        <button
          className="px-3 py-2 bg-slate-900 text-white rounded"
          onClick={
            //reset()  will re-render the segment . Sometimes error will be fixed by using this.
            () => reset()
          }
        >
          {" "}
          Try Again{" "}
        </button>
      </div>
    </>
  );
}
