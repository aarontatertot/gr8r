import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Main } from '@/components/elements/main'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { Feature, FeaturesThreeColumn } from '@/components/sections/features-three-column'
import { FooterCategory, FooterLink, FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import { HeroSimpleLeftAligned } from '@/components/sections/hero-simple-left-aligned'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'

export default function Page() {
  return (
    <>
      <NavbarWithLogoActionsAndCenteredLinks
        id="navbar"
        links={
          <>
            <NavbarLink href="/about">About</NavbarLink>
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
          headline="Design strategy for the AI transition."
          subheadline={
            <p>
              We help design leaders build teams, systems, and practices for a world where the interface is no longer
              the default.
            </p>
          }
          cta={
            <ButtonLink href="/contact" size="lg">
              Start a conversation
            </ButtonLink>
          }
        />

        {/* Services */}
        <FeaturesThreeColumn
          id="services"
          eyebrow="What we do"
          headline="Where we can help."
          subheadline={
            <p>
              Advisory, workshops, and speaking — structured for the specific challenges design leaders face right now.
            </p>
          }
          features={
            <>
              <Feature
                headline="Senior Design Advisory"
                subheadline={
                  <p>
                    Ongoing advisory for design leaders navigating the AI transition. Monthly sessions, async access,
                    strategic guidance.
                  </p>
                }
              />
              <Feature
                headline="AI Readiness Workshops"
                subheadline={
                  <p>
                    Structured working sessions with your design team. Not a lecture — we work on your actual
                    challenges.
                  </p>
                }
              />
              <Feature
                headline="Speaking & Facilitation"
                subheadline={
                  <p>
                    Keynotes and panels on the future of UX, design leadership in AI, and building design teams for the
                    next decade.
                  </p>
                }
              />
            </>
          }
        />

        {/* About */}
        <CallToActionSimple
          id="about"
          eyebrow="About"
          headline="Led by someone who's been building design organizations for 20 years."
          subheadline={
            <p>
              gr8r is led by Aaron Tate, a UX Design Director with 20+ years building design organizations. He writes
              about where design is going at tateux.com.
            </p>
          }
          cta={
            <Link href="https://tateux.com/writing">
              Read the thinking <ArrowNarrowRightIcon />
            </Link>
          }
        />

        {/* Contact CTA */}
        <CallToActionSimple
          id="contact-cta"
          headline="Ready to talk?"
          subheadline={
            <p>
              If you're a design leader trying to figure out what comes next — for your team, your practice, or your own
              role — let's have a conversation.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="/contact" size="lg">
                Get in touch
              </ButtonLink>
              <PlainButtonLink href="/about" size="lg">
                Learn more about gr8r <ArrowNarrowRightIcon />
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
