'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import { Logo } from '@/config/Logo';
import { siteConfig } from '@/config/site';

type SessionUser = {
  name?: string;
  email?: string;
  profilePicture?: { url?: string };
};

const loginButtonClass =
  'inline-flex items-center gap-1 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // TODO: replace with real session data once auth is set up
  // (the original used next-auth's useSession, which is not installed).
  const user = null as SessionUser | null;

  // TODO: replace with the real sign-out call.
  const handleSignOut = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-default-200 bg-background/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-1">
          <Logo />
          <p className="font-bold text-inherit">{siteConfig.name}</p>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-4 sm:flex">
          {user ? (
            <Link
              href="/subscribe"
              className="h-10 rounded-full bg-linear-to-r from-[#6366F1] to-[#EC4899] px-6 text-sm font-semibold leading-10 text-white shadow-md shadow-indigo-500/30 transition-transform hover:scale-105 hover:shadow-lg"
            >
              Subscribe for $9.99
            </Link>
          ) : (
            <Link href="/login" className={loginButtonClass}>
              Login
              <Icon icon="solar:alt-arrow-right-linear" />
            </Link>
          )}
        </div>

        {/* Mobile toggle / login */}
        <div className="flex items-center sm:hidden">
          {user ? (
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="p-2"
            >
              <Icon
                icon={isMenuOpen ? 'tabler:x' : 'tabler:menu-2'}
                width={24}
              />
            </button>
          ) : (
            <Link href="/login" className={loginButtonClass}>
              Login
              <Icon icon="solar:alt-arrow-right-linear" />
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {user && isMenuOpen && (
        <div className="flex flex-col gap-4 border-t border-default-200 px-6 py-4 sm:hidden">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={user.profilePicture?.url || '/images/default_user.png'}
              alt={user.name ?? 'User'}
              referrerPolicy="no-referrer"
              className="h-10 w-10 rounded-full ring-2 ring-default-300"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user.name}</span>
              <span className="text-xs text-default-500">{user.email}</span>
            </div>
          </div>

          <Link
            href="/admin/dashboard"
            className="flex items-center gap-1 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            <Icon icon="tabler:user-cog" /> Admin Dashboard
          </Link>

          <Link
            href="/app/dashboard"
            className="flex items-center gap-1 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            <Icon icon="solar:widget-5-bold-duotone" /> App Dashboard
          </Link>

          <button
            type="button"
            onClick={handleSignOut}
            className="flex items-center gap-1 text-left text-lg text-danger"
          >
            <Icon icon="tabler:logout-2" /> Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
