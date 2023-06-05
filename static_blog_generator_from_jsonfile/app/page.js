import Link from "next/link"

export default function Home() {
  return (
    <>
    <div className='w-1/2 bg-blue-600 rounded grid place-items-center h-32'>
      <h1 className='text-white text-3xl'>Hello World</h1>
    </div>
    <div className='w-1/2 bg-blue-600 rounded grid place-items-center h-32'>
      <Link href={"/about"} className='text-white text-3xl'>Next Page.</Link>
    </div>
    </>
  )
}

