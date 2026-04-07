import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Main } from '@/components/elements/main'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { FooterCategory, FooterLink, FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'
import { Stat, StatsThreeColumnWithDescription } from '@/components/sections/stats-three-column-with-description'
import { TestimonialLargeQuote } from '@/components/sections/testimonial-with-large-quote'

export default function AboutPage() {
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
        <HeroSimpleCentered
          id="hero"
          headline="Built for design leaders who are serious about the AI transition."
          subheadline={
            <p>
              gr8r is a consulting practice for VPs and Directors of Design navigating a moment when the nature of
              design work — and design leadership — is fundamentally changing.
            </p>
          }
        />

        {/* About Aaron */}
        <StatsThreeColumnWithDescription
          id="about-aaron"
          heading="Aaron Tate"
          description={
            <>
              <p>
                Aaron is a UX Design Director with 20+ years building design organizations. He was the first UX hire
                at CHG Healthcare, where he built a 21-person design team from the ground up.
              </p>
              <p>
                He has led teams through platform shifts before — mobile, responsive, voice — and has spent the last
                several years focused specifically on what AI means for the practice of UX and the role of design
                leadership. He writes about where design is going at{' '}
                <Link href="https://tateux.com/writing">tateux.com</Link>.
              </p>
            </>
          }
        >
          <Stat stat="20+" text="Years leading design organizations through platform transitions." />
          <Stat stat="21" text="Person design team built from the ground up at CHG Healthcare." />
          <Stat stat="First" text="UX hire at CHG Healthcare." />
        </StatsThreeColumnWithDescription>

        {/* Why gr8r exists */}
        <CallToActionSimple
          id="why-gr8r"
          eyebrow="Why gr8r exists"
          headline="Most AI+design content is about tools. This is about what changes when AI takes over the execution layer."
          subheadline={
            <p>
              When AI handles execution, the design challenges that remain are governance, trust, and oversight —
              questions that no tool can answer. gr8r exists to help design leaders think through what changes, what
              stays, and what they need to build differently.
            </p>
          }
          cta={
            <PlainButtonLink href="https://tateux.com/writing" target="_blank" rel="noopener noreferrer" size="lg">
              Read the thinking at tateux.com <ChevronIcon />
            </PlainButtonLink>
          }
        />

        {/* Testimonial */}
        <TestimonialLargeQuote
          id="testimonial"
          quote={
            <p>
              Most AI content for designers is about tools. Aaron's work is about what changes when AI takes over the
              execution layer — the governance, trust, and oversight challenges that no tool can solve.
            </p>
          }
          img={
            <img
              src="https://assets.tailwindplus.com/avatars/10.webp?size=160"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="VP of Design"
          byline="Series C startup"
        />

        {/* CTA */}
        <CallToActionSimpleCentered
          id="call-to-action"
          headline="Ready to start a conversation?"
          subheadline={
            <p>
              If you're navigating the AI transition and want a thought partner who has been in the room — let's talk.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="/contact" size="lg">
                Get in touch
              </ButtonLink>
              <PlainButtonLink href="https://tateux.com/writing" target="_blank" rel="noopener noreferrer" size="lg">
                Read at tateux.com <ChevronIcon />
              </PlainButtonLink>
            </div>
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
              <FooterLink href="/writing">Writing</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterCategory>
            <FooterCategory title="Connect">
              <FooterLink href="https://tateux.com/writing">tateux.com</FooterLink>
            </FooterCategory>
          </>
        }
        fineprint="© 2026 gr8r. All rights reserved."
      />
    </>
  )
}
