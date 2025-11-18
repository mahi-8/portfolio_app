// Logo of the portfolio in header
import Link from "next/link";

export  default function Logo() {
  return (
    <Link href="/" className="block">
      <div className="relative w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-tr from-pink-500 via-purple-600 to-blue-600 overflow-hidden">
        {/* Inner glow */}
        <div className="absolute inset-0 bg-white/10 rounded-full blur-md" />
        {/* Text */}
        <span className="relative text-white text-2xl font-extrabold tracking-wider drop-shadow-lg">
          M
        </span>
      </div>
    </Link>
  );
}