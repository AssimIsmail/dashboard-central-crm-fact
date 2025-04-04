import React from "react";

const LoaderEntreprisesList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full gap-2">
    {[...Array(24)].map((_, index) => (
      <div key={index} className="h-[175px] w-[325px] animate-pulse rounded-md border-2 border-gray-200 bg-white" />
    ))}
  </div>
  );
};

export default LoaderEntreprisesList;
