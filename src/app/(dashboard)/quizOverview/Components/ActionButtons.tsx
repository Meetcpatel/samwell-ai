import { useRouter } from "next/navigation";

export default function ActionButtons() {
  const router = useRouter();

  return (
    <div className="flex justify-end items-center mt-8 px-[35px]">
      <div className="flex items-center gap-4">
        <button
          className="px-6 py-2 text-gray-600 hover:text-gray-800 active:text-gray-900 transition-colors font-medium"
          onClick={() => router.push("/")}
        >
          ← Cancel
        </button>
        <button
          className="w-[194px] h-[50px] flex items-center justify-center gap-[10px] rounded-[59px] py-[10px] px-[60px] bg-[#2A76F6] text-white hover:bg-blue-700 active:bg-blue-800 transition-colors font-semibold"
          onClick={() => router.push("/")}
        >
          Complete
        </button>
      </div>
    </div>
  );
}
