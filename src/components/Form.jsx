import { FadeIn } from "./FadeIn";

const Form = () => {
  return (
    <form
      action="#"
      method="POST"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <FadeIn>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-zinc-100"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-zinc-100/5 px-3.5 py-2 text-zinc-100 ring-1 ring-inset ring-zinc-100/10 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300"
              />
            </div>
          </FadeIn>
          <FadeIn>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-zinc-100"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 bg-zinc-100/5 px-3.5 py-2 text-zinc-100 ring-1 ring-inset ring-zinc-100/10 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300"
              />
            </div>
          </FadeIn>
          <FadeIn className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-zinc-100"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-zinc-100/5 px-3.5 py-2 text-zinc-100 ring-1 ring-inset ring-zinc-100/10 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300"
              />
            </div>
          </FadeIn>

          <FadeIn className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 bg-zinc-100/5 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-100/10 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300"
                defaultValue={""}
                placeholder="Send us at least one reference track. Feel free to share the styles, other reference tracks, labels, or artists that inspire you. What specific elements do you love in your references? The more we know, the better we can bring your musical vision to life."
              />
            </div>
          </FadeIn>
        </div>
        <FadeIn className="mt-8 flex justify-end">
          <button
            type="submit"
            className="flex-none rounded-xl px-3.5 py-2.5 text-sm font-semibold 
                overflow-hidden group bg-blue-700  hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300 flex justify-center relative "
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Send message</span>
          </button>
        </FadeIn>
      </div>
    </form>
  );
};

export default Form;
