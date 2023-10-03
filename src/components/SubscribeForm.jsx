import { Spinner } from "@nextui-org/react";
import { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        body: JSON.stringify({
          email: email,
        }),

        headers: {
          "Content-Type": "application/json",
        },

        method: "POST",
      });
      if (!response.ok) throw new Error(response.statusText);
      setSubscribed(true);
      setEmail("");
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 flex max-w-md gap-x-4 relative"
    >
      {loading ? <Spinner
        className="  mx-auto h-11 "
      /> : subscribed ? <p className=" text-teal-300 mx-auto " >Keep an eye on your inbox for the latest tracks!</p> : (
        <>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-zinc-100/5 px-3.5 py-2 text-zinc-100 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-teal-400 transition-all duration-300  sm:text-sm sm:leading-6"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <div className=" text-red-400 text-sm absolute -bottom-6 left-3 ">{error}</div>}
          <button
            type="submit"
            className="flex-none rounded-xl px-3.5 py-2.5 text-sm font-semibold 
                overflow-hidden group bg-blue-700  hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300 flex justify-center relative "
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Notify me</span>
          </button>
        </>
      )}
    </form>
  );
};

export default SubscribeForm;
