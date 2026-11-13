import { Logo } from '@/config/Logo';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default async function Footer() {
  'use cache';

  return (
    <footer className="bg-muted mt-20 md:py-8 lg:py-10">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <Link href="#" className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-semibold">{siteConfig?.name}</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm md:justify-end">
          <Link href="/" className="hover:underline hover:underline-offset-4">
            Home
          </Link>
          <Link href="#" className="hover:underline hover:underline-offset-4">
            About
          </Link>
          <Link
            href="/#pricing"
            className="hover:underline hover:underline-offset-4"
          >
            Pricing
          </Link>
          <Link href="#" className="hover:underline hover:underline-offset-4">
            Contact
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig?.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
