import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "What is ghost production and how does it benefit me?",
    answer:
      "Ghost production is a specialized service where a ghost producer crafts a track on behalf of another artist. This allows artists to release high-quality music without spending the time or having the specific technical expertise. At LAP Music Studios, we are experts in ghost production, ensuring you receive top-tier tracks tailored to your style.",
  },
  {
    question: "Why should I choose LAP Studios for ghost production services?",
    answer:
      "At LAP Studios, we pride ourselves on being specialists in ghost production, with a keen expertise in Afro House, Organic House, and Melodic House & Techno. Choosing us ensures that you're working with seasoned ghost producers who truly understand the intricacies of these genres. Our dedication and passion in these specific fields set us apart and guarantee you a product that resonates with authenticity and top-tier quality.",
  },
  {
    question: "How can ghost produced tracks benefit me?",
    answer:
      "Ghost produced tracks offer you the unique advantage of having exclusive music for your sets, allowing you to truly stand out from other DJs who might just stick to the top Beatport charts. With these distinctive tracks, you can captivate your audience with sounds they haven't heard elsewhere. Furthermore, the choice remains with you: release them under your own name to boost your brand, or keep them as secret weapons in your DJ arsenal. The flexibility and exclusivity ghost produced tracks provide can elevate your presence in the music scene.",
  },
  {
    question: "What genres do you produce?",
    answer: [
      "We specialize in a select range of genres to ensure the highest quality in our productions. Our expertise lies in Melodic House & Techno, Afro House, Organic House, and Deep House. However feel free to reach out if you have another genre in mind, and we'll see if we can accommodate your request.",
    ],
  },
  {
    question: "How much does ghost production cost?",
    answer:
      "We provide high-quality ready-made tracks priced between €800-€1000. For a custom track tailored to your specific style, the cost is €1499.",
  },
  {
    question: "Do I get the project file?",
    answer:
      "Absolutely! The project file is always included. This not only gives you an inside-out view of the production but also offers a valuable learning experience. You'll have the opportunity to dissect the elements and even rework the track yourself if desired.",
  },
  {
    question: "What can I do with a track I purchase from you?",
    answer:
      "Once you purchase a track from LAP Studios, it's yours to showcase. You can play it out at events, share it with fellow DJs, upload it on streaming platforms, or even pitch it to record labels. The world is yours.",
  },
  {
    question: "What do I get with a ghost-produced track?",
    answer: 
      "Once your purchase a track from us you will receive: The master version of the track, the mixdown version, the audio stems and the complete project file.",
  },
  {
    question: "What rights do I acquire after purchasing a track?",
    answer: [
      "When you buy a track from us, you secure a broad set of rights under an exclusive, perpetual license. These rights encompass: 1.Representing the track under your name, pseudonym, brand, or other designation. 2.Showcasing the track on streaming platforms such as Spotify, Apple Music, Tidal, among others. 3.Entitlement to all earnings generated by the track.",
    ],
  },
  {
    question: "Can you guarantee my track is going to be signed?",
    answer:
      "While we take immense pride in the quality and dedication we put into each production, we cannot guarantee that your track will be signed. The music industry involves numerous variables, many of which are beyond our control. However, we can assure you that every track we produce receives the same meticulous care and attention as those that have achieved success. ",
  },
  {
    question: "How do you ensure the quality and uniqueness of each track?",
    answer:
      "We fuse our own compositions with high quality royalty-free samples to craft unique tracks.",
  },
  {
    question:
      "Can I resell the track or files on ghost production platforms or as a sample pack?",
    answer:
      "No, reselling tracks on other ghost production platforms or repackaging them as sample packs is strictly prohibited. When you acquire a track from us, it's licenced for your exclusive use, whether for personal listening or releasing on music platforms. Furthermore, reselling could inadvertently put you at risk of redistributing royalty-free samples, which is not permitted.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Regrettably, we cannot offer refunds or exchanges for purchased tracks. Before making a purchase, you have the opportunity to listen to the entire track, or even SHAZAM it if you like, which should give you a clear insight into its suitability for your needs. Upon purchasing, you receive not just the full track but also the stems and project files. Once these assets are transferred, they can't be taken back. As such, we cannot accommodate returns or exchanges.",
  },
  {
    question: "Do you offer discounts for multiple orders?",
    answer:
      "Our pricing remains fixed, reflecting the years of expertise and dedication we've invested to reach our current level. We ensure every project receives our utmost attention and the quality it deserves.",
  },
  {
    question: "I am a music producer. Can I sell some tracks on your platform?",
    answer:
      "We appreciate your interest, but LAP Studios operates as a closed team and not as a marketplace. Currently, we do not accept external tracks or collaborations but you are always welcome to get in touch with us.",
  },
  {
    question: "How can I contact you?",
    answer: [
      "You can reach out to us by email at info@lap-studios.com or head over to our ",
      <Link
        key="contactLink"
        href="/contact"
        className="text-zinc-300 hover:text-zinc-500"
      >
        contact page
      </Link>,
      " ",
    ],
  },
  {
    question: "I purchased a track, how long until I receive it?",
    answer:
      "After your payment is verified, you should receive an email containing a download link within 24 hours. If you face any issues or delays, please don't hesitate to contact us.",
  },
  {
    question: "Can you help me finish my projects?",
    answer:
      "Sorry, we don't handle individual projects. We offer a comprehensive, full-on ghost production service only.",
  },
  {
    question: "Which DAWs (digital audio workstation) do you work with?",
    answer: "We primarily use Ableton Live and Logic Pro X.",
  },
  {
    question: "Do you produce peak time, raw, driving Techno?",
    answer: "Sorry we do not currently produce peak time, raw, driving Techno",
  },
  {
    question: "Do you produce Tech House?",
    answer: "Sorry we do not currently produce Tech House.",
  },
  {
    question: "Do you produce Minimal House?",
    answer: "Sorry we do not currently produce Minimal House.",
  },
  {
    question: "Do you produce EDM?",
    answer: "Sorry we do not currently produce EDM",
  },
];

export default function Faq() {
  return (
    <main className="bg-zinc-950"><FadeIn>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl ">
          
          <h1 className="text-4xl sm:text-6xl font-kallisto text-zinc-100">
            Frequently asked questions
          </h1>
          <p className="mt-6 text-xl text-zinc-400">
            Navigating the world of ghost production and music production can
            spark numerous questions. We've compiled a list of the most
            frequently asked ones to provide clarity and help you understand our
            processes better. If your query isn't covered here, don't hesitate
            to{" "}
            <Link
              href="/contact"
              className=" text-zinc-300 hover:text-zinc-100"
            >
              reach out
            </Link>{" "}
            directly.
          </p>
          <div className="mt-10 ">
          
            <Accordion fullWidth className="px-0">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  aria-label={faq.question}
                  title={
                    <h2 className="text-zinc-300 text-lg">{faq.question}</h2>
                  }
                  className="text-zinc-400"
                  startContent={
                    <Image
                      width={24}
                      height={24}
                      src="/icons/music-note.svg"
                      alt=""
                    />
                  }
                >
                  {<p className="text-base ">{faq.answer}</p>}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div></FadeIn>
    </main>
  );
}
