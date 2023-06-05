import Image from "next/image";
import Link from "next/link";
let options=[
    {id:0,name:"Home",url:"/"},
    {id:1,name:"Services",url:"/services"},
    {id:2,name:"Contacts",url:"/contacts"},
    {id:3,name:"About US",url:"/about"},
{id:4,name:"Blog",url:"/blog"}];
const NavBar=()=>{
 return (
    <>
    <nav className="w-full h-10 bg-black p-1">
        <ul className="list-none flex flex-row justify-around ">
        <Image src="../next.svg" width={100} height={50} className="bg-white p-1" />
           { options.map((option)=>(
               <Link href={option.url}> <li key={option.id} className="text-white hover:text-cyan-400 ">{option.name}</li></Link>
            ))}
        </ul>
    </nav>
    </>
 )
}
export default NavBar;