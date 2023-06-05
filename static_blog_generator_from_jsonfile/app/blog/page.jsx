import Link from 'next/link';
import blogsData from '../api/blog.json';
export default function BlogList(){
    return(
        <>
        <h1 className='text-white text-2xl'>Our Blog</h1>
        <ul>
        {blogsData.map((blog)=>( <li key={blog.id}><Link className='cursor:pointer' href={`/blog/${blog.id}`}>{blog.title}</Link></li>

))}
        </ul>
       
        </>
        
    )
}