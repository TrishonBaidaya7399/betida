"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Crown,
  Calendar,
  ChevronUp,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import PromotionsSVG from "../svg-icons/promotions-svg";
import AffiliateSVG from "../svg-icons/affiliate-svg";
import BlogSVG from "../svg-icons/blog-svg";
import ForumSVG from "../svg-icons/forum-svg";
import VipSVG from "../svg-icons/vip-svg";
import SponsorShipSVG from "../svg-icons/sponsor-ship-svg";
import ResponsibleSVG from "../svg-icons/responsible-svg";
import LiveSupportSVG from "../svg-icons/live-support";
import { useLayoutStore } from "@/store/layout-store";
import AnimatedMenuIcon from "../global-components/menu-icon";
import CasinoSVG from "../svg-icons/casino-svg";
import SportsSVG from "../svg-icons/sports-svg";

export interface MenuItem {
  text: string;
  icon: any;
  href?: string;
  children?: MenuItem[];
}

export const menuItems1: MenuItem[] = [
  {
    text: "Promotions",
    icon: PromotionsSVG,
    children: [
      { text: "Welcome Bonus", icon: Star, href: "/" },
      { text: "Daily Rewards", icon: Calendar, href: "/" },
      { text: "VIP Rewards", icon: Crown, href: "/" },
    ],
  },
  { text: "Affiliate", icon: AffiliateSVG, href: "/" },
  { text: "VIP Club", icon: VipSVG, href: "/" },
  { text: "Blog", icon: BlogSVG, href: "/" },
  { text: "Forum", icon: ForumSVG, href: "/" },
];

export const menuItems2: MenuItem[] = [
  {
    text: "Sponsorships",
    icon: SponsorShipSVG,
    children: [
      { text: "Partner Program", icon: SponsorShipSVG, href: "/" },
      { text: "Brand Deals", icon: Briefcase, href: "/" },
    ],
  },
  { text: "Responsible Gambling", icon: ResponsibleSVG, href: "/" },
  { text: "Live Support", icon: LiveSupportSVG, href: "/" },
];

export const menuSections: { items: MenuItem[] }[] = [
  { items: menuItems1 },
  { items: menuItems2 },
];

export default function AppSidebar() {
  const { mobileOpen, toggleMobileOpen } =
    useLayoutStore();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileOpen) {
      setExpandedItems([]);
    }
  }, [mobileOpen]);

  const handleItemClick = (itemText: string) => {
    const isExpanded = expandedItems.includes(itemText);

    if (mobileOpen) {
      toggleMobileOpen();
      setTimeout(() => {
        if (!isExpanded) {
          setExpandedItems((prev) => [...prev, itemText]);
        }
      }, 300);
      return;
    }

    if (isExpanded) {
      setExpandedItems(expandedItems.filter((i) => i !== itemText));
    } else {
      setExpandedItems([...expandedItems, itemText]);
    }
  };

  return (
    <nav
      className={`hidden md:block z-50 sticky top-0 left-0 h-screen overflow-y-auto border-r border-border bg-sidebar shrink-0
      transition-all duration-300`}
    >
      {/* top bar */}
      <div className="sticky top-0 left-0 z-40 flex items-center p-4 bg-sidebar">
        {/* Desktop hamburger */}
        <div className="hidden md:block">
          <AnimatedMenuIcon isOpen={mobileOpen} onClick={toggleMobileOpen} />
        </div>

        {/* Casino / Sports buttons */}
        <div
          className={`flex gap-2 items-center transition-all duration-300 overflow-hidden 
            ${
              mobileOpen
                ? "max-w-auto md:max-w-0 pl-4 md:pl-0"
                : "max-w-auto md:max-w-50 pl-4"
            }`}
        >
          <Button
            href="/#"
            variant= "gray"
            asChild
          >
            Casino
          </Button>
          <Button
            href="/sports"
            variant="gray"
            asChild
          >
            Sports
          </Button>
        </div>
      </div>

      {/* =============== menu sections ==================== */}
      <div className="text-sidebar-foreground flex flex-col gap-2 p-4 text-sm">
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full flex items-start flex-col gap-2 overflow-hidden"
            >
              <Link
                className={`inline-block p-3 transition-all duration-300 rounded-lg 
                  ${
                    pathname === "/casino"
                      ? "bg-gradient-to-t from-purple-1 to-blue-1 hover:opacity-80"
                      : "bg-background-2 hover:bg-background-2/55"
                  }`}
                href="/casino"
              >
                <CasinoSVG />
              </Link>

              <Link
                className={`inline-block p-3 transition-all duration-300 rounded-lg 
                  ${
                    pathname === "/sports"
                      ? "bg-gradient-to-t from-cyan-1 to-green-1 hover:opacity-80"
                      : "bg-background-2 hover:bg-background-2/55"
                  }`}
                href="/sports"
              >
                <SportsSVG />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {menuSections.map((section, index) => (
          <div key={index} className="rounded-lg bg-background">
            {section.items.map((item) => {
              const isExpanded = expandedItems.includes(item.text);

              return (
                <div key={item.text}>
                  {item.children ? (
                    <button
                      onClick={() => handleItemClick(item.text)}
                      className={`flex gap-0.5 items-center justify-between cursor-pointer relative
                        w-full p-3 overflow-hidden transition-all duration-300
                        hover:bg-background-2
                        ${
                          isExpanded
                            ? "bg-background-2 rounded-t-lg"
                            : "bg-transparent rounded-lg"
                        }`}
                    >
                      <span className="flex items-center relative z-10">
                        {/* <item.icon className="size-5" /> */}
                        <item.icon className="fill-white" />
                        <span
                          className={`whitespace-nowrap overflow-hidden transition-all duration-300 
                            ${
                              mobileOpen
                                ? "max-w-auto md:max-w-0 pl-2 md:pl-0"
                                : "max-w-auto md:max-w-50 pl-2"
                            }`}
                        >
                          {item.text}
                        </span>
                      </span>
                      <span
                        className={
                          mobileOpen
                            ? "static md:absolute md:-right-0.5 md:top-1/2 md:-translate-y-1/2"
                            : "relative"
                        }
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown
                            className={`w-4 h-4 transform transition-transform duration-300 ${
                              mobileOpen ? "md:-rotate-90" : "rotate-0"
                            }`}
                          />
                        )}
                      </span>
                    </button>
                  ) : (
                    <div
                      className="flex gap-0.5 items-center justify-between relative
                        w-full p-3 overflow-hidden transition-all duration-300
                        hover:bg-background-2 rounded-lg cursor-pointer"
                    >
                      <span className="flex items-center relative z-10">
                        <item.icon className="size-5" />
                        <span
                          className={`whitespace-nowrap overflow-hidden transition-all duration-300 
                            ${
                              mobileOpen
                                ? "max-w-auto md:max-w-0 pl-2 md:pl-0"
                                : "max-w-auto md:max-w-50 pl-2"
                            }`}
                        >
                          {item.text}
                        </span>
                      </span>
                    </div>
                  )}

                  {/* children */}
                  {item.children && (
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className={`px-3 flex flex-col rounded-b-lg ${
                            isExpanded ? "bg-background" : "bg-transparent"
                          }`}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.text}
                              href={child.href || "#"}
                              className="flex rounded hover:bg-sidebar-hover gap-2 relative"
                            >
                              <span className="flex items-start relative py-1 pl-1">
                                <div className="relative size-6">
                                  <svg
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-[65%] stroke-2 stroke-background-2 h-9"
                                    viewBox="0 0 13 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M1 24V30C0.99995 32 1.4 35 5 35C8.6 35 10.5 35 13 35" />
                                    <path d="M1 0V24" />
                                  </svg>
                                </div>

                                <span
                                  className={`whitespace-nowrap overflow-hidden transition-all duration-300 
                                    text-white/55 cursor-pointer hover:text-white
                                    ${
                                      mobileOpen
                                        ? "max-w-auto md:max-w-0"
                                        : "max-w-auto md:max-w-50"
                                    }`}
                                >
                                  {child.text}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </nav>
  );
}