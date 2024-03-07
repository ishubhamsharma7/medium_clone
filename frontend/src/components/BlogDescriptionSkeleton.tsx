
const BlogDescriptionSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full pt-10 max-w-screen-xl animate-pulse">
        <div className=" col-span-8 ">
            <div className="text-4xl font-extrabold">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
            </div>
            <div className="text-slate-400 pt-3">
              <div className="h-2 bg-gray-200 rounded-full mb-5 w-40"></div>
            </div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-3"></div>
        </div>
        
        <div className=" col-span-4 pl-6">
            <div className="text-slate-600 text-lg">
              <div className="h-2 bg-gray-200 rounded-full mb-6 w-16"></div>
            </div>
            <div className="flex w-full" >
              <div className="flex justify-center flex-col pr-4">  
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                  </svg>
                </div>
              </div>
              <div>
                  <div className=" font-extrabold text-xl ">
                    <div className="h-2 bg-gray-200 rounded-full w-24 my-4"></div>
                  </div>
                  <div className="text-slate-400 pt-3">
                    <div className="h-2 bg-gray-200 rounded-full mb-2 w-56"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2 w-56"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2 w-56"></div>
                  </div>
              </div>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default BlogDescriptionSkeleton