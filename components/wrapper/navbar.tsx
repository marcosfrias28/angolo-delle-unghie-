"use client";
import Link from "next/link";
import { forwardRef, useContext, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import ModeToggle from "../mode-toggle";
import { BlocksIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Dialog, DialogClose } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";
import config from "@/config";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const components: { title: string; href: `#${string}`; description: string }[] =
  [
    {
      title: "Inizio",
      href: "#hero-section",
      description: "Sei pronto a prenotare un appuntamento?",
    },
    {
      title: "Chi sono",
      href: "#chi-sono",
      description: "Ti racconto di me. Conosciamoci meglio in questa sezione.",
    },
    {
      title: "Servizi",
      href: "#servizi",
      description:
        "Scopri cosa ho da offrire. In questa sezione troverai tutti i miei servizi.",
    },
    {
      title: "Galleria",
      href: "#galleria",
      description:
        "Sei curiosa di vedere i miei lavori? In questa sezione troverai alcune immagini.",
    },
    {
      title: "Stili",
      href: "#stili-unghie",
      description:
        "Scopri i miei stili preferiti e trova nuovi stili per le tue unghie.",
    },
    {
      title: "Banner",
      href: "#banner",
      description:
        "Semplicemente un banner con le nostre offerte speciali. Scopri come prenotare un appuntamento.",
    },
    {
      title: "Contatti e Recensioni",
      href: "#contact-reviews-footer",
      description:
        "Vuoi sapere di più o scrivere una recensione? Contattatami direttamente. Leggi le nostre recensioni",
    },
    {
      title: "FAQs",
      href: "#faqs",
      description: "Hai qualche domanda? Cerca qui una possibile risposta.",
    },
    {
      title: "Privacy Policy",
      href: "#footer",
      description:
        "La nostra politica sulla privacy. Scopri come gestire i tuoi dati personali.",
    },
  ];

export default function NavBar() {
  const path = usePathname();

  if (path.includes("/dashboard")) {
    return null;
  }

  const handleNavClick = (target: `#${string}`) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: 70,
      },
      ease: "power4.inOut",
    });
  };

  return (
    <div
      id="navbar"
      className=" flex min-w-full fixed justify-between p-2 border-b z-30 dark:bg-black dark:bg-opacity-60 bg-white/60 backdrop-blur-3xl"
    >
      <div className="flex justify-between w-full min-[825px]:hidden">
        <Dialog>
          <SheetTrigger className="p-2 transition">
            <Button
              size="icon"
              variant="ghost"
              className="w-4 h-4"
              aria-label="Open menu"
              asChild
            >
              <GiHamburgerMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>{config.websiteName}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Inizio
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link
                  href="/dashboard"
                  legacyBehavior
                  passHref
                  className="cursor-pointer"
                >
                  <Button variant="outline">Dashboard</Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        <ModeToggle />
      </div>
      <NavigationMenu>
        <NavigationMenuList className="max-[825px]:hidden flex gap-3 w-[100%] justify-between">
          <Link href="/" className="pl-2 flex items-center" aria-label="Home">
            <BlocksIcon aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem className="max-[825px]:hidden ml-5">
            <NavigationMenuTrigger className="dark:bg-black dark:bg-opacity-50">
              Sezioni
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-[400px] gap-3 p-4 lg:w-[500px] bg-softWhite-50 text-black dark:bg-black/10 dark:text-white">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={path !== "/" ? `/${component.href}` : undefined}
                    onClick={() => handleNavClick(component.href)}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="max-[825px]:hidden">
            <Link href="/dashboard" legacyBehavior passHref>
              <Button variant="ghost">Dashboard</Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-2 max-[825px]:hidden">
        <ModeToggle />
      </div>
    </div>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-black dark:text-white">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
