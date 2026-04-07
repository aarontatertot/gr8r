import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Main } from '@/components/elements/main'
import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FooterCategory, FooterLink, FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import { HeroSimpleLeftAligned } from '@/components/sections/hero-simple-left-aligned'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'

function PricingTier({ label, price, description }: { label: string; price: string; description: string }) {
  return (
    <div className="rounded-xl bg-olive-950/2.5 p-4 dark:bg-white/5">
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="text-sm font-medium text-olive-950 dark:text-white">{label}</span>
        <span className="text-sm text-olive-500 dark:text-olive-400">{price}</span>
      </div>
      <p className="mt-1 text-sm/6 text-olive-700 dark:text-olive-400">{description}</p>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <NavbarWithLogoActionsAndCenteredLinks
        id="navbar"
        links={
          <>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/services">Services</NavbarLink>
            <NavbarLink href="/pricing">Pricing</NavbarLink>
            <NavbarLink href="/writing">Writing</NavbarLink>
            <NavbarLink href="/contact" className="sm:hidden">
              Contact
            </NavbarLink>
          </>
        }
        logo={
          <NavbarLogo href="/">
            <span className="font-display text-xl font-medium text-olive-950 dark:text-white">gr8r</span>
          </NavbarLogo>
        }
        actions={
          <>
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
          </>
        }
      />

      <Main>
        {/* Hero */}
        <HeroSimpleLeftAligned
          id="hero"
          headline="How we work together."
          subheadline={
            <p>Three ways to engage — from a single workshop to ongoing strategic partnership.</p>
          }
        />

        {/* Senior Design Advisory */}
        <section className="py-16" id="advisory">
          <Container className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Eyebrow>Senior Design Advisory</Eyebrow>
                <Subheading>A thinking partner with a defensible point of view.</Subheading>
              </div>
              <Text className="max-w-3xl text-pretty">
                Ongoing advisory for a VP or Director of Design navigating the AI transition. Monthly working sessions,
                async access, and a thinking partner with a specific, defensible point of view on where design is going.
              </Text>
            </div>

            <div className="flex flex-col gap-3">
              <PricingTier
                label="Monthly retainer"
                price="$3,500/mo"
                description="Minimum 3-month commitment — 4 hours/month: calls, async review, written POVs"
              />
              <PricingTier
                label="Quarterly strategy session"
                price="$5,000"
                description="One deep work day, written recommendations"
              />
              <PricingTier
                label="Project engagement"
                price="$15,000–35,000"
                description="Defined scope, defined deliverable"
              />
            </div>

            <p className="text-sm/6 text-olive-700 dark:text-olive-400">
              <span className="font-medium text-olive-950 dark:text-white">Best for: </span>
              Series B–D companies or mid-size orgs with a design team but no VP of Design. Companies preparing for AI
              product launches.
            </p>
          </Container>
        </section>

        {/* AI Readiness Workshops */}
        <section className="py-16" id="workshops">
          <Container className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Eyebrow>AI Readiness Workshops</Eyebrow>
                <Subheading>We work on your actual design challenges together.</Subheading>
              </div>
              <Text className="max-w-3xl text-pretty">
                A structured working session with your design team or cross-functional product group. Not a lecture — we
                work on your actual design challenges together. Team leaves with a framework built for their context.
              </Text>
            </div>

            <div className="flex flex-col gap-3">
              <PricingTier
                label="Half-day"
                price="$4,500"
                description="Team diagnostic + futures framing + one challenge worked live"
              />
              <PricingTier
                label="Full day"
                price="$8,000"
                description="Above + capability mapping + 90-day action plan"
              />
              <PricingTier
                label="2-day deep dive"
                price="$14,000"
                description="Above + design artifact review + individual role briefs"
              />
            </div>

            <p className="text-sm/6 text-olive-700 dark:text-olive-400">
              <span className="font-medium text-olive-950 dark:text-white">Best for: </span>
              Design teams of 5–25 where AI is arriving faster than the team can respond.
            </p>
          </Container>
        </section>

        {/* Speaking & Facilitation */}
        <section className="py-16" id="speaking">
          <Container className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Eyebrow>Speaking & Facilitation</Eyebrow>
                <Subheading>Keynotes and panels from someone building this in real time.</Subheading>
              </div>
              <Text className="max-w-3xl text-pretty">
                Keynotes and panels on the future of UX, design leadership in the AI era, and what it means to build
                design teams for the next decade.
              </Text>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-olive-950 dark:text-white">Available talks</p>
                <ul className="flex flex-col gap-1.5 text-sm/6 text-olive-700 dark:text-olive-400">
                  <li>"The Interface Is Optional Now"</li>
                  <li>"What I Learned Running AI Training for 14 Designers"</li>
                  <li>"Two Futures: Designing for Delegation vs. Designing for Trust"</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <PricingTier
                label="Local/regional event"
                price="$2,500–4,000"
                description="Company events, regional conferences, leadership off-sites"
              />
              <PricingTier
                label="National conference keynote"
                price="$5,000–10,000+"
                description="Keynote slot at national design or product conferences"
              />
              <PricingTier
                label="Executive workshop"
                price="$6,000–8,000"
                description="Half-day facilitated session for leadership teams"
              />
            </div>
          </Container>
        </section>

        {/* CTA */}
        <CallToActionSimple
          id="cta"
          headline="Not sure which is right?"
          subheadline={<p>Start with a conversation. We can figure out the right fit together.</p>}
          cta={
            <ButtonLink href="/contact" size="lg">
              Get in touch
            </ButtonLink>
          }
        />
      </Main>

      <FooterWithLinkCategories
        id="footer"
        links={
          <>
            <FooterCategory title="gr8r">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterCategory>
            <FooterCategory title="Connect">
              <FooterLink href="https://tateux.com/writing">tateux.com</FooterLink>
            </FooterCategory>
          </>
        }
        fineprint="© 2025 gr8r. All rights reserved."
      />
    </>
  )
}
