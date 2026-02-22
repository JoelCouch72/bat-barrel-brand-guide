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
            subtitle="Logo variants, usage rules, and application guidance"
            dark
          />

          {/* The One Rule */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg mb-24">
            <h3 className="font-display text-lg text-logo-red tracking-wider mb-3">
              THE ONE RULE
            </h3>
            <p className="text-infield-tan leading-relaxed">
              The background of the logo must match the background it sits on.
              No exceptions. Every logo variant below includes specific guidance
              on which backgrounds it belongs on. If you remember nothing else
              from this guide, remember this.
            </p>
          </div>

          {/* --- PRIMARY LOGO --- */}
          <div className="mb-24">
            <div className="mb-8">
              <p className="font-display text-sm text-logo-red tracking-widest mb-1">
                PRIMARY LOGO
              </p>
              <h3 className="font-display text-3xl text-white tracking-wider mb-2">
                FULL LOGO
              </h3>
              <p className="text-infield-tan">
                The complete Bat &amp; Barrel mark
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 space-y-4">
                <div className="bg-brand-black border border-white/10 p-12 rounded-lg flex items-center justify-center">
                  <Image
                    src="/logo/full-logo-white.svg"
                    alt="Full logo — white variant for dark backgrounds"
                    width={400}
                    height={400}
                    className="max-h-64 w-auto"
                  />
                </div>
                <p className="text-white/40 text-xs text-center tracking-wider">
                  ON DARK BACKGROUNDS
                </p>

                <div className="bg-cream p-12 rounded-lg flex items-center justify-center">
                  <Image
                    src="/logo/full-logo-black.svg"
                    alt="Full logo — dark variant for light backgrounds"
                    width={400}
                    height={400}
                    className="max-h-64 w-auto"
                  />
                </div>
                <p className="text-white/40 text-xs text-center tracking-wider">
                  ON LIGHT BACKGROUNDS
                </p>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    WHAT IT IS
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    The full Bat &amp; Barrel mark &mdash; baseball, crossed
                    bats, and script wordmark. This is the primary identity and
                    should be the first choice whenever space and context allow.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    WHEN TO USE
                  </h4>
                  <ul className="text-infield-tan text-sm space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Facility signage and entrance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Website headers and hero sections
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Large-format print (posters, banners, wall graphics)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Anywhere the brand is being introduced for the first time
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    BACKGROUND RULES
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    Use the white variant on dark backgrounds (black, leather,
                    dark photography). Use the dark variant on light backgrounds
                    (cream, white, infield tan). Never place this logo on a red
                    background.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    MINIMUM SIZE
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    120px wide on screen. 1.5&quot; wide in print. The crossed
                    bats and stitching detail degrade at smaller sizes &mdash;
                    switch to the Wordmark or Stencil below that threshold.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- WORDMARK --- */}
          <div className="mb-24">
            <div className="mb-8">
              <p className="font-display text-sm text-logo-red tracking-widest mb-1">
                BRAND LOGO
              </p>
              <h3 className="font-display text-3xl text-white tracking-wider mb-2">
                WORDMARK
              </h3>
              <p className="text-infield-tan">The text-only mark</p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 space-y-4">
                <div className="bg-brand-black border border-white/10 p-10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/logo/bnb-logo-white.svg"
                    alt="Wordmark — white variant for dark backgrounds"
                    width={350}
                    height={120}
                    className="max-h-20 w-auto"
                  />
                </div>
                <p className="text-white/40 text-xs text-center tracking-wider">
                  ON DARK BACKGROUNDS
                </p>

                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/logo/bnb-logo-black.svg"
                    alt="Wordmark — self-contained black lockup"
                    width={600}
                    height={340}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-white/40 text-xs text-center tracking-wider">
                  SELF-CONTAINED BLACK LOCKUP
                </p>

                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/logo/bnb-logo-red.svg"
                    alt="Wordmark — self-contained red lockup"
                    width={600}
                    height={230}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-white/40 text-xs text-center tracking-wider">
                  SELF-CONTAINED RED LOCKUP
                </p>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    WHAT IT IS
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    The &quot;Bat &amp; Barrel&quot; script wordmark without the
                    baseball or bats. A streamlined alternative that carries the
                    brand voice through its hand-lettered character.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    WHEN TO USE
                  </h4>
                  <ul className="text-infield-tan text-sm space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Apparel and embroidery
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Social media profiles and cover images
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Medium-format applications where the full mark is too
                      detailed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Repeat touchpoints where brand recognition is established
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    BACKGROUND RULES
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    The transparent wordmark works on dark backgrounds. For other
                    contexts, use one of the self-contained lockups. The
                    <strong className="text-white"> black lockup</strong> places
                    the wordmark on a built-in black background for guaranteed
                    consistency. The
                    <strong className="text-white"> red lockup</strong> is the
                    only logo variant approved for a red background &mdash; use
                    it for accent moments where brand energy is needed.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    MINIMUM SIZE
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    100px wide on screen. 1&quot; wide in print. The script
                    remains legible at smaller sizes than the full logo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- STENCIL --- */}
          <div className="mb-24">
            <div className="mb-8">
              <p className="font-display text-sm text-logo-red tracking-widest mb-1">
                LOGO MARK
              </p>
              <h3 className="font-display text-3xl text-white tracking-wider mb-2">
                STENCIL
              </h3>
              <p className="text-infield-tan">The compact brand mark</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-black border border-white/10 p-10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/logo/stencil.png"
                      alt="Stencil on dark background"
                      width={150}
                      height={186}
                      className="max-h-36 w-auto"
                    />
                  </div>
                  <div className="bg-cream p-10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/logo/stencil.png"
                      alt="Stencil on light background"
                      width={150}
                      height={186}
                      className="max-h-36 w-auto"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-white/40 text-xs text-center tracking-wider">
                    ON DARK BACKGROUNDS
                  </p>
                  <p className="text-white/40 text-xs text-center tracking-wider">
                    ON LIGHT BACKGROUNDS
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    WHAT IT IS
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    A stylized script &quot;B&quot; derived from the wordmark.
                    The simplest expression of the Bat &amp; Barrel identity
                    &mdash; a single letterform that works at any size.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    WHEN TO USE
                  </h4>
                  <ul className="text-infield-tan text-sm space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Favicons and browser tabs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      App icons and social media avatars
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Watermarks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Embossed or debossed applications (leather, metal, fabric)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    BACKGROUND RULES
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    The stencil is a single-color outline mark. On dark
                    backgrounds, the white fill reads clearly. On light
                    backgrounds, the black outline carries the shape. Avoid
                    placing on busy photography without a solid background
                    behind it.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    MINIMUM SIZE
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    24px &mdash; this is the go-to mark at micro scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- TRAINING SUB-BRAND DIVIDER --- */}
          <div className="border-t border-white/10 pt-16 mt-8 mb-16">
            <h3 className="font-display text-2xl text-infield-tan tracking-wider text-center mb-2">
              TRAINING SUB-BRAND
            </h3>
            <p className="text-white/50 text-center text-sm max-w-2xl mx-auto">
              The following variants include the &quot;Baseball &amp; Softball
              Training Facility&quot; descriptor. Use these when the context
              requires clarifying what Bat &amp; Barrel is &mdash; particularly
              for audiences encountering the brand for the first time.
            </p>
          </div>

          {/* --- FULL TRAINING LOGO --- */}
          <div className="mb-24">
            <div className="mb-8">
              <p className="font-display text-sm text-logo-red tracking-widest mb-1">
                TRAINING VARIANT
              </p>
              <h3 className="font-display text-3xl text-white tracking-wider mb-2">
                FULL TRAINING LOGO
              </h3>
              <p className="text-infield-tan">
                Primary mark with facility descriptor
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 space-y-4">
                <div className="bg-brand-black border border-white/10 p-10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/logo/full-logo-training-white-txt.png"
                    alt="Full training logo — white text for dark backgrounds"
                    width={400}
                    height={400}
                    className="max-h-56 w-auto"
                  />
                </div>
                <p className="text-white/40 text-xs text-center tracking-wider">
                  ON DARK BACKGROUNDS
                </p>

                <div className="bg-cream p-10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/logo/full-logo-training-white.png"
                    alt="Full training logo — dark text for light backgrounds"
                    width={400}
                    height={400}
                    className="max-h-56 w-auto"
                  />
                </div>
                <p className="text-white/40 text-xs text-center tracking-wider">
                  ON LIGHT BACKGROUNDS
                </p>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    WHAT IT IS
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    The full Bat &amp; Barrel mark with &quot;Baseball &amp;
                    Softball Training Facility&quot; set beneath it. This
                    variant communicates both the brand identity and the nature
                    of the business in a single lockup.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    WHEN TO USE
                  </h4>
                  <ul className="text-infield-tan text-sm space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      First-impression contexts: trade shows, sponsorship
                      banners, directory listings
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Print advertising where the audience may not know the
                      brand
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Facility exterior signage
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-logo-red mt-0.5">&#8226;</span>
                      Letterhead and official documents
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    BACKGROUND RULES
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    Use the white-text variant on dark backgrounds. Use the
                    dark-text variant on light backgrounds. The background must
                    be a solid, exact color match. Do not float on photography
                    or gradients.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-sm text-white tracking-wider mb-2">
                    MINIMUM SIZE
                  </h4>
                  <p className="text-infield-tan text-sm leading-relaxed">
                    200px wide on screen. 2.5&quot; wide in print. The
                    descriptor text must remain legible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- TRAINING WORDMARK --- */}
          <div className="mb-24">
            <div className="mb-8">
              <p className="font-display text-sm text-logo-red tracking-widest mb-1">
                TRAINING VARIANT
              </p>
              <h3 className="font-display text-3xl text-white tracking-wider mb-2">
                TRAINING WORDMARK
              </h3>
              <p className="text-infield-tan">Wide-format training mark</p>
            </div>

            <div className="bg-cream p-10 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/logo/training-logo-black.png"
                alt="Training wordmark — wide format on light background"
                width={600}
                height={150}
                className="max-h-28 w-auto"
              />
            </div>
            <p className="text-white/40 text-xs text-center tracking-wider mb-8">
              ON LIGHT BACKGROUNDS
            </p>

            <div className="bg-white/5 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-sm text-white tracking-wider mb-2">
                      WHAT IT IS
                    </h4>
                    <p className="text-infield-tan text-sm leading-relaxed">
                      A wide-format rendering of the &quot;Bat &amp;
                      Barrel&quot; script wordmark optimized for horizontal
                      applications. This is a sub-brand variant intended for
                      training-specific materials.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display text-sm text-white tracking-wider mb-2">
                      WHEN TO USE
                    </h4>
                    <ul className="text-infield-tan text-sm space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="text-logo-red mt-0.5">&#8226;</span>
                        Banners and fence signs at the facility
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-logo-red mt-0.5">&#8226;</span>
                        Training program print materials and handouts
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-logo-red mt-0.5">&#8226;</span>
                        Wide-format digital ads (leaderboard, banner)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-logo-red mt-0.5">&#8226;</span>
                        Uniform or apparel applications where horizontal space
                        is available
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-sm text-white tracking-wider mb-2">
                      BACKGROUND RULES
                    </h4>
                    <p className="text-infield-tan text-sm leading-relaxed">
                      This variant is provided in dark colorway only. Place
                      exclusively on light backgrounds (cream, white, infield
                      tan). Do not attempt to invert or recolor.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display text-sm text-white tracking-wider mb-2">
                      MINIMUM SIZE
                    </h4>
                    <p className="text-infield-tan text-sm leading-relaxed">
                      250px wide on screen. 3&quot; wide in print. The wide
                      aspect ratio requires generous horizontal space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- BACKGROUND QUICK REFERENCE --- */}
          <div className="border-t border-white/10 pt-16">
            <h3 className="font-display text-xl text-white tracking-wider text-center mb-8">
              BACKGROUND QUICK REFERENCE
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-brand-black border border-white/10 p-6 rounded-lg">
                <h4 className="font-display text-sm text-white tracking-wider mb-4">
                  DARK BACKGROUNDS
                </h4>
                <ul className="text-infield-tan text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-logo-red mt-0.5">&#8226;</span>
                    Full Logo (white)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-logo-red mt-0.5">&#8226;</span>
                    Wordmark (white)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-logo-red mt-0.5">&#8226;</span>
                    Stencil
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-logo-red mt-0.5">&#8226;</span>
                    Full Training Logo (white text)
                  </li>
                </ul>
              </div>
              <div className="bg-cream p-6 rounded-lg">
                <h4 className="font-display text-sm text-brand-black tracking-wider mb-4">
                  LIGHT BACKGROUNDS
                </h4>
                <ul className="text-leather text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-logo-red mt-0.5">&#8226;</span>
                    Full Logo (dark)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-logo-red mt-0.5">&#8226;</span>
                    Stencil
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-logo-red mt-0.5">&#8226;</span>
                    Training Wordmark
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-logo-red mt-0.5">&#8226;</span>
                    Full Training Logo (dark text)
                  </li>
                </ul>
              </div>
              <div className="bg-logo-red p-6 rounded-lg">
                <h4 className="font-display text-sm text-white tracking-wider mb-4">
                  RED BACKGROUND
                </h4>
                <ul className="text-white/90 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-0.5">&#8226;</span>
                    Wordmark (red lockup) only
                  </li>
                </ul>
                <p className="text-white/60 text-xs mt-4 leading-relaxed">
                  No other logo variant is approved for red backgrounds.
                </p>
              </div>
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
