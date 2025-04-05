import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Samwell-Logo.png"
            alt="Samwell.ai"
            width={172}
            height={26}
            className="text-blue-500"
          />
        </Link>
        <NavLinks />
      </div>

      <div className="flex items-center space-x-4">
        <Link
          href="/login"
          className="px-4 py-2 rounded-full text-[#2D2D2D] font-['Inter'] font-normal text-base leading-6 border border-gray-300 hover:bg-gray-100"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 rounded-full text-[#000000] font-['Inter'] font-normal text-base leading-6 border border-gray-300 hover:bg-gray-100"
        >
          Sign-up for Free
        </Link>
      </div>
    </header>
  );
}
