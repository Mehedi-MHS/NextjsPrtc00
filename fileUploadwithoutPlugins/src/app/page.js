"use client";

import { useState } from "react";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = async (event) => {
    //handleUpload;
    event.preventDefault();
    try {
      if (selectedFile) {
        console.log("Selected file object: ", selectedFile);
        console.log("Selected file name: ", selectedFile.name);

        const formData = new FormData();
        formData.append("file", selectedFile);
        console.log("Formdata object: ", formData);

        const response = await fetch("/api/upload/", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          alert(data.messege);
          alert("File uploaded Successfully");
        } else {
          alert("File Upload Failed");
        }
      }
    } catch (error) {
      console.log("Error Uploading File, from catch block", error);
    }
  };

  return (
    <>
      <h1>Upload File</h1>
      <hr />
      <form onSubmit={handleUpload}>
        <input
          type="file"
          name="file"
          onChange={(event) => setSelectedFile(event.target.files?.[0])}
        />
        <br />
        <button
          className=" p-2 bg-blue-700 rounded text-white font-bold font-2xl"
          type="submit"
        >
          Upload
        </button>
      </form>
    </>
  );
}
