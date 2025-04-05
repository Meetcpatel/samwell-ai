import Link from "next/link";
import BookIcon from "../ui/icons/BookIcon";
import ChevronDownIcon from "../ui/icons/ChevronDownIcon";
import UploadIcon from "../ui/icons/UploadIcon";
import LinkIcon from "../ui/icons/LinkIcon";

export default function AIStudy() {
  return (
    <div className="w-full max-w-3xl mx-auto p-8 rounded-xl shadow-md bg-white">
      <div className="flex items-center gap-2 mb-6">
        <BookIcon />
        <span className="font-medium">AI tutor</span>
        <ChevronDownIcon />
      </div>

      <FileUploadSection />

      <textarea
        placeholder="Type what you study..."
        className="w-full p-3 rounded-lg mb-4 h-24 outline-none resize-none bg-[#F6F6F6]"
      ></textarea>

      <div className="flex justify-end">
        <Link
          href="/quiz"
          className="bg-[#4285F4] text-white w-[232px] h-[40px] rounded-full font-['Inter'] font-semibold text-base flex items-center justify-center hover:bg-blue-700 active:bg-blue-800 transition-colors"
        >
          Start Studying
        </Link>
      </div>
    </div>
  );
}

function FileUploadSection() {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg pl-4 pr-4 pt-4 mb-4 flex flex-col items-center justify-center relative">
      <div className="absolute top-4 right-4 text-gray-400 text-sm bg-[#F9F9F9] px-3 py-1 rounded-lg">
        Copy/Paste Text
      </div>

      <UploadIcon />
      <p className="text-gray-600 mb-1">Click to Upload or drag and drop</p>
      <p className="text-gray-400 text-sm">(Max. File size: 25 MB)</p>

      <div className="flex items-center border rounded-lg overflow-hidden mb-4 mt-4 w-full border border-[#E0E0E0]">
        <div className="flex items-center pl-3 text-gray-400">
          <LinkIcon />
        </div>
        <input
          type="text"
          placeholder="Paste URL here"
          className="p-3 flex-1 outline-none"
        />
        <button className="bg-[#F9F9F9] text-gray-700 font-medium w-[44px] h-[25px] flex items-center justify-center gap-1 pt-1 pr-2 pb-1 pl-2 rounded-lg text-sm mr-[16px]">
          Add
        </button>
      </div>
    </div>
  );
}
