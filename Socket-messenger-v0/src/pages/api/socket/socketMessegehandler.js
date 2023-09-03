export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({ messege: "Method Not Allowed!" });
  }
  const data = req.body;
  console.log(data);
  res?.socket?.server?.io?.emit("messege", data);
  res.end();
}
