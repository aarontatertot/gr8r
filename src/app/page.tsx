import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Main } from '@/components/elements/main'
import { Wallpaper } from '@/components/elements/wallpaper'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FeatureThreeColumnWithDemos, Features } from '@/components/sections/features-three-column-with-demos'
import { FooterCategory, FooterLink, FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'

export default function Page() {
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
        <HeroWithDemoOnBackground
          id="hero"
          headline="Design strategy for the AI transition."
          subheadline={
            <p>
              We help design leaders build teams, systems, and practices for a world where the interface is no longer
              the default.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="/contact" size="lg" color="light">
                Start a conversation
              </ButtonLink>
              <PlainButtonLink href="/services" size="lg" color="light">
                See our services <ChevronIcon />
              </PlainButtonLink>
            </div>
          }
        />

        {/* Services */}
        <Features
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
              <FeatureThreeColumnWithDemos
                demo={
                  <Wallpaper color="green">
                    <div className="h-40 sm:h-48" />
                  </Wallpaper>
                }
                headline="Senior Design Advisory"
                subheadline={
                  <p>
                    Ongoing advisory for design leaders navigating the AI transition. Monthly sessions, async access,
                    and strategic guidance from someone with a defensible point of view.
                  </p>
                }
              />
              <FeatureThreeColumnWithDemos
                demo={
                  <Wallpaper color="blue">
                    <div className="h-40 sm:h-48" />
                  </Wallpaper>
                }
                headline="AI Readiness Workshops"
                subheadline={
                  <p>
                    Structured working sessions with your design team. Not a lecture — we work on your actual
                    challenges and leave you with a framework built for your context.
                  </p>
                }
              />
              <FeatureThreeColumnWithDemos
                demo={
                  <Wallpaper color="purple">
                    <div className="h-40 sm:h-48" />
                  </Wallpaper>
                }
                headline="Speaking & Facilitation"
                subheadline={
                  <p>
                    Keynotes and panels on the future of UX, design leadership in AI, and building design teams for
                    the next decade.
                  </p>
                }
              />
            </>
          }
        />

        {/* About */}
        <StatsWithGraph
          id="about"
          eyebrow="About gr8r"
          headline="Led by someone who's been building design organizations for 20 years."
          subheadline={
            <p>
              gr8r is Aaron Tate's advisory practice. Aaron was the first UX hire at CHG Healthcare, where he built a
              21-person design team. He writes about where design is going at tateux.com.
            </p>
          }
          cta={
            <Link href="/about">
              Learn more about gr8r <ArrowNarrowRightIcon />
            </Link>
          }
        >
          <Stat stat="20+" text="Years leading design teams through platform transitions." />
          <Stat stat="21" text="Person design team built from the ground up at CHG Healthcare." />
        </StatsWithGraph>

        {/* Testimonials */}
        <TestimonialThreeColumnGrid
          id="testimonials"
          headline="What design leaders are saying"
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

        {/* CTA */}
        <CallToActionSimple
          id="contact-cta"
          headline="Ready to talk?"
          subheadline={
            <p>
              If you're a design leader trying to figure out what comes next — for your team, your practice, or your
              own role — let's have a conversation.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="/contact" size="lg">
                Start a conversation
              </ButtonLink>
              <PlainButtonLink href="/about" size="lg">
                Learn more about gr8r <ChevronIcon />
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
