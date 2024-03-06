
const BlogSkeleton = () => {
  return (

    <div>
      <div className="flex justify-center mt-5">
        <div className="border-b py-4 border-slate-200 w-screen max-w-screen-lg cursor-pointer animate-pulse">
        <div className="flex">
          <div className="flex flex-col justify-center">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          </div>
          <div className=" font-light px-2 flex flex-col justify-center">
              <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
          </div> 
          <div className="text-slate-500 font-thin text-sm flex flex-col justify-center">
              <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
          </div>
        </div>
        <div className="font-semibold text-2xl pt-2">
            <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
        </div>
        <div className=" font-normal pt-1 text-sm">
          <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
        </div>
        </div>
        <div className="text-slate-500 text-xs font-extralight pt-2">
            <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
        </div>  
      </div>
    </div>


  )
}

export default BlogSkeleton