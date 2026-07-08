"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useLocale, usePortfolioContent } from "@/components/providers/AppProviders";
import type { Locale } from "@/lib/i18n";
import type { NavIconName } from "@/data/portfolio-types";

// Custom SVG Icons from the old model
function DockIcon({ name }: { name: NavIconName }) {
  const commonProps = {
    className: "h-[45%] w-[45%]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "home":
      return (
        <svg {...commonProps}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20h14V9.5" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "user":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 20a7 7 0 0 1 14 0" />
        </svg>
      );
    case "spark":
      return (
        <svg {...commonProps}>
          <path d="M12 3v5" />
          <path d="m8.5 11 3.5-3 3.5 3" />
          <path d="M8 15a4 4 0 1 1 8 0c0 2-1 3-2 4H10c-1-1-2-2-2-4Z" />
        </svg>
      );
    case "cap":
      return (
        <svg {...commonProps}>
          <path d="m3 9 9-4 9 4-9 4-9-4Z" />
          <path d="M7 11.5v4.2c0 .8 2.2 2.3 5 2.3s5-1.5 5-2.3v-4.2" />
          <path d="M21 10v5" />
        </svg>
      );
    case "stack":
      return (
        <svg {...commonProps}>
          <path d="M12 3 4 7l8 4 8-4-8-4Z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 17 8 4 8-4" />
        </svg>
      );
    case "projects":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="7" height="7" rx="1.5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" />
          <path d="M11 7h2a2 2 0 0 1 2 2v2" />
          <path d="M13 17h-2a2 2 0 0 1-2-2v-2" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...commonProps}>
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    default:
      return null;
  }
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

const DOCK_SIZE = 44;
const DOCK_MAG_SIZE = 68;
const DOCK_DISTANCE = 140;

function DockItem({
  href,
  isActive,
  mouseX,
  children,
}: {
  href: string;
  isActive: boolean;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  children: ReactNode;
}) {
  const itemRef = useRef<HTMLLIElement>(null);

  const distance = useTransform(mouseX, (value) => {
    const bounds = itemRef.current?.getBoundingClientRect();
    if (!bounds || !Number.isFinite(value)) return DOCK_DISTANCE + 1;
    return value - (bounds.left + bounds.width / 2);
  });

  const rawSize = useTransform(
    distance,
    [-DOCK_DISTANCE, -DOCK_DISTANCE / 2, 0, DOCK_DISTANCE / 2, DOCK_DISTANCE],
    [DOCK_SIZE, DOCK_SIZE + 6, DOCK_MAG_SIZE, DOCK_SIZE + 6, DOCK_SIZE],
  );

  const size = useSpring(rawSize, {
    stiffness: 300,
    damping: 25,
    mass: 0.2,
  });

  return (
    <li ref={itemRef} className="flex items-end">
      <motion.div style={{ width: size, height: size }}>
        <Link
          href={href}
          aria-current={isActive ? "page" : undefined}
          className={`flex h-full w-full items-center justify-center rounded-full transition-colors duration-200 ${
            isActive
              ? "border-2 border-primary bg-primary/15 text-primary"
              : "border border-transparent bg-muted/20 text-muted-foreground hover:text-foreground hover:bg-muted/40 backdrop-blur-md"
          }`}
        >
          {children}
        </Link>
      </motion.div>
    </li>
  );
}

function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();
  const content = usePortfolioContent();

  return (
    <div
      aria-label={content.ui.localeLabel}
      className="flex h-11 items-center gap-1 rounded-full border border-border/60 bg-background/80 px-1 shadow-sm backdrop-blur-xl"
    >
      {(["pt", "en", "es"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
            locale === item
              ? "bg-primary text-black"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const [mobileOpen, setMobileOpen] = useState(false);
  const content = usePortfolioContent();

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 hidden items-start justify-center pt-8 lg:flex">
        <nav
          aria-label="Primary navigation"
          className="flex items-end gap-3"
          onMouseMove={(event) => mouseX.set(event.clientX)}
          onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        >
          <ul className="flex h-[60px] items-end gap-2 overflow-visible rounded-full border border-border/60 bg-background/80 px-4 pb-2 shadow-lg backdrop-blur-xl">
            {content.navigation.map((item) => (
              <DockItem
                key={item.href}
                href={item.href}
                isActive={pathname === item.href}
                mouseX={mouseX}
              >
                <DockIcon name={item.icon} />
              </DockItem>
            ))}
          </ul>

          <LocaleSwitcher />
        </nav>
      </header>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 lg:hidden">
        <LocaleSwitcher />

        <button
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-primary text-black shadow-lg shadow-primary/25 transition hover:scale-105"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

            <motion.nav
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="absolute bottom-24 right-6 w-[calc(100%-3rem)] max-w-xs"
              onClick={(event) => event.stopPropagation()}
              aria-label="Mobile navigation"
            >
              <div className="overflow-hidden rounded-3xl border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur-xl">
                <ul className="space-y-1">
                  {content.navigation.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-4 rounded-2xl px-5 py-3.5 text-sm font-medium transition-colors ${
                          pathname === item.href
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <span className="flex h-8 w-8 items-center justify-center">
                          <DockIcon name={item.icon} />
                        </span>
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
