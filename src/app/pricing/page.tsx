import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { FooterCategory, FooterLink, FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'

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
          headline="Simple, transparent pricing."
          subheadline={<p>Every engagement is scoped clearly before we start. No surprises.</p>}
        />

        {/* Single Engagements */}
        <PricingMultiTier
          id="pricing-engagements"
          headline="Single engagements"
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
                  <SoftButtonLink href="/contact" size="lg">
                    Get in touch
                  </SoftButtonLink>
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
                  <SoftButtonLink href="/contact" size="lg">
                    Get in touch
                  </SoftButtonLink>
                }
              />
            </>
          }
        />

        {/* Ongoing Advisory */}
        <PricingMultiTier
          id="pricing-advisory"
          headline="Ongoing advisory"
          plans={
            <>
              <Plan
                name="Advisory"
                price="$3,500"
                period="/mo"
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
            </>
          }
        />

        {/* Testimonials */}
        <TestimonialThreeColumnGrid
          id="testimonials"
          headline="What design leaders are saying"
          subheadline={<p>From workshops to ongoing advisory — here's what working together looks like.</p>}
        >
          <Testimonial
            quote={
              <p>
                Aaron helped us move past tool conversations and into the harder questions about how AI changes design
                governance. Exactly what we needed at this stage.
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
            byline="Series C fintech startup"
          />
          <Testimonial
            quote={
              <p>
                The workshop was unlike anything we'd done before. We left with a real framework, not a slide deck.
                My team is still using what we built together.
              </p>
            }
            img={
              <img
                src="https://assets.tailwindplus.com/avatars/12.webp?size=160"
                alt=""
                className="not-dark:bg-white/75 dark:bg-black/75"
                width={160}
                height={160}
              />
            }
            name="Design Director"
            byline="Enterprise SaaS company"
          />
          <Testimonial
            quote={
              <p>
                Having a thought partner who could separate the hype from the real structural changes — and help me
                think through what it meant for my team specifically — was invaluable.
              </p>
            }
            img={
              <img
                src="https://assets.tailwindplus.com/avatars/15.webp?size=160"
                alt=""
                className="not-dark:bg-white/75 dark:bg-black/75"
                width={160}
                height={160}
              />
            }
            name="Head of UX"
            byline="Series B product company"
          />
        </TestimonialThreeColumnGrid>

        {/* FAQs */}
        <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
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
        </FAQsTwoColumnAccordion>

        {/* CTA */}
        <CallToActionSimple
          id="call-to-action"
          headline="Not sure which is right?"
          subheadline={
            <p>Start with a conversation. We can figure out the right fit together.</p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="/contact" size="lg">
                Get in touch
              </ButtonLink>
              <PlainButtonLink href="/services" size="lg">
                See how we work <ChevronIcon />
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
