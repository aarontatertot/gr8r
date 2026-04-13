import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesThreeColumn } from '@/components/sections/features-three-column'
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

        {/* Senior Design Advisory */}
        <PricingMultiTier
          id="pricing-advisory"
          headline="Senior Design Advisory"
          subheadline={
            <p>
              Ongoing advisory for VPs and Directors of Design navigating the AI transition. Best for Series B–D
              companies and mid-size orgs with a design team but no VP of Design.
            </p>
          }
          plans={
            <>
              <Plan
                name="Monthly Retainer"
                price="$3,500"
                period="/mo"
                subheadline={
                  <p>4 hrs/month of calls, async review, and written POVs. Minimum 3-month commitment.</p>
                }
                badge="Most requested"
                features={[
                  'Monthly working session',
                  'Async access between sessions',
                  'Written recommendations and POVs',
                  '3-month minimum commitment',
                ]}
                cta={
                  <ButtonLink href="/contact" size="lg">
                    Get in touch
                  </ButtonLink>
                }
              />
              <Plan
                name="Quarterly Strategy"
                price="$5,000"
                subheadline={<p>One deep work day plus written recommendations. No ongoing commitment required.</p>}
                features={[
                  'Full day working session',
                  'Structured agenda built around your priorities',
                  'Written recommendations and next steps',
                  'Single engagement, no retainer required',
                ]}
                cta={
                  <SoftButtonLink href="/contact" size="lg">
                    Get in touch
                  </SoftButtonLink>
                }
              />
              <Plan
                name="Project Engagement"
                price="$15,000–$35,000"
                subheadline={<p>Defined scope, clear deliverable. Right for teams with a specific problem to solve.</p>}
                features={[
                  'Scoped collaboratively before we start',
                  'Clear deliverable at the end',
                  'Appropriate for 4–12 week engagements',
                  'Pricing set by scope, not by the hour',
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

        {/* AI Readiness Workshop */}
        <PricingMultiTier
          id="pricing-workshop"
          headline="AI Readiness Workshop"
          subheadline={
            <p>
              A structured working session with your design team — not a lecture, real work. Best for design teams of
              5–25 where AI is arriving faster than the team can respond.
            </p>
          }
          plans={
            <>
              <Plan
                name="Half-Day Kickoff"
                price="$4,500"
                subheadline={<p>A focused session to orient the team and identify where to act first.</p>}
                features={[
                  'Team diagnostic and AI readiness mapping',
                  'Priority identification for your context',
                  'Framework and next steps',
                  'Up to 10 participants',
                ]}
                cta={
                  <SoftButtonLink href="/contact" size="lg">
                    Get in touch
                  </SoftButtonLink>
                }
              />
              <Plan
                name="Full Day"
                price="$8,000"
                subheadline={<p>Deeper work on real design challenges. Leaves with a framework your team owns.</p>}
                badge="Most popular"
                features={[
                  'Team diagnostic and futures framing',
                  'Live work on your actual design challenges',
                  'Custom framework built for your context',
                  'Up to 20 participants',
                ]}
                cta={
                  <ButtonLink href="/contact" size="lg">
                    Get in touch
                  </ButtonLink>
                }
              />
              <Plan
                name="2-Day Deep Dive"
                price="$14,000"
                subheadline={<p>Comprehensive transformation work. For teams ready to go further, faster.</p>}
                features={[
                  'All full-day elements, extended',
                  'Cross-functional alignment sessions',
                  'Roadmap and implementation guidance',
                  'Up to 25 participants',
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

        {/* Speaking & Facilitation */}
        <PricingMultiTier
          id="pricing-speaking"
          headline="Speaking & Facilitation"
          subheadline={<p>Keynotes, panels, and executive workshops on AI and the future of design leadership.</p>}
          plans={
            <>
              <Plan
                name="Local / Regional Event"
                price="$2,500–$4,000"
                subheadline={<p>Keynotes and panels at regional design and product conferences.</p>}
                features={[
                  'Three ready-to-deliver talks on AI + UX',
                  'Q&A and facilitated discussion',
                  'Custom framing for your audience',
                  'Travel within region included',
                ]}
                cta={
                  <SoftButtonLink href="/contact" size="lg">
                    Get in touch
                  </SoftButtonLink>
                }
              />
              <Plan
                name="National Keynote"
                price="$5,000–$10,000+"
                subheadline={<p>National and international conference keynotes. Tailored to your event theme.</p>}
                features={[
                  'Custom keynote developed for your event',
                  'Pre-event call to align on audience and goals',
                  'Slides and materials provided',
                  'Travel and logistics by arrangement',
                ]}
                cta={
                  <SoftButtonLink href="/contact" size="lg">
                    Get in touch
                  </SoftButtonLink>
                }
              />
              <Plan
                name="Executive Workshop"
                price="$6,000–$8,000"
                subheadline={<p>Facilitated session for leadership teams. More conversation, less presentation.</p>}
                features={[
                  'Structured facilitation, not a lecture',
                  'Designed around your leadership team\'s questions',
                  'Practical frameworks and decision tools',
                  'Up to 15 executives',
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

        {/* How engagements start */}
        <FeaturesThreeColumn
          id="how-it-starts"
          headline="How engagements start"
          subheadline={
            <p>
              Every engagement begins the same way — a 30-minute conversation, not a sales call.
            </p>
          }
          features={
            <>
              <Feature
                headline="Book a 30-minute call"
                subheadline={
                  <p>
                    No intake form, no pitch deck. Just schedule a time and show up. We'll take it from there.
                  </p>
                }
              />
              <Feature
                headline="Talk through your situation"
                subheadline={
                  <p>
                    Tell me what's happening on your team, what you're trying to figure out, and what you've already
                    tried. I'll ask questions.
                  </p>
                }
              />
              <Feature
                headline="We decide together if it's a fit"
                subheadline={
                  <p>
                    If there's a clear way I can help, I'll say so. If there isn't, I'll say that too. No pressure
                    either direction.
                  </p>
                }
              />
            </>
          }
          cta={
            <ButtonLink href="/contact" size="lg">
              Schedule a call
            </ButtonLink>
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
                governance. Exactly what we needed at this stage of our Series B growth.
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
            byline="Series B fintech startup"
          />
          <Testimonial
            quote={
              <p>
                The full-day workshop was unlike anything we'd done before. We left with a real framework, not a slide
                deck. My team of twelve is still using what we built together.
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
            name="Director of Design"
            byline="Series C SaaS company, 18-person design team"
          />
          <Testimonial
            quote={
              <p>
                Having a thought partner who could separate hype from real structural change — and help me think through
                what it meant for my specific team — was exactly what I needed as a new VP without a peer in-house.
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
            name="VP of Design"
            byline="Series D enterprise product company"
          />
        </TestimonialThreeColumnGrid>

        {/* FAQs */}
        <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
          <Faq
            id="faq-1"
            question="How do engagements typically start?"
            answer="A 30-minute discovery call. No pitch. Just a conversation to understand your situation and whether this is the right fit."
          />
          <Faq
            id="faq-2"
            question="Do you work with companies outside the US?"
            answer="Yes. Remote advisory and workshops work well. In-person workshops require travel coordination."
          />
          <Faq
            id="faq-3"
            question="Is there a minimum commitment?"
            answer="Advisory retainers are minimum 3 months. Workshops and speaking are single engagements."
          />
          <Faq
            id="faq-4"
            question="Can we start with something smaller?"
            answer="Yes. A half-day workshop is a clean way to work together before committing to an advisory relationship."
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
