import { ButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { FooterCategory, FooterLink, FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import { HeroSimpleLeftAligned } from '@/components/sections/hero-simple-left-aligned'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'
import { Container } from '@/components/elements/container'

export default function ContactPage() {
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
          headline="Let's talk."
          subheadline={
            <p>
              Tell us a bit about what you're working on. We'll follow up within a day or two.
            </p>
          }
        />

        <section className="py-8 pb-24">
          <Container>
            <form className="flex max-w-xl flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-olive-950 dark:text-white">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="rounded-lg border border-olive-300 bg-white px-3.5 py-2 text-sm text-olive-950 placeholder:text-olive-400 focus:border-olive-500 focus:outline-none dark:border-olive-700 dark:bg-olive-900 dark:text-white dark:placeholder:text-olive-500 dark:focus:border-olive-400"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-olive-950 dark:text-white">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="rounded-lg border border-olive-300 bg-white px-3.5 py-2 text-sm text-olive-950 placeholder:text-olive-400 focus:border-olive-500 focus:outline-none dark:border-olive-700 dark:bg-olive-900 dark:text-white dark:placeholder:text-olive-500 dark:focus:border-olive-400"
                  placeholder="you@company.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-sm font-medium text-olive-950 dark:text-white">
                  Company{' '}
                  <span className="font-normal text-olive-500 dark:text-olive-400">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="rounded-lg border border-olive-300 bg-white px-3.5 py-2 text-sm text-olive-950 placeholder:text-olive-400 focus:border-olive-500 focus:outline-none dark:border-olive-700 dark:bg-olive-900 dark:text-white dark:placeholder:text-olive-500 dark:focus:border-olive-400"
                  placeholder="Your company"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-olive-950 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="rounded-lg border border-olive-300 bg-white px-3.5 py-2 text-sm text-olive-950 placeholder:text-olive-400 focus:border-olive-500 focus:outline-none dark:border-olive-700 dark:bg-olive-900 dark:text-white dark:placeholder:text-olive-500 dark:focus:border-olive-400"
                  placeholder="What are you working on? What would be most useful?"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-olive-950 px-4 py-2 text-sm/7 font-medium text-white hover:bg-olive-800 dark:bg-olive-300 dark:text-olive-950 dark:hover:bg-olive-200"
                >
                  Send message
                </button>
              </div>
            </form>
          </Container>
        </section>
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
