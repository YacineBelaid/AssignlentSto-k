import './App.css'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Nav } from './components/Flowbite/Nav'
import { useEffect, useState } from 'react'
import { submitData } from './services/data.service'
import { url } from './models/url.model';
import { Navigate } from 'react-router-dom'



function App() {

  const [URLtoCheck, setURLtoCheck] = useState<string>("")
  const [URLtoShorten, setURLToShorten] = useState<string>("")

  const [redirect, setRedirect] = useState(false);

  const handleInputChange = (event: { target: { value: any } }) => {
    setURLtoCheck(event.target.value);
  };

  function handleSubmit() {
    setURLToShorten(URLtoCheck )
    setRedirect(true)
  }

  useEffect(() => {
    if (redirect) {
      async function postData() {
        await submitData(URLtoShorten);
        setRedirect(true);
      }
      postData();
    }
  }, [URLtoShorten]);

  return (
    <>
      <Nav />
      <div className="relative isolate overflow-hidden bg-white-900 dark:bg-gray-900">
        <svg
          className="absolute inset-0 -z-10 h-full w-full strokeWhite/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-blue-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
        </svg>
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                  What's new
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                  <span className="dark:text-gray-300 text-gray-900" >Just shipped Alpha 0.1</span>
                  <ChevronRightIcon className="h-5 w-5 dark:text-gray-500 text-gray-900" aria-hidden="true" />
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-black sm:text-6xl dark:text-white">
              Shorten your links faster than you can say "Yatzee"
            </h1>
            <p className="mt-6 text-lg leading-8 dark:text-gray-300 text-gray-900">
              Manage and share your ShortLinks online!
            </p>
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mt-6 w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>

                </div>
                <input value={URLtoCheck}
                  onChange={handleInputChange}
                  type="text" id="simple-search" className="block w-full mt-6 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://myawesomewebsite.com/url/to/shorten">
                </input></div>
            </form>
            <div className="mt-3 flex items-center gap-x-6">
              <button onClick={handleSubmit}
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Short it!
              </button>
              <a href="https://github.com" className="text-sm font-semibold leading-6 dark:text-white text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
      {redirect && <Navigate to="/manage" />}
    </>
  )
}

export default App

