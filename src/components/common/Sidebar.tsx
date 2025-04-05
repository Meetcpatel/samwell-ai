import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-16 border-r border-gray-200 flex flex-col items-center pt-6 gap-6">
      <div className="text-gray-400 mb-6">
        <Link href="/">
          <Image src="/samwelll.png" alt="Samwell.ai" width={24} height={24} />
        </Link>
      </div>
      <div className="p-2 rounded-lg">
        <Image src="/menu2.png" alt="Menu" width={20} height={20} />
      </div>
      <div className="text-gray-400">
        <Image src="/dotpoints.png" alt="Dot points" width={20} height={20} />
      </div>
    </div>
  );
}
