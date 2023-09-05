
const Form = () => {
  return (
    <form action="#" method="POST" className="mt-16">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-base font-semibold leading-6 text-zinc-100"
          >
            First name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-100/20 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 text-base bg-zinc-900"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-base font-semibold leading-6 text-zinc-100"
          >
            Last name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-100/20 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 text-base  bg-zinc-900"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-base font-semibold leading-6 text-zinc-100"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-100/20 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 text-base  bg-zinc-900"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between text-sm leading-6">
            <label
              htmlFor="message"
              className="block text-base font-semibold leading-6 text-zinc-100"
            >
              Tell Us About Your Vision
            </label>
          </div>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              aria-describedby="message-description"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-100/20 placeholder:text-zinc-500 
              placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-teal-600 text-base  bg-zinc-900"
              defaultValue={""}
              placeholder="Send us at least one reference track. Feel free to share the styles, other reference tracks, labels, or artists that inspire you. What specific elements do you love in your references? The more we know, the better we can bring your musical vision to life."
              required
            />
          </div>
        </div>
      </div>
      
      <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
        <button
          type="submit"
          className="rounded-md bg-blue-700 px-3.5 py-2.5 text-center text-base font-semibold text-zinc-100 shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 w-full "
        >
          Send
        </button>
        
      </div>
      
    </form>
  );
};

export default Form;
