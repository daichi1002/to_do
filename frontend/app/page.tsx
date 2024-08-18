"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bRnSzpEfGeb
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
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">ひなたぼっこ</h1>
            <p className="text-sm">Authentic Italian Cuisine</p>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link href={`/menu`} className="hover:underline" prefetch={false}>
              Menu
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 px-4 md:px-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">About us</h2>
            <p className="text-muted-foreground mb-6">
              宮崎大淀川ゴルフ場施設内に2024年6月1日に
              リニューアルオープンした定食屋です。
              <br />
              全て手づくりで丹精を込めて作られた料理はどこかあたたかく、
              優しい味わいを感じられます。
              <br />
              衛生面にも気を遣っていて、ゴルフプレイヤーやそれ以外の
              方でも気軽に立ち寄れる定食屋となっています。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  〒880-2101
                  <br />
                  宮崎県宮崎市跡江385-2
                </p>
                <Link
                  href="https://www.google.com/maps/place/%E5%87%9B/@31.9525181,131.393475,17z/data=!4m14!1m7!3m6!1s0x3538b12ee8362385:0xff5fe6c03d5f565a!2z5a6u5bSO5aSn5reA5bed44K044Or44OV5aC0!8m2!3d31.9525181!4d131.3960499!16s%2Fg%2F1tdk_9tl!3m5!1s0x3538b12ee83c00d9:0xc6eecf1d3be12cc7!8m2!3d31.9525516!4d131.3948684!16s%2Fg%2F1ptx3w089?entry=ttu"
                  className="mt-2 inline-flex items-center gap-1 text-sm hover:underline"
                  prefetch={false}
                >
                  <MapPinIcon className="w-4 h-4" />
                  Google Map
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground">080-5274-9054</p>
              </div>
            </div>
          </div>
          <div>
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-2xl mx-auto"
            >
              <CarouselContent>
                {images.map((t, index) => (
                  <CarouselItem key={index}>
                    <div
                      style={{
                        width: "100%",
                        height: "400px",
                        backgroundImage: `url(${t})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "8px",
                      }}
                    ></div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
          <p className="text-sm">&copy; ひなたぼっこ</p>
          <nav className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href={`/menu`} className="hover:underline" prefetch={false}>
              Menu
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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
