import Image from "next/image";
import { Navigation } from "./components/Navigation";

// Color Swatch Component
function ColorSwatch({
  name,
  hex,
  bgClass,
  textClass = "text-white",
}: {
  name: string;
  hex: string;
  bgClass: string;
  textClass?: string;
}) {
  return (
    <div className="flex flex-col">
      <div className={`${bgClass} h-32 rounded-t-lg flex items-end p-4`}>
        <span className={`${textClass} font-display text-lg tracking-wider`}>
          {name}
        </span>
      </div>
      <div className="bg-white p-4 rounded-b-lg border border-gray-200">
        <p className="text-brand-black font-mono text-sm">{hex}</p>
      </div>
    </div>
  );
}

// Section Header Component
function SectionHeader({
  title,
  subtitle,
  dark = false,
}: {
  title: string;
  subtitle: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`font-display text-4xl tracking-wider mb-3 ${
          dark ? "text-white" : "text-brand-black"
        }`}
      >
        {title}
      </h2>
      <p className={dark ? "text-infield-tan" : "text-leather"}>{subtitle}</p>
    </div>
  );
}

export default function BrandGuide() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-brand-black min-h-screen flex items-center justify-center pt-16">
        <div className="text-center px-6">
          <Image
            src="/logo/full-logo-white.svg"
            alt="Bat & Barrel"
            width={400}
            height={200}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider mb-4">
            BRAND GUIDE
          </h1>
          <p className="text-infield-tan text-lg max-w-xl mx-auto">
            Identity guidelines for Bat & Barrel — a community-rooted training
            facility built by the community, for the community.
          </p>
        </div>
      </section>

      {/* Brand Intent Section */}
      <section id="brand" className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="BRAND INTENT"
            subtitle="What Bat & Barrel stands for"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl text-brand-black tracking-wider mb-4">
                WHAT WE ARE
              </h3>
              <ul className="space-y-3 text-leather">
                <li className="flex items-start gap-3">
                  <span className="text-logo-red mt-1">&#10003;</span>
                  Community-rooted — local owners, built for Upland and
                  surrounding communities — designed for athletes, teams, and
                  families
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-logo-red mt-1">&#10003;</span>
                  Athletic — built for year-round reps, focused on development,
                  fundamentals, and putting in real work
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-logo-red mt-1">&#10003;</span>
                  Modern training facility with timeless atmosphere — offering
                  top-tier equipment all under one roof
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-logo-red mt-1">&#10003;</span>
                  Accessible, not exclusive — built for players of all ages and
                  skill levels — from beginners to serious ballplayers
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl text-brand-black tracking-wider mb-4">
                WHAT WE AVOID
              </h3>
              <ul className="space-y-3 text-leather">
                <li className="flex items-start gap-3">
                  <span className="text-brand-black/40 mt-1">&#10007;</span>
                  Money-first messaging
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-black/40 mt-1">&#10007;</span>
                  Over-produced, slick design
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-black/40 mt-1">&#10007;</span>
                  Gimmicks
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-black/40 mt-1">&#10007;</span>
                  Exclusivity signals — this isn&apos;t a private club
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-8 bg-infield-light rounded-lg text-center">
            <p className="font-display text-xl text-brand-black tracking-wider">
              &quot;If it looks like it came from a franchise playbook,
              it&apos;s wrong.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section id="colors" className="py-24 px-6 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="COLOR PALETTE"
            subtitle="Core brand colors used across all materials"
            dark
          />

          <div className="mb-16">
            <h3 className="font-display text-xl text-infield-tan tracking-wider mb-6">
              PRIMARY COLORS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ColorSwatch name="BLACK" hex="#1a1a1a" bgClass="bg-brand-black" />
              <ColorSwatch
                name="LOGO RED"
                hex="#843127"
                bgClass="bg-logo-red"
              />
              <ColorSwatch
                name="LOGO RED DARK"
                hex="#6a2820"
                bgClass="bg-logo-red-dark"
              />
              <ColorSwatch
                name="LOGO RED LIGHT"
                hex="#a34234"
                bgClass="bg-logo-red-light"
              />
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl text-infield-tan tracking-wider mb-6">
              WARM NEUTRALS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ColorSwatch
                name="INFIELD TAN"
                hex="#d4c4a8"
                bgClass="bg-infield-tan"
                textClass="text-brand-black"
              />
              <ColorSwatch
                name="INFIELD LIGHT"
                hex="#e8dcc8"
                bgClass="bg-infield-light"
                textClass="text-brand-black"
              />
              <ColorSwatch
                name="LEATHER"
                hex="#5c4033"
                bgClass="bg-leather"
              />
              <ColorSwatch
                name="CREAM"
                hex="#faf7f2"
                bgClass="bg-cream"
                textClass="text-brand-black"
              />
            </div>
          </div>

          <div className="mt-16 p-8 bg-white/5 rounded-lg">
            <h3 className="font-display text-xl text-white tracking-wider mb-4">
              COLOR ROLES
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-infield-tan">
              <div>
                <p className="text-white font-medium mb-1">Black = Primary Dark</p>
                <p className="text-sm">Backgrounds, text, large areas</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Red = Accent Color</p>
                <p className="text-sm">Marks, emphasis, CTAs</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">
                  Warm Neutrals = Supporting
                </p>
                <p className="text-sm">Tans, leather, cream for texture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section id="typography" className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="TYPOGRAPHY"
            subtitle="Font families and their applications"
          />

          <div className="space-y-16">
            {/* Bebas Neue */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-leather text-sm mb-2">Display Font</p>
                  <h3 className="font-display text-5xl text-brand-black tracking-wider">
                    BEBAS NEUE
                  </h3>
                </div>
                <p className="text-leather text-sm">
                  Headlines, signage, hero text
                </p>
              </div>
              <p className="font-display text-2xl text-brand-black tracking-wider">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="font-display text-2xl text-brand-black tracking-wider">
                0123456789
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-leather text-sm">
                  <strong>Rules:</strong> Always uppercase, letter-spacing
                  0.05em+
                </p>
              </div>
            </div>

            {/* Pacifico */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-leather text-sm mb-2">Script Font</p>
                  <h3 className="font-script text-5xl text-brand-black">
                    Pacifico
                  </h3>
                </div>
                <p className="text-leather text-sm">
                  Taglines, signatures, playful moments
                </p>
              </div>
              <p className="font-script text-2xl text-brand-black">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="font-script text-2xl text-brand-black">
                0123456789
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-leather text-sm">
                  <strong>Rules:</strong> Use sparingly — one instance per
                  surface max
                </p>
              </div>
            </div>

            {/* Inter */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-leather text-sm mb-2">Body Font</p>
                  <h3 className="font-body text-4xl text-brand-black font-medium">
                    Inter
                  </h3>
                </div>
                <p className="text-leather text-sm">
                  Body copy, UI, captions
                </p>
              </div>
              <p className="font-body text-xl text-brand-black">
                ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
              </p>
              <p className="font-body text-xl text-brand-black">0123456789</p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-leather text-sm">
                  <strong>Rules:</strong> Neutral workhorse — never competes
                  with display type
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section id="logo" className="py-24 px-6 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="LOGO SYSTEM"
            subtitle="Logo variants and their applications"
            dark
          />

          {/* Full Logo — Primary, displayed large */}
          <div className="bg-white/5 p-12 rounded-lg text-center mb-16">
            <div className="h-64 flex items-center justify-center mb-8">
              <Image
                src="/logo/full-logo-white.svg"
                alt="Full Logo"
                width={500}
                height={500}
                className="max-h-56 w-auto"
              />
            </div>
            <h4 className="font-display text-xl text-white tracking-wider mb-2">
              FULL LOGO
            </h4>
            <p className="text-infield-tan text-sm">
              Primary logo — signage, headers, hero areas
            </p>
          </div>

          {/* Secondary Logo Variants */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* B-N-B Wordmark */}
            <div className="bg-white/5 p-8 rounded-lg text-center">
              <div className="h-32 flex items-center justify-center mb-6">
                <Image
                  src="/logo/bnb-logo-white.svg"
                  alt="B-N-B Wordmark"
                  width={250}
                  height={100}
                  className="max-h-24 w-auto"
                />
              </div>
              <h4 className="font-display text-lg text-white tracking-wider mb-2">
                B-N-B WORDMARK
              </h4>
              <p className="text-infield-tan text-sm">
                Apparel, social, medium applications
              </p>
            </div>

            {/* Stencil */}
            <div className="bg-white/5 p-8 rounded-lg text-center">
              <div className="h-32 flex items-center justify-center mb-6">
                <Image
                  src="/logo/stencil.png"
                  alt="Stencil"
                  width={120}
                  height={150}
                  className="max-h-24 w-auto"
                />
              </div>
              <h4 className="font-display text-lg text-white tracking-wider mb-2">
                STENCIL
              </h4>
              <p className="text-infield-tan text-sm">
                Favicons, app icons, small marks
              </p>
            </div>

            {/* Full Logo Training */}
            <div className="bg-cream p-8 rounded-lg text-center">
              <div className="h-32 flex items-center justify-center mb-6">
                <Image
                  src="/logo/full-logo-training-black.png"
                  alt="Full Logo Training"
                  width={200}
                  height={200}
                  className="max-h-24 w-auto"
                />
              </div>
              <h4 className="font-display text-lg text-brand-black tracking-wider mb-2">
                FULL LOGO TRAINING
              </h4>
              <p className="text-leather text-sm">
                Training programs, facilities, sub-brand
              </p>
            </div>
          </div>

          {/* Training Logo — wide format */}
          <div className="bg-white/5 p-8 rounded-lg text-center mb-16">
            <div className="h-40 flex items-center justify-center mb-6">
              <Image
                src="/logo/training-logo-black.png"
                alt="Training Logo"
                width={600}
                height={250}
                className="max-h-32 w-auto"
              />
            </div>
            <h4 className="font-display text-lg text-white tracking-wider mb-2">
              TRAINING LOGO
            </h4>
            <p className="text-infield-tan text-sm">
              Wide-format training mark — print materials, banners
            </p>
          </div>

          {/* Logo on Backgrounds */}
          <h3 className="font-display text-xl text-infield-tan tracking-wider mb-6">
            ON BACKGROUNDS
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-cream p-12 rounded-lg flex items-center justify-center">
              <Image
                src="/logo/full-logo-black.svg"
                alt="Full logo on light background"
                width={280}
                height={280}
                className="max-h-28 w-auto"
              />
            </div>
            <div className="bg-brand-black border border-white/10 p-12 rounded-lg flex items-center justify-center">
              <Image
                src="/logo/full-logo-white.svg"
                alt="Full logo on dark background"
                width={280}
                height={280}
                className="max-h-28 w-auto"
              />
            </div>
            <div className="bg-logo-red p-12 rounded-lg flex items-center justify-center">
              <Image
                src="/logo/bnb-logo-white.svg"
                alt="Wordmark on red background"
                width={280}
                height={100}
                className="max-h-16 w-auto"
              />
            </div>
          </div>

          {/* Self-Contained Lockups */}
          <h3 className="font-display text-xl text-infield-tan tracking-wider mb-6">
            LOCKUP VARIANTS
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/logo/bnb-logo-black.svg"
                alt="B-N-B Logo Black lockup"
                width={600}
                height={340}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/logo/bnb-logo-red.svg"
                alt="B-N-B Logo Red lockup"
                width={600}
                height={340}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Surfaces Section */}
      <section id="surfaces" className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="SURFACE SYSTEM"
            subtitle="The 3-layer model determines how much branding is applied"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Primary */}
            <div className="bg-brand-black p-8 rounded-lg">
              <div className="text-logo-red font-display text-5xl mb-4">1</div>
              <h3 className="font-display text-xl text-white tracking-wider mb-2">
                PRIMARY
              </h3>
              <p className="text-infield-tan text-sm mb-6">
                &quot;Establish Identity&quot;
              </p>
              <ul className="text-white/70 text-sm space-y-2">
                <li>Facility interior</li>
                <li>Website landing</li>
                <li>Core signage</li>
                <li>Staff apparel</li>
                <li>Business cards</li>
              </ul>
            </div>

            {/* Secondary */}
            <div className="bg-leather p-8 rounded-lg">
              <div className="text-infield-tan font-display text-5xl mb-4">
                2
              </div>
              <h3 className="font-display text-xl text-white tracking-wider mb-2">
                SECONDARY
              </h3>
              <p className="text-infield-light text-sm mb-6">
                &quot;Signal Identity&quot;
              </p>
              <ul className="text-white/70 text-sm space-y-2">
                <li>Flyers & banners</li>
                <li>Event signage</li>
                <li>Email signatures</li>
                <li>Social posts</li>
              </ul>
            </div>

            {/* Environmental */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <div className="text-leather font-display text-5xl mb-4">3</div>
              <h3 className="font-display text-xl text-brand-black tracking-wider mb-2">
                ENVIRONMENTAL
              </h3>
              <p className="text-leather text-sm mb-6">
                &quot;Create Atmosphere&quot;
              </p>
              <ul className="text-leather text-sm space-y-2">
                <li>Photography</li>
                <li>Social imagery</li>
                <li>Background textures</li>
                <li>Invoices & receipts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Imagery Section */}
      <section id="imagery" className="py-24 px-6 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="IMAGERY & TEXTURE"
            subtitle="Photography direction and visual treatment"
            dark
          />

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-display text-xl text-logo-red tracking-wider mb-4">
                USE
              </h3>
              <ul className="text-infield-tan space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-logo-red">&#10003;</span>
                  Real environments — facility, field, equipment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-logo-red">&#10003;</span>
                  Athletic context — action, training, gameplay
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-logo-red">&#10003;</span>
                  Grit, texture, light wear for authenticity
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-logo-red">&#10003;</span>
                  Warm color grading aligned with palette
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl text-white/60 tracking-wider mb-4">
                AVOID
              </h3>
              <ul className="text-white/40 space-y-3">
                <li className="flex items-start gap-3">
                  <span>&#10007;</span>
                  Stock imagery that feels staged
                </li>
                <li className="flex items-start gap-3">
                  <span>&#10007;</span>
                  Overly polished/glossy visuals
                </li>
                <li className="flex items-start gap-3">
                  <span>&#10007;</span>
                  Trend-based filters
                </li>
                <li className="flex items-start gap-3">
                  <span>&#10007;</span>
                  Generic sports clichés
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 bg-white/5 rounded-lg">
            <h3 className="font-display text-xl text-white tracking-wider mb-4">
              WHAT &quot;VINTAGE&quot; MEANS
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-infield-tan font-medium mb-1">Familiar</p>
                <p className="text-white/40 text-sm">
                  Feels like something you&apos;ve known
                </p>
              </div>
              <div>
                <p className="text-infield-tan font-medium mb-1">Proven</p>
                <p className="text-white/40 text-sm">Established, trusted</p>
              </div>
              <div>
                <p className="text-infield-tan font-medium mb-1">Timeless</p>
                <p className="text-white/40 text-sm">Won&apos;t date itself</p>
              </div>
              <div>
                <p className="text-infield-tan font-medium mb-1">Comfortable</p>
                <p className="text-white/40 text-sm">
                  Approachable, not precious
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-brand-black border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <Image
            src="/logo/full-logo-white.svg"
            alt="Bat & Barrel"
            width={120}
            height={60}
            className="mx-auto mb-4"
          />
          <p className="text-infield-tan text-sm">
            Bat & Barrel Brand Guide
          </p>
        </div>
      </footer>
    </main>
  );
}
