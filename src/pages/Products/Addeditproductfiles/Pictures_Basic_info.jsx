import React from "react";

const Pictures_Basic_info = () => {
  return (
    <>
      <section>
        <h2 className="font-semibold mt-2 "> Pictures</h2>

        <section className="flex sm:mt-4 items-center">
          <input type="file" />
          <label className="text-md my-3 ">Upload Image</label>
        </section>
      </section>

      <section className=" flex gap-1 items-center mt-2">
        <input type="radio" />
        <label className="text-sm ">Digital Product</label>
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
    </>
  );
};

export default Pictures_Basic_info;
