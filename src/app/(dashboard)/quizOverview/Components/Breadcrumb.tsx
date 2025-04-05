import Image from "next/image";

export default function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
      <div className="w-[75px] h-[23px] px-[10px] py-1 rounded bg-[#EAF1FE] flex items-center">
        <span className="font-inter text-xs font-semibold leading-none text-[#45505E]">
          Module 3
        </span>
      </div>
      <span className="font-inter text-xs font-medium leading-[15px] text-[#45505E]">
        Biology
      </span>
      <Image
        src="/chevron-right.png"
        alt="chevron right"
        width={16}
        height={16}
        className="text-[#45505E]"
      />
      <div className="min-w-[77px] h-[23px] px-[10px] py-1 rounded bg-[#EAF1FE] flex items-center whitespace-nowrap">
        <span className="font-inter text-xs font-semibold leading-none text-[#45505E]">
          Final Quiz
        </span>
      </div>
    </div>
  );
}
