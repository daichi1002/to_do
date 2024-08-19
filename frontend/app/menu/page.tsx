/**
 * v0 by Vercel.
 * @see https://v0.dev/t/M8vy38oaPWX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Utensils } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href={`/`}>
            <h1 className="text-2xl font-bold">ひなたぼっこ</h1>
            <p className="text-sm">宮崎にあるゴルフ場併設の定食屋</p>
          </Link>
          <nav className="md:flex items-center gap-4">
            <Link
              href={`/menu`}
              className="hover:underline flex items-center space-x-1"
              prefetch={false}
            >
              <Utensils className="w-5 h-5" />
              <span className="text-base">Menu</span>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <img
              src="/placeholder.svg"
              alt="Grilled Salmon"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Grilled Salmon</h2>
              <p className="text-muted-foreground text-sm mb-2">
                Fresh salmon fillet grilled to perfection, served with a side of
                roasted vegetables.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$24.99</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <img
              src="/placeholder.svg"
              alt="Margherita Pizza"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Margherita Pizza</h2>
              <p className="text-muted-foreground text-sm mb-2">
                Classic Neapolitan-style pizza with fresh mozzarella, basil, and
                a tangy tomato sauce.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$16.99</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <img
              src="/placeholder.svg"
              alt="Beef Bourguignon"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Beef Bourguignon</h2>
              <p className="text-muted-foreground text-sm mb-2">
                Tender beef braised in a rich red wine sauce, served with
                buttered egg noodles.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$28.99</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <img
              src="/placeholder.svg"
              alt="Vegetable Stir-Fry"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Vegetable Stir-Fry</h2>
              <p className="text-muted-foreground text-sm mb-2">
                A colorful mix of fresh vegetables sautéed in a flavorful
                soy-based sauce, served over steamed rice.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$14.99</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <img
              src="/placeholder.svg"
              alt="Chicken Parmesan"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Chicken Parmesan</h2>
              <p className="text-muted-foreground text-sm mb-2">
                Breaded and fried chicken breast topped with marinara sauce and
                melted mozzarella, served with a side of pasta.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$21.99</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <img
              src="/placeholder.svg"
              alt="Chocolate Lava Cake"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Chocolate Lava Cake</h2>
              <p className="text-muted-foreground text-sm mb-2">
                Rich, decadent chocolate cake with a molten center, served warm
                with a scoop of vanilla ice cream.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$9.99</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <img
              src="/placeholder.svg"
              alt="Chocolate Lava Cake"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Chocolate Lava Cake</h2>
              <p className="text-muted-foreground text-sm mb-2">
                Rich, decadent chocolate cake with a molten center, served warm
                with a scoop of vanilla ice cream.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$9.99</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <img
              src="/placeholder.svg"
              alt="Chocolate Lava Cake"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Chocolate Lava Cake</h2>
              <p className="text-muted-foreground text-sm mb-2">
                Rich, decadent chocolate cake with a molten center, served warm
                with a scoop of vanilla ice cream.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$9.99</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <img
              src="/placeholder.svg"
              alt="Chocolate Lava Cake"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Chocolate Lava Cake</h2>
              <p className="text-muted-foreground text-sm mb-2">
                Rich, decadent chocolate cake with a molten center, served warm
                with a scoop of vanilla ice cream.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$9.99</span>
              </div>
            </div>
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
