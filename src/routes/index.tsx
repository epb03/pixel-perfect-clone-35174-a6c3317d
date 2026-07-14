import { createFileRoute } from "@tanstack/react-router";
import {
  Truck, Tag, RotateCcw, CreditCard, Headphones, Search, Heart, User, ShoppingBag,
  Star, ChevronLeft, ChevronRight, ChevronDown, Menu, X, Facebook, Instagram, Twitter, Youtube, Phone, Mail, Shield,
} from "lucide-react";
import { useState } from "react";

import heroImg from "@/assets/hero-livingroom.jpg";
import rugModern from "@/assets/rug-modern.jpg";
import rugTraditional from "@/assets/rug-traditional.jpg";
import rugBerber from "@/assets/rug-berber.jpg";
import rugBoho from "@/assets/rug-boho.jpg";
import rugScandi from "@/assets/rug-scandi.jpg";
import rugVintage from "@/assets/rug-vintage.jpg";
import rugShaggy from "@/assets/rug-shaggy.jpg";
import roomLiving from "@/assets/room-living.jpg";
import roomBedroom from "@/assets/room-bedroom.jpg";
import roomDining from "@/assets/room-dining.jpg";
import roomHallway from "@/assets/room-hallway.jpg";
import roomKitchen from "@/assets/room-kitchen.jpg";
import roomOutdoor from "@/assets/room-outdoor.jpg";

export const Route = createFileRoute("/")({ component: Index });


const rooms = [
  { name: "Living Room", img: roomLiving },
  { name: "Bedroom", img: roomBedroom },
  { name: "Dining Room", img: roomDining },
  { name: "Hallway", img: roomHallway },
  { name: "Kitchen", img: roomKitchen },
  { name: "Outdoor", img: roomOutdoor },
];

const styles = [
  { name: "Modern Rugs", img: rugModern },
  { name: "Traditional Rugs", img: rugTraditional },
  { name: "Boho Rugs", img: rugBoho },
  { name: "Scandinavian Rugs", img: rugScandi },
  { name: "Vintage Rugs", img: rugVintage },
  { name: "Shaggy Rugs", img: rugShaggy },
];

const colours = [
  { name: "Cream", hex: "#F5EEDC" },
  { name: "Grey", hex: "#B7B7B7" },
  { name: "Beige", hex: "#D9C4A3" },
  { name: "Blue", hex: "#4A6C89" },
  { name: "Green", hex: "#7A8B5F" },
  { name: "Black", hex: "#1A1A1A" },
  { name: "Terracotta", hex: "#C1633D" },
  { name: "Pink", hex: "#E5B8B8" },
  { name: "Multi", hex: "linear-gradient(135deg,#c1633d,#7a8b5f,#4a6c89,#e5b8b8)" },
];

const bestSellers = [
  { name: "Orion Abstract Rug", price: "£79.99", img: rugModern, reviews: 128, stars: 5 },
  { name: "Himalayan Wool Rug", price: "£149.99", img: rugTraditional, reviews: 96, stars: 4 },
  { name: "Persian Medallion Rug", price: "£129.99", img: rugVintage, reviews: 87, stars: 5 },
  { name: "Flair Abstract Rug", price: "£99.99", img: rugBoho, reviews: 74, stars: 5 },
  { name: "Nomadic Berber Rug", price: "£109.99", img: rugBerber, reviews: 65, stars: 5 },
];

const featured = [
  { title: "Washable Rugs", subtitle: "Stylish & Practical", img: roomLiving },
  { title: "Wool Rugs", subtitle: "Natural & Durable", img: rugTraditional },
  { title: "New Arrivals", subtitle: "Fresh Styles", img: roomBedroom },
];

const brands = ["Louis De Poortere", "Asiatic London", "think rugs", "Origins Rugs", "Flair Rugs", "Mastercraft"];

const navLinks = [
  { label: "Living Room", href: "#" },
  { label: "Bedroom", href: "#" },
  { label: "Dining Room", href: "#" },
  { label: "Hallway", href: "#" },
  { label: "Kitchen", href: "#" },
  { label: "Outdoor", href: "#" },
  {
    label: "Rugs by Style",
    href: "#",
    children: styles.map((s) => ({ label: s.name, href: "#" })),
  },
  {
    label: "Rugs by Colour",
    href: "#",
    children: colours.map((c) => ({ label: c.name, href: "#" })),
  },
  {
    label: "Brands",
    href: "#",
    children: brands.map((b) => ({ label: b, href: "#" })),
  },
];

