import logo from "@/assets/logo.svg";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-center sm:justify-between py-8 px-4 xl:px-14">
        <div className="flex justify-center items-center gap-4  xl:pl-16">
          <img src={logo} alt="" width={40} />
          <a href="#" className="font-bold text-2xl">
            Travlog
          </a>
        </div>
        <div className="hidden xl:flex items-center gap-[4.5rem] text-sm text-slate-500 font-semibold ">
          <a href="/">Home</a>
          <a href="/">Discover</a>
          <a href="/">Special Deals</a>
          <a href="/">Contact</a>
        </div>
        <div className="hidden sm:flex items-center gap-8 text-sm font-semibold">
          <a href="/">Log In</a>
          <a
            href="#"
            className="bg-[#5D50C6] p-[0.85rem] px-8 rounded-full text-white"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}
