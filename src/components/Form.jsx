import { useRef, useState } from "react";
import { FadeIn } from "./FadeIn";
import emailjs from "@emailjs/browser";
import { Spinner } from "@nextui-org/react";

const Form = ({ messagePlaceHolder }) => {
  const form = useRef();

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        <Spinner
          className="  mx-auto px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 "
          size="lg"
          label="Sending..."
        />
      </div>
    );

  if (submitted)
    return (
      <FadeIn className="flex justify-center items-center h-full w-full">
        <p className=" text-teal-300 mx-auto px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 ">
          Thank you for your message! We will get back to you as soon as
          possible.
        </p>
      </FadeIn>
    );

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 relative"
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
                className="block w-full rounded-md border-0 bg-zinc-900 px-3.5 py-2 text-zinc-100 ring-1 ring-inset ring-zinc-100/10 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300"
                required
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
                className="block w-full rounded-md border-0 bg-zinc-900 px-3.5 py-2 text-zinc-100 ring-1 ring-inset ring-zinc-100/10 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300"
                required
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
                className="block w-full rounded-md border-0 bg-zinc-900 px-3.5 py-2 text-zinc-100 ring-1 ring-inset ring-zinc-100/10 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300"
                required
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
                className="block w-full rounded-md border-0 bg-zinc-900 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-100/10 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300"
                defaultValue={""}
                placeholder={messagePlaceHolder}
                required
              />
            </div>
          </FadeIn>
        </div>
        <FadeIn className="mt-8 flex justify-end">
          <button
            type="submit"
            className="flex-none rounded-xl px-3.5 py-2.5 text-sm font-semibold 
                overflow-hidden group bg-gradient-to-r   hover:bg-gradient-to-r from-teal-900 to-teal-800 hover:from-teal-700 hover:to-teal-600 text-zinc-100 hover:ring-1 hover:ring-offset-1 hover:ring-teal-600  transition-all ease-out duration-300 flex justify-center relative "
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Send message</span>
          </button>
        </FadeIn>
      </div>
      {error && (
        <p className=" text-red-400 text-sm mx-auto max-w-fit mt-6  ">
          {error}
        </p>
      )}
    </form>
  );
};

export default Form;
