import { FadeIn } from "@/components/FadeIn";
import Head from "next/head";

const Privacy = () => {
  return (
    <main className="bg-zinc-950 px-6 py-32 lg:px-8">
       <Head>
        <title>LAP Studios | Privacy Policy</title>
        <meta
          name="description"
          content="Review our privacy policy to understand how we manage, protect, and utilize your information."
        />
      </Head>
      <FadeIn className="mx-auto max-w-3xl text-base leading-7 text-zinc-400">
        <h1 className="mt-2 text-4xl font-kallisto text-zinc-100 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-xl leading-8">
          We value your privacy and strive to protect your personal information
          in accordance with French laws, including the General Data Protection
          Regulation (GDPR) and the French Data Protection Act.
        </p>
        <div className="mt-10 max-w-3xl">
          <h2 className=" text-2xl font-bold tracking-tight text-zinc-300">
            1.Information Collection
          </h2>
          <p className="mt-6">
            We collect various types of information in connection with the
            services we provide. This information includes: Web Activity Data:
            Information related to your visit to our site, such as IP address,
            browser type, and pages you visit.
          </p>

          <h2 className=" mt-10 text-2xl font-bold tracking-tight text-zinc-300">
            2.Cookies and Web Beacons
          </h2>
          <p className="mt-6">
            We may use cookies to personalize your online experience. A cookie
            is a text file placed on your hard drive by a web page server.
            Cookies cannot be used to run programs or deliver viruses to your
            computer.
          </p>

          <h2 className=" mt-10 text-2xl font-bold tracking-tight text-zinc-300">
            3.Use of Google Analytics
          </h2>
          <p className="mt-6">
            We utilize Google Analytics, a web analytics service provided by
            Google Inc. ("Google"). Google Analytics uses cookies to help us
            analyze your use of the website, compiling reports on website
            activity, and providing other services related to website activity
            and internet usage. The data generated by the cookie about your use
            of the website (including your IP address) may be transmitted to and
            stored by Google on servers outside France.
          </p>

          <h2 className=" mt-10 text-2xl font-bold tracking-tight text-zinc-300">
            4.Your Rights
          </h2>
          <p className="mt-6">
            In accordance with the GDPR and the French Data Protection Act, you
            possess the right to access, rectify, and erase your personal data.
            To exercise these rights, please contact us. Furthermore, you have
            the right to object to or restrict the processing of your data.
          </p>

          <h2 className=" mt-10 text-2xl font-bold tracking-tight text-zinc-300">
            5.Third-Party Websites
          </h2>
          <p className="mt-6">
            Our site may have links to third-party websites. We do not oversee
            these third-party sites and are not accountable for their privacy
            practices. We advise you to peruse the privacy policies of these
            external sites.
          </p>

          <h2 className=" mt-10 text-2xl font-bold tracking-tight text-zinc-300">
            6.Security
          </h2>
          <p className="mt-6">
            We prioritize the safeguarding of your personal data. To this end,
            we utilize various security methodologies and procedures to shield
            your personal data from unauthorized access, use, or disclosure, in
            compliance with French regulations.
          </p>

          <h2 className=" mt-10 text-2xl font-bold tracking-tight text-zinc-300">
            7.Updates to this Privacy Policy
          </h2>
          <p className="mt-6">
            Periodically, we may update our Privacy Policy. We will inform you
            of any changes by posting the revised policy on this webpage, and if
            needed, through other means. We recommend you review this Privacy
            Policy from time to time.
          </p>

          <h2 className=" mt-10 text-2xl font-bold tracking-tight text-zinc-300">
            8.Contact Information
          </h2>
          <p className="mt-6">
            Should you have inquiries about this Privacy Policy or wish to
            exercise your rights under French law, contact us at
            info@lap-studios.com.
          </p>
        </div>
      </FadeIn>
    </main>
  );
};

export default Privacy;
