const Navbar = () => {
  return (
    <header className="py-4 mx-auto max-w-7xl sticky top-0 z-50 bg-gray-50">
      <nav className="h-20 flex justify-between items-center">
        <div className="h-full">
          <img className="h-full w-full object-cover" src="/logo.webp" alt="logo" />
        </div>
        <a href="#contact" className="inline-block text-white font-bold bg-black px-8 py-3 rounded-full hover:bg-[#F87F9E] transition-colors duration-300">Contact Us</a>
      </nav>
    </header>
  );
};

export default Navbar;
