import BlogData from '../../api/blog.json';

//generates static paths from object id's from json file
// export async function getStaticPaths(){
//     const paths = BlogData.map((blog)=>({
//         params:{id:blog.id.toString()},
//     }));
//     return {paths,fallback:false};
// }

// export async function getStaticProps({params}){
//     const blogId= parseInt(params.id);
//     const blog= BlogData.find((blog)=>blog.id===blogId);
//     return {props:{blog}};
// }

//use this function to make static paths from static json file that will act like dynamic path. then use the path value 
// to find the info from json file.

export async function generateStaticParams(){
    return BlogData.map((blog)=>({
        id:blog.id.toString(),
    }));
}

export default function Blog({params}){
    const blog=BlogData.find((b)=>b.id===parseInt(params.id));
    return (
        <>
        <h1 className="text-center text-white text-2xl">{blog.title}</h1>
        <p className='text-slate-100'>{blog.description}</p>
        </>
    )
}