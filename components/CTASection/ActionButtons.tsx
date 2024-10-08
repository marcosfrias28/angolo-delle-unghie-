/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface ActionButtonsProps {}

const ActionButtons: React.FC<ActionButtonsProps> = () => {
  return (
    <div className="flex gap-6 items-center self-start mt-8 text-base text-black whitespace-nowrap">
      <button className="gap-2 self-stretch px-6 py-3 my-auto border border-black border-solid max-md:px-5">
        Scopri
      </button>
      <button className="flex gap-2 justify-center items-center self-stretch my-auto">
        <span className="self-stretch my-auto">Contattaci</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a811d6ef5d9850afed8dff5016f772be6f066f6566a8eedf130cba55b7f3a78?placeholderIfAbsent=true&apiKey=d61f4ae53a074f4cb6bf4f3af87d0234"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </button>
    </div>
  );
};

export default ActionButtons;