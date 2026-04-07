import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Main } from '@/components/elements/main'
import { FooterCategory, FooterLink, FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'

const articles = [
  {
    title: 'The Interface Is Optional Now',
    slug: 'the-interface-is-optional-now',
    date: 'Apr 7, 2026',
  },
  {
    title: 'AI Ate the Junior Designer',
    slug: 'ai-ate-the-junior-designer',
    date: 'Apr 11, 2026',
  },
  {
    title: 'Trust Is a Design Deliverable Now',
    slug: 'trust-is-a-design-deliverable',
    date: 'Apr 15, 2026',
  },
  {
    title: 'AI Training for a UX Organization',
    slug: 'ai-training-for-a-ux-organization',
    date: 'Apr 19, 2026',
  },
  {
    title: 'We Are Still Teaching UX for a World That No Longer Exists',
    slug: 'were-still-teaching-ux-for-a-world-that-no-longer-exists',
    date: 'Apr 23, 2026',
  },
  {
    title: 'Part 1: The Collapse of the Interface',
    slug: 'the-collapse-of-the-interface',
    date: 'Apr 4, 2026',
  },
  {
    title: 'Part 2: Designing Systems, Not Screens',
    slug: 'designing-systems-not-screens',
    date: 'Apr 3, 2026',
  },
  {
    title: 'Part 3: Who Owns the System',
    slug: 'who-owns-the-system',
    date: 'Apr 2, 2026',
  },
  {
    title: 'The Product Triad',
    slug: 'the-product-triad',
    date: 'Mar 29, 2026',
  },
]

export default function WritingPage() {
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
          headline="Thinking"
          subheadline={
            <p>
              Writing on design, AI, and where the practice is going. Published at tateux.com.
            </p>
          }
        />

        {/* Articles */}
        <section className="py-16" id="articles">
          <Container>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <div
                  key={article.slug}
                  className="flex flex-col justify-between gap-8 rounded-md bg-olive-950/2.5 p-6 dark:bg-white/5"
                >
                  <div className="flex flex-col gap-3">
                    <p className="text-sm/6 text-olive-600 dark:text-olive-400">{article.date}</p>
                    <h3 className="text-base/7 font-medium text-olive-950 dark:text-white">{article.title}</h3>
                  </div>
                  <a
                    href={`https://www.tateux.com/writing/${article.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm/7 font-medium text-olive-950 hover:text-olive-700 dark:text-white dark:hover:text-olive-300"
                  >
                    Read on tateux.com →
                  </a>
                </div>
              ))}
            </div>
          </Container>
        </section>
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
