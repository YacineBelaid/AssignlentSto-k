import Logo from './../assets/react.svg';
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import { Nav } from './../components/Flowbite/Nav'

const stats = [
  { label: 'ShortLink Was created', value: 'February 2024' },
  { label: 'Link Shortened', value: '10+' },
  { label: 'Clicks per day', value: '12' },
  { label: 'Total Redirections', value: '100+' },
]
const benefits = [
  'Contribute to the development of ShortLink',
  'Access the Road Map!',
  'Get the latest updates and be in touch with developeing team',
  'Access to the git repository and get early access to the Link Management Panel!',
  'Get advices and tutorials from the community',
  'Promote your Links !',
]
const footerNavigation = {
  support: [
    { name: 'Documentation', href: 'https://github.com' },
    { name: 'API Status', href: 'https://github.com' },
  ],
  company: [
    { name: 'Try it !', href: '/' },
    { name: 'About', href: '/About' }
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function About() {
  return (
    <>
    <Nav />
    <div className="dark:bg-gray-900 bg-white-900">
      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>

        {/* Header section */}
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">ShortLink!</h2>
            <p className="mt-6 text-lg leading-8 text-grey-900 dark:text-gray-300">
             Simple, fast and reliable URL shortner.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-grey-900 dark:text-gray-300 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                 In it's current version, ShortLink allows you to simplify your links and share them anywhere!  
                </p>
                <p className="mt-8">
                Made by Yacine Belaid for Stoïk as an assignment. This project is meant to be open source.
                </p>
              </div>
              <div>
                <p>
                  I crafted this web-app using a React Front-end and a NodeJS Back-end.
                  Thanks to Tailwind and Flowbite designs I was able to come up with an elegant esthethic and a powerfull user experience.
                </p>
                <p className="mt-8">
                If you liked this small project, feel free to browse my <a className="text-indigo-400" href="https//:yacinebelaid.com">website</a> or my <a className='text-indigo-400' href="https://github.com/YacineBelaid">github page</a> for more ! 
                </p>
              </div>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                  <dt className="text-base leading-7 text-grey-900 dark:text-gray-300">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-black dark:text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-grey/5 dark:bg-white/5 px-6 py-16 ring-1 ring-grey/10 dark:ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Join the community !</h2>
                <p className="mt-6 text-lg leading-8 text-grey-900 dark:text-gray-300">
                  A community of enthusiastic creators is awaiting for your arrival. Here are some of the benefits to join us :
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-black dark:text-white sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <a href="https://discord.com" className="text-sm font-semibold leading-6 text-indigo-400">
                    Join us on discord <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-32 sm:mt-40" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <img
                className="h-7"
                src={Logo}
                alt="ShortLink"
              />
              <p className="text-sm leading-6 text-grey-900 dark:text-gray-300">
              ShortLink is developed and maintained by <a className='text-black dark:text-white-100 text-indigo-400' href="https://yacinebelaid.com"> Yacine Belaid</a>.
              </p>
              <div className="flex space-x-6">
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-2">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-grey-900 dark:text-gray-300 hover:text-black dark:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">ShortLink</h3>
                  <ul role="list" className="mt-6 space-y-2">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-grey-900 dark:text-gray-300 hover:text-black dark:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-grey-900 dark:text-gray-400">&copy; 2024 Yacine Belaid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}