import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    const formdata = await request.formData();
    const file = formdata.get("file");
    console.log("File Object: ", file);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    console.log("bytes", bytes);
    console.log("buffer", buffer);
    const pathname = path.join(process.cwd(), "/public/uploads/", file.name);
    await writeFile(pathname, buffer);

    /* const pathname = path.join(process.cwd(), "/public/uploads/");
    if (existsSync(pathname)) {
      console.log("path exists: ", pathname);
    } else {
      console.log("path doesnot exists: ", pathname);
    }
    */
    const info = `filename: ${file.name}, size: ${file.size}, type:${file.type}`;
    console.log(info);

    return NextResponse.json({ messege: info }, { status: 200 });
  } catch (error) {
    console.error("error from backend catch blocK :", error);
  }
}

/*
import { NextResponse } from "next/server";
import fs from "fs";
import formidable from "formidable";

export async function POST() {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return NextResponse.json({ messege: "Upload failed" }, { status: 500 });
    }

    const { image } = files;

    if (!image) {
      return NextResponse.json(
        { messege: "No Image provided" },
        { status: 400 }
      );
    }

    const imagePath = `./public/uploads/${image.name}`;

    fs.renameSync(image.path, imagePath);

    return NextResponse.json(
      { messege: "Image uploaded successfully" },
      { status: 200 }
    );
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
*/
