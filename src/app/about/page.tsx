import { ButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Main } from '@/components/elements/main'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FooterCategory, FooterLink, FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import { HeroSimpleLeftAligned } from '@/components/sections/hero-simple-left-aligned'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'

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
        <HeroSimpleLeftAligned
          id="hero"
          eyebrow="About gr8r"
          headline="Design leadership for the transition ahead."
          subheadline={
            <p>
              gr8r is a consulting practice for design leaders navigating the AI transition. We work with VPs and
              Directors of Design who are trying to understand what AI means for their teams, their craft, and their
              organizations — and who want a thought partner who has been in the room.
            </p>
          }
        />

        <CallToActionSimple
          id="who"
          eyebrow="Who we are"
          headline="Aaron Tate"
          subheadline={
            <p>
              Aaron is a UX Design Director with 20+ years building design organizations at companies large and small.
              He has led teams through platform shifts before — mobile, responsive, voice — and has spent the last
              several years focused on how AI changes the practice of UX and the role of design leadership.
              <br />
              <br />
              He writes about where design is going at tateux.com. gr8r is his advisory practice.
            </p>
          }
          cta={
            <Link href="https://tateux.com/writing">
              Read the writing <ArrowNarrowRightIcon />
            </Link>
          }
        />

        <CallToActionSimple
          id="approach"
          eyebrow="Our approach"
          headline="We work on real problems, not frameworks."
          subheadline={
            <p>
              gr8r is not a consultancy that arrives with a deck and leaves with a bill. We work alongside design
              leaders — in sessions, async, or both — on the specific challenges they are facing. That might be how to
              restructure a team, how to talk to a skeptical executive, or how to build an AI readiness practice that
              actually sticks.
            </p>
          }
          cta={
            <ButtonLink href="/contact" size="lg">
              Start a conversation
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
