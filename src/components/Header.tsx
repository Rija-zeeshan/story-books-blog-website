// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#25008b] p-4 shadow-lg">
      <div className="text-2xl font-bold">
        <Link href="/" className="text-black hover:text-blue-600">Story Book&apos;s Blog</Link>
      </div>
    </header>
  );
};

export default Header;

