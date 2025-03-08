const Navbar = () => {
  return (
    <header className="p-4 mx-auto max-w-7xl sticky top-0 z-50 bg-gray-50">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl tracking-tighter "> 
            <span className="text-green-600">Day</span>
            <span className="text-fuchsia-400">Care</span>
          </h1>
        </div>
        <a href="#" className="inline-block text-white font-bold bg-black px-8 py-3 rounded-full hover:bg-fuchsia-400 transition-colors duration-300">Contact Us</a>
      </nav>
    </header>
  );
};

export default Navbar;
