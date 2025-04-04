import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";

export default function FilerModal({ isOpen, onClose, children }) {
  const filterRef = useRef(null);

  const handleOnCloseFilter = () => {
    onClose();
  };

  useEffect(() => {
    if (isOpen && filterRef.current) {
      filterRef.current.classList.remove("translate-x-full");
      filterRef.current.classList.add("translate-x-0");
    } else if (filterRef.current) {
      filterRef.current.classList.remove("translate-x-0");
      filterRef.current.classList.add("translate-x-full");
    }
  }, [isOpen]);

  if (!isOpen) return null; 

  return (
    <>
      {isOpen && (
        <div
          onClick={handleOnCloseFilter}
          className="fixed bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-dark/50 backdrop-blur"
        ></div>
      )}
      <div
        ref={filterRef}
        className="fixed bottom-0 right-0 top-0 z-10 w-full -translate-x-full bg-white p-4 transition md:w-[512px]"
      >
        <div className={`flex flex-col gap-4`}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Filter</h3>
            <button
              onClick={handleOnCloseFilter}
              className={`rounded-md border-2 border-gray-600 bg-white p-2 transition duration-150 ease-in-out hover:border-gray-800 cursor-pointer`}
            >
              <MdClose size={16}  className="text-gray-600"/>
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}