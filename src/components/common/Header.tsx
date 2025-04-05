import Image from "next/image";

export default function Header() {
  return (
    <div className="border-b border-gray-200">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FFD600] rounded-full flex items-center justify-center">
            <span role="img" aria-label="book">
              📚
            </span>
          </div>
          <span className="text-[#2D2D2D] font-medium">
            Biology - Chapter 22: Evolution
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
          <Image src="/user-avatar.png" alt="User" width={32} height={32} />
        </div>
      </div>
    </div>
  );
}
