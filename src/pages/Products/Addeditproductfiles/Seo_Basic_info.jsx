import React from "react";

const Seo_Basic_info =()=>{


    return (
        <>
        <section>
            <h2 className="font-semibold sm:m-4"> SEO</h2>

            <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
                <p className="font-bold text-xs">Meta Title</p>
                <input type="text" name="metaNameOne" id="metaNameOne" placeholder="Enter Meta Title" className="bg-transparent border border-b-black text-sm p-1"/>
            </section>

            <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
                <p className="font-bold text-xs">Meta Keywords</p>
                <input type="text" name="metaNameTwo" id="metaNameTwo" placeholder="Enter Keywords" className="bg-transparent border border-b-black text-sm p-1"/>
            </section>

              <section className=" m-1 sm:w-1/3  p-1 sm:m-4 flex flex-col justify-around ">
                <p className="font-bold text-xs m-2">Meta Description</p>
                <textarea rows={3} cols={30}  className="p-2 m-1 bg-transparent text-sm border border-slate-400 rounded-lg" placeholder="Enter Description"></textarea>
            </section>

        {/* <section className="sm:m-4">
            <button className="flex items-center justify-center border border-[#4F46E5] bg-[#4F46E5] sm:w-[10rem] sm:h-[2rem] rounded-2xl">
                <p className="text-sm text-[#fff] ">Edit Product</p>
                 <img
                 className="ml-2"
                 src="../../public/icons/Basic_infor_EditProduct.png"
                 width={15}
                 height={15}
                 alt="send"
                 />
            </button>
        </section> */}
        </section>
        </>
    )
}

export default Seo_Basic_info;
