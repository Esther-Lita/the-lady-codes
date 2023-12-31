import Image from 'next/image'

import { Container } from '@/components/Container'
import logoCal from '@/images/logos/cal.svg'
import logoAppFlowy from '@/images/logos/appflowy.svg'
import logoOSSC from '@/images/logos/ossc.svg'
import WhiteButton from './WhiteButton'
import PinkButton from './PinkButton'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="max-w-4xl mx-auto text-5xl font-medium tracking-tight font-display text-primary-dark sm:text-7xl">
        We need more
        <span className="relative whitespace-nowrap text-brand-pink">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-brand-pink/50"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">Women in Tech.</span>
        </span>
      </h1>

      <strong className="block max-w-xl mx-auto mt-4 text-brand-pink">
        We&apos;re building a space specifically for women in tech, focussed on
        mentorship, community and funding.
      </strong>
      <div className="flex justify-center mt-10 gap-x-10">
        <WhiteButton href="https://join.slack.com/t/ladycodes/shared_invite/zt-1nryy4ver-rZ0VMqlUYsZlxxJxkJLiOA">
          Join our Slack
        </WhiteButton>
        <PinkButton href="https://cal.com/esther-lita/lady-codes-web">
          Contact Us
        </PinkButton>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="text-base font-display text-primary-dark">
          Supported by these open source companies
        </p>
        <ul
          role="list"
          className="flex items-center justify-center mt-8 gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              {
                name: 'OSS.Capital',
                logo: logoOSSC,
                href: 'https://oss.capital',
                height: 30,
              },
              {
                name: 'Cal.com',
                logo: logoCal,
                href: 'https://cal.com',
                height: 24,
              },
              {
                name: 'AppFlowy',
                logo: logoAppFlowy,
                href: 'https://appflowy.io',
                height: 30,
              },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0 "
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image
                      height={company.height}
                      src={company.logo}
                      alt={company.name}
                      unoptimized
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