const reviews = [
  { name: "Emma L.", text: "Beautiful rug, excellent quality and fast delivery. It looks perfect in our living room!" },
  { name: "James T.", text: "The Rug Shop UK has the best selection and prices. Highly recommended!" },
  { name: "Sarah M.", text: "Great customer service and the rug is even more stunning in person. Love it!" },
];

function Stars({ n = 5, size = 12 }: { n?: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className={i < n ? "fill-[var(--gold)] text-[var(--gold)]" : "fill-muted text-muted"} strokeWidth={0} />
      ))}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:py-12">
      <h2 className="section-title section-title-underline mx-auto w-fit mb-8">{title}</h2>
      {children}
    </section>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top strip */}
      <div className="bg-[var(--topbar)] text-[var(--topbar-foreground)] text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Truck size={14} /> Free UK Delivery on All Orders</span>
            <span className="flex items-center gap-1.5"><Tag size={14} /> Price Match Promise</span>
            <span className="flex items-center gap-1.5"><CreditCard size={14} /> Klarna & Clearpay Available</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <span className="text-white/80">Excellent</span>
            <div className="flex bg-[#00B67A] px-1 py-0.5 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-white text-white" strokeWidth={0} />)}
            </div>
            <span>4.8 out of 5</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-4">
          <button className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
          <a href="/" className="shrink-0">
            <div className="font-serif text-lg md:text-xl font-semibold tracking-wide leading-none">THE RUG SHOP</div>
            <div className="text-[10px] tracking-[0.4em] text-muted-foreground mt-0.5 border-t border-[var(--gold)] pt-0.5">UK</div>
          </a>
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <input type="search" placeholder="Search for rugs, styles, colours..." className="w-full border rounded-sm pl-4 pr-11 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
              <button className="absolute right-0 top-0 h-full px-3" aria-label="Search"><Search size={18} /></button>
            </div>
          </div>
          <nav className="ml-auto flex items-center gap-5 text-sm">
            <button className="hidden md:flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors"><Heart size={18} /><span>Wishlist</span></button>
            <button className="hidden md:flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors"><User size={18} /><span>Account</span></button>
            <button className="flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors relative">
              <ShoppingBag size={18} /><span className="hidden md:inline">Basket</span>
              <span className="absolute -top-1.5 md:-top-2 -right-2 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
          </nav>
        </div>
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <input type="search" placeholder="Search rugs..." className="w-full border rounded-sm pl-4 pr-11 py-2 text-sm" />
            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <nav className="hidden md:block border-t">
          <ul className="mx-auto max-w-7xl px-4 flex items-center justify-center gap-8 text-[13px] font-medium tracking-wide py-3">
            {navLinks.map((l) => (
              <li key={l}><a href="#" className="hover:text-[var(--gold)] transition-colors uppercase">{l}</a></li>
            ))}
            <li><a href="#" className="text-[var(--sale)] font-semibold uppercase">Sale</a></li>
          </ul>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-serif text-lg">Menu</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
          </div>
          <ul className="p-4 space-y-3 text-sm">
            {[...navLinks, "Sale"].map((l) => (
              <li key={l}><a href="#" className="block py-2 border-b">{l}</a></li>
            ))}
          </ul>
        </div>
      )}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[380px] md:h-[520px]">
          <img src={heroImg} alt="Luxury rug in a modern living room" width={1600} height={900} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 h-full flex items-center">
            <div className="max-w-xl text-white">
              <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/80 mb-3">Luxury Rugs</p>
              <h1 className="font-serif text-4xl md:text-6xl leading-tight">Designed for<br />Beautiful Homes</h1>
              <p className="mt-4 text-sm md:text-base text-white/85 max-w-md">Discover our exclusive collection of premium rugs for every space.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center bg-black text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-black/85 transition-colors">Shop Now</a>
                <a href="#" className="inline-flex items-center bg-white/10 backdrop-blur border border-white text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors">Explore Collections</a>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#c9a56a","#e5b8b8","#7a8b5f","#4a6c89","#d9c4a3"].map((c,i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{background:c}} />
                  ))}
                </div>
                <div className="text-xs">
                  <Stars n={5} size={11} />
                  <div className="text-white/90 mt-0.5">50,000+ Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section className="border-y bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-5 grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
          {[
            { icon: Truck, title: "Free UK Delivery", sub: "On All Orders" },
            { icon: Tag, title: "Price Match Promise", sub: "We Match Any Price" },
            { icon: RotateCcw, title: "Easy Returns", sub: "30 Day Returns" },
            { icon: CreditCard, title: "Klarna & Clearpay", sub: "Buy Now, Pay Later" },
            { icon: Headphones, title: "UK Customer Support", sub: "Mon – Sat (9AM – 6PM)" },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <f.icon size={26} strokeWidth={1.4} className="shrink-0" />
              <div>
                <div className="font-semibold uppercase tracking-wide">{f.title}</div>
                <div className="text-muted-foreground">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Section title="Shop by Room">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {rooms.map((r) => (
            <a key={r.name} href="#" className="group text-center">
              <div className="aspect-square overflow-hidden border border-border">
                <img src={r.img} alt={r.name} width={400} height={400} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-3 text-xs tracking-[0.15em] uppercase font-medium">{r.name}</div>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Shop by Style">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {styles.map((s) => (
            <a key={s.name} href="#" className="group">
              <div className="aspect-square overflow-hidden border border-border relative">
                <img src={s.img} alt={s.name} width={400} height={400} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 py-1.5 text-center text-[10px] tracking-[0.15em] uppercase font-semibold">
                  {s.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Shop by Colour">
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 max-w-4xl mx-auto">
          {colours.map((c) => (
            <a key={c.name} href="#" className="group flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border shadow-sm group-hover:scale-105 transition-transform" style={{ background: c.hex }} />
              <div className="mt-2 text-[10px] tracking-[0.15em] uppercase font-medium">{c.name}</div>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Featured Collections">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((f) => (
            <a key={f.title} href="#" className="group relative overflow-hidden aspect-[4/2.4]">
              <img src={f.img} alt={f.title} width={800} height={480} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <div className="text-[10px] tracking-[0.35em] uppercase">{f.title}</div>
                <h3 className="font-serif text-2xl md:text-3xl mt-1">{f.subtitle}</h3>
                <span className="mt-4 bg-black text-white text-xs tracking-widest uppercase px-5 py-2 group-hover:bg-white group-hover:text-black transition-colors">Shop Now</span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Best Sellers">
        <div className="relative">
          <button className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border shadow items-center justify-center hover:bg-muted" aria-label="Previous"><ChevronLeft size={18} /></button>
          <button className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border shadow items-center justify-center hover:bg-muted" aria-label="Next"><ChevronRight size={18} /></button>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {bestSellers.map((p) => (
              <a key={p.name} href="#" className="group">
                <div className="relative aspect-square overflow-hidden border border-border bg-muted">
                  <img src={p.img} alt={p.name} width={400} height={400} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white" aria-label="Wishlist"><Heart size={14} /></button>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">From {p.price}</div>
                  <div className="mt-1 flex flex-col items-center gap-0.5">
                    <Stars n={p.stars} />
                    <span className="text-[10px] text-muted-foreground">({p.reviews})</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Why Choose The Rug Shop UK?">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {[
            { icon: ShoppingBag, title: "25,000+ Rugs", sub: "Huge Collection" },
            { icon: Truck, title: "Free UK Delivery", sub: "Fast & Reliable" },
            { icon: Tag, title: "Price Match", sub: "We Match Any Price" },
            { icon: Star, title: "4.8/5 Reviews", sub: "Trusted by Thousands" },
            { icon: RotateCcw, title: "30 Day Returns", sub: "Shop With Confidence" },
            { icon: Shield, title: "Secure Shopping", sub: "Safe & Protected" },
          ].map((v) => (
            <div key={v.title} className="flex flex-col items-center gap-2">
              <v.icon size={30} strokeWidth={1.3} />
              <div className="text-sm font-semibold">{v.title}</div>
              <div className="text-xs text-muted-foreground">{v.sub}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Designer Brands">
        <div className="flex items-center justify-between gap-4 md:gap-8 overflow-x-auto">
          {brands.map((b) => (
            <div key={b} className="shrink-0 font-serif italic text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors px-4">{b}</div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <div className="bg-muted p-6 md:p-8 flex flex-col justify-center md:col-span-1">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Room Inspiration</div>
            <h3 className="font-serif text-2xl mt-2">See how our rugs transform spaces</h3>
            <a href="#" className="mt-4 inline-block border border-foreground px-4 py-2 text-xs tracking-widest uppercase w-fit hover:bg-foreground hover:text-background transition-colors">Explore Rooms</a>
          </div>
          {[roomLiving, roomDining, roomBedroom, roomHallway].map((img, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden">
              <img src={img} alt="Room inspiration" width={400} height={300} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      <Section title="Customer Love">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="border bg-card p-6 text-center">
              <div className="flex justify-center"><Stars n={5} size={14} /></div>
              <p className="mt-3 text-sm text-muted-foreground italic">"{r.text}"</p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-muted grid place-items-center text-xs font-semibold">{r.name[0]}</div>
                <div className="text-xs font-semibold">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <div className="bg-muted p-6 flex flex-col justify-center col-span-2 md:col-span-1">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Follow us on Instagram</div>
            <h3 className="font-serif text-xl mt-2">#TheRugShopUK</h3>
            <p className="text-xs text-muted-foreground mt-2">Get inspired by our beautiful customer homes.</p>
            <a href="#" className="mt-3 text-xs tracking-widest uppercase underline">Follow Us</a>
          </div>
          {[roomLiving, roomBedroom, roomDining, roomHallway].map((img, i) => (
            <a key={i} href="#" className="aspect-square overflow-hidden group relative">
              <img src={img} alt="Instagram post" width={400} height={400} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors grid place-items-center">
                <Instagram size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <Section title="Buying Guides & Advice">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { t: "How to Choose the Right Rug Size", img: roomLiving },
            { t: "Rug Placement Guide", img: roomDining },
            { t: "Rug Care & Cleaning Tips", img: rugBerber },
          ].map((g) => (
            <a key={g.t} href="#" className="flex items-center gap-4 border p-3 hover:bg-muted transition-colors">
              <img src={g.img} alt={g.t} width={120} height={90} loading="lazy" className="w-28 h-20 object-cover shrink-0" />
              <div>
                <div className="text-sm font-semibold">{g.t}</div>
                <div className="text-xs text-[var(--gold)] mt-1 tracking-widest uppercase">Read Guide →</div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden">
        <img src={rugBerber} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center text-white">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl">Get 10% off your first order</h3>
            <p className="text-sm text-white/85 mt-2">Join our newsletter for exclusive offers, new arrivals and style inspiration.</p>
          </div>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required className="flex-1 px-4 py-3 text-sm text-foreground bg-white focus:outline-none" />
            <button className="bg-black text-white px-6 text-xs tracking-widest uppercase hover:bg-black/85">Subscribe</button>
          </form>
        </div>
      </section>

      <footer className="bg-[var(--topbar)] text-[var(--topbar-foreground)] mt-4">
        <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-lg">THE RUG SHOP UK</div>
            <p className="text-white/70 text-xs mt-3">Your one-stop destination for beautiful, high-quality rugs.</p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={16} /></a>
            </div>
          </div>
          {[
            { title: "Shop", items: ["All Rugs", "Rugs by Room", "Rugs by Style", "Rugs by Colour", "Sale"] },
            { title: "Customer Service", items: ["Delivery Information", "Returns & Refunds", "Price Match Promise", "FAQs", "Contact Us"] },
            { title: "About Us", items: ["About The Rug Shop UK", "Our Brands", "Sustainability", "Blog", "Careers"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="uppercase tracking-widest text-xs font-semibold mb-3">{col.title}</div>
              <ul className="space-y-2 text-white/75 text-xs">
                {col.items.map((i) => <li key={i}><a href="#" className="hover:text-white">{i}</a></li>)}
              </ul>
            </div>
          ))}
          <div>
            <div className="uppercase tracking-widest text-xs font-semibold mb-3">Contact Us</div>
            <ul className="space-y-2 text-white/75 text-xs">
              <li>Mon – Sat: 9AM – 6PM</li>
              <li className="flex items-center gap-2"><Phone size={12} /> 020 1234 5678</li>
              <li className="flex items-center gap-2"><Mail size={12} /> hello@therugshopuk.co.uk</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
            <div>© 2026 The Rug Shop UK. All Rights Reserved.</div>
            <div className="flex items-center gap-2">
              {["VISA", "MC", "AMEX", "PayPal", "Klarna", "Clearpay"].map((p) => (
                <span key={p} className="bg-white text-black text-[10px] font-semibold px-2 py-1 rounded-sm">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
