import Image from "next/image";
import { benefits } from "@/libs/constants";

const Benefits = () => {
  return (
    <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 text-base ">
      {benefits.map((benefit, i) => (
        <li key={i} className="sm:flex lg:block">
          <div className="sm:flex-shrink-0 ">
            <Image
              src={benefit.icon}
              className="object-cover object-center"
              alt="LAP music studio"
              width={64}
              height={64}
            />
          </div>
          <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
            <h3 className="font-medium text-teal-400 ">{benefit.name}</h3>
            <p className="mt-2  text-zinc-400 ">{benefit.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Benefits;
