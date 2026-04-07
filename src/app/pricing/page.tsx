import { ButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { FAQsAccordion, Faq } from '@/components/sections/faqs-accordion'
import { FooterCategory, FooterLink, FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import { HeroSimpleLeftAligned } from '@/components/sections/hero-simple-left-aligned'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'

export default function PricingPage() {
  return (
    <>
      <NavbarWithLogoActionsAndCenteredLinks
        id="navbar"
        links={
          <>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/services">Services</NavbarLink>
            <NavbarLink href="/pricing">Pricing</NavbarLink>
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
          headline="Simple, transparent pricing."
          subheadline={
            <p>Every engagement is scoped clearly before we start. No surprises.</p>
          }
        />

        {/* Pricing Cards */}
        <PricingMultiTier
          id="pricing"
          plans={
            <>
              <Plan
                name="Workshop"
                price="Starting at $4,500"
                subheadline={<p>Half-day to 2-day session with your team. Defined scope, immediate value.</p>}
                features={[
                  'Team diagnostic and futures framing',
                  'Live work on your actual design challenges',
                  'Framework built for your context',
                  'Half-day, full day, or 2-day formats',
                ]}
                cta={
                  <ButtonLink href="/contact" size="lg">
                    Get in touch
                  </ButtonLink>
                }
              />
              <Plan
                name="Advisory"
                price="$3,500/mo"
                subheadline={<p>Ongoing strategic partnership. Minimum 3-month commitment.</p>}
                badge="Most requested"
                features={[
                  '4 hours/month: calls, async review, written POVs',
                  'Monthly working sessions',
                  'Async access between sessions',
                  'Quarterly strategy sessions available',
                ]}
                cta={
                  <ButtonLink href="/contact" size="lg">
                    Get in touch
                  </ButtonLink>
                }
              />
              <Plan
                name="Speaking"
                price="Starting at $2,500"
                subheadline={<p>Keynotes, panels, and executive workshops.</p>}
                features={[
                  'Three ready-to-deliver talks on AI + UX',
                  'Local, regional, and national events',
                  'Executive workshop format available',
                  'Custom topics by arrangement',
                ]}
                cta={
                  <ButtonLink href="/contact" size="lg">
                    Get in touch
                  </ButtonLink>
                }
              />
            </>
          }
        />

        {/* FAQs */}
        <FAQsAccordion id="faqs" headline="Common questions">
          <Faq
            id="faq-1"
            question="How do engagements typically start?"
            answer="A 30-minute discovery call to understand your situation. No pitch, just a conversation."
          />
          <Faq
            id="faq-2"
            question="Do you work with companies outside the US?"
            answer="Yes, remote engagements work well for advisory and workshops."
          />
          <Faq
            id="faq-3"
            question="Is there a minimum commitment?"
            answer="Advisory retainers require a 3-month minimum. Workshops and speaking are single engagements."
          />
          <Faq
            id="faq-4"
            question="Can we start with a smaller engagement?"
            answer="Yes. A half-day workshop is a good way to work together before committing to an advisory relationship."
          />
        </FAQsAccordion>
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
