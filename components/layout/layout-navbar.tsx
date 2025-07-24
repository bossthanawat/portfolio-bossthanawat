'use client';
import Link, { LinkProps } from 'next/link';
import { PAGE_PATH } from '../../lib/constants';
import { ClassValue } from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navConfig = [
  {
    label: 'About',
    href: PAGE_PATH.ABOUT,
  },
  {
    label: 'Blog',
    href: PAGE_PATH.OUT_PATH.BLOG_MEDIUM,
    newTab: true,
  },
];

const LayoutNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const RenderResumeButton = () => {
    return (
      <div
        className={cn('rounded-md border-2 border-slate-900 hover:scale-100')}
        onClick={() => setOpen(false)}
      >
        <LinkTypography
          styleHighlight="bg-primary"
          href={PAGE_PATH.CONTACT}
        >
          <span className="relative flex items-center justify-center gap-2">
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path
                fill="currentColor"
                d="M6.188 17.288L5.5 16.6L15.58 6.5H6.289v-1h11v11h-1V7.208z"
              ></path>
            </svg>
          </span>
        </LinkTypography>
      </div>
    );
  };

  return (
    <>
      {/* <div className='absolute top-0 w-full h-full'> */}
      <div className="top-0 z-50 mx-auto container p-0 md:sticky md:top-4">
        <nav aria-label="Main navigation">
          {/* [box-shadow:5px_5px_rgb(82_82_82)] */}
          <div className="flex flex-row items-center justify-between rounded-b-lg px-4 py-2 md:m-4 md:items-center md:rounded-xl bg-white/90 backdrop-blur-sm drop-shadow-lg">
            <Link className="font-bold text-lg" href={'/'}>
              {/* <AnimatedLetters
                title="boss_thanawat"
                staggerChildren={0.05}
                delayChildren={0}
              /> */}
              boss_thanawat
            </Link>
            {/* D */}
            <div className="relative md:flex hidden gap-3 items-center ">
              {navConfig.map((item, index) => (
                <LinkTypography
                  key={index}
                  href={item.href}
                  isCurrentPath={pathname === item.href}
                  newTab={item.newTab}
                  styleHighlight="bg-primary"
                >
                  {item.label}
                </LinkTypography>
              ))}
              <RenderResumeButton />
            </div>
            {/* M  */}
            <button
              aria-label="Open Menu"
              className="block p-2 text-2xl text-slate-800 md:hidden"
              onClick={() => setOpen(true)}
            >
              <IconHambuger />
            </button>
          </div>
        </nav>
      </div>
      <div
        className={cn(
          'fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden',
          open ? 'translate-x-0' : 'translate-x-[100%]'
        )}
      >
        <button
          aria-label="Close menu"
          aria-expanded={open}
          className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden"
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
            />
          </svg>
        </button>
        <Link
          className="font-bold text-lg"
          href={'/'}
          onClick={() => setOpen(false)}
        >
          boss_thanawat
        </Link>
        {navConfig.map((item, index) => (
          <LinkTypography
            key={index}
            href={item.href}
            onClick={() => setOpen(false)}
            isCurrentPath={pathname === item.href}
            newTab={item.newTab}
            styleHighlight="bg-primary"
          >
            {item.label}
          </LinkTypography>
        ))}
        <RenderResumeButton />
      </div>
      {/* </div> */}
    </>
  );
};

export default LayoutNavbar;

type LinkTypographyProps = {
  newTab?: boolean;
  styleHighlight?: ClassValue;
  isCurrentPath?: boolean;
  children: React.ReactNode;
} & LinkProps;
const LinkTypography = ({
  isCurrentPath,
  styleHighlight,
  newTab,
  children,
  href,
  ...props
}: LinkTypographyProps) => {
  return (
    <Link
      {...props}
      className="font-bold md:font-medium text-lg md:text-base group relative block overflow-hidden rounded px-3 py-1 text-slate-900"
      href={href}
      rel={newTab ? 'noopener noreferrer' : undefined}
      target={newTab ? '_blank' : undefined}
    >
      <span
        className={cn(
          'absolute inset-0 z-0 h-full rounded transition-transform duration-300 ease-in-out group-hover:translate-y-0',
          'bg-primary',
          styleHighlight,
          isCurrentPath ? 'translate-y-7' : 'translate-y-full'
        )}
      ></span>
      <div className="relative">{children}</div>
    </Link>
  );
};

const IconHambuger = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  );
};
