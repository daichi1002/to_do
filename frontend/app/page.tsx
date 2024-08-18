"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V799aqrAEBa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import * as React from "react";

export default function Component() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const images = [
    "/images/S__12189728.jpg",
    "/images/S__12189730.jpg",
    "/images/S__12189731.jpg",
    "/images/S__12189732.jpg",
    "/images/S__12189733.jpg",
    "/images/S__12189742.jpg",
    "/images/S__12189743.jpg",
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">ひなたぼっこ</h1>
            <p className="text-sm">Delicious food, cozy atmosphere</p>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Menu
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-10">
        <div className="col-span-2">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-2xl mx-auto"
          >
            <CarouselContent>
              {images.map((t, index) => (
                <CarouselItem key={index}>
                  <img
                    src={t}
                    alt="Acme Cafe"
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg object-cover"
                    style={{ aspectRatio: "800/400", objectFit: "cover" }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="mt-6 grid gap-4">
            <h2 className="text-2xl font-bold">Our Menu</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Breakfast</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>Pancakes</li>
                  <li>Eggs Benedict</li>
                  <li>Avocado Toast</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Lunch</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>Grilled Cheese</li>
                  <li>Salad</li>
                  <li>Soup of the Day</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Dinner</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>Pasta</li>
                  <li>Steak</li>
                  <li>Seafood</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Drinks</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Cocktails</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            <h2 className="text-2xl font-bold">Hours & Location</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Hours</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>Monday - Friday: 7am - 9pm</li>
                  <li>Saturday - Sunday: 8am - 10pm</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="mt-2 text-sm">123 Main Street, Anytown USA</p>
                <Link
                  href="#"
                  className="mt-2 inline-flex items-center gap-1 text-sm hover:underline"
                  prefetch={false}
                >
                  <MapPinIcon className="w-4 h-4" />
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Connect with Us</h2>
          <div className="mt-4 flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <InstagramIcon className="w-6 h-6" />
            </Link>
          </div>
          <Separator className="my-4" />
          <h2 className="text-lg font-semibold">Make a Reservation</h2>
          <form className="mt-4 grid gap-2">
            <Input type="text" placeholder="Name" className="w-full" />
            <Input type="email" placeholder="Email" className="w-full" />
            <Input type="tel" placeholder="Phone" className="w-full" />
            <Input type="date" placeholder="Date" className="w-full" />
            <Input type="time" placeholder="Time" className="w-full" />
            <Button type="submit" className="w-full">
              Reserve a Table
            </Button>
          </form>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2023 Acme Cafe. All rights reserved.</p>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
