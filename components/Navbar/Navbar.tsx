// import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-[#f9f9f9]">
      <nav className="max-w-[55rem] mx-auto px-4 flex justify-between align-middle py-[20px]">
        <h1>
          <Link href="/" className="text-[1.5rem] text-[#407bff] font-bold">
            EMMate
          </Link>
        </h1>

        <ul className="flex gap-[20px] text-[1rem] text-[#3a3a3a] sm:items-center">
          <li className="sm:hidden">
            <Link href="/youTube" className="hover:text-[#407bff]">
              YouTube
            </Link>
          </li>
          <li>
            <Link
              href="/converter-youtube-to-MP3"
              className="hover:text-[#407bff]"
            >
              Converter YouTube to MP4
              {/* Converter YouTube to MP3 */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
