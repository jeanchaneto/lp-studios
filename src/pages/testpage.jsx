import BottomPlayer from "@/components/BottomPlayer";
import { useAudio } from "@/context/audioContext";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, onSnapshot } from "firebase/firestore";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Card, CardBody, Image } from "@nextui-org/react";

import { db } from "@/utils/firebase";
import { useTracks } from "@/hooks/useTracks";
import AddTrackForm from "@/components/AddTrackForm";



const testpage = () => {

  // const {tracks, error} = useTracks();

  // if (error) {
  //   return <div className="py-32 text-zinc-100 h-[800px]">Error: {error.message}</div>;
  // }

  return (
    <div
      
      className=" py-32 text-zinc-100   "
    >
      {/* {tracks.length > 0 ? <h1>{tracks[0].title}</h1> : <h1 >Loading...</h1>} */}
{/* <AddTrackForm /> */}
<a href="https://buy.stripe.com/test_5kAaGZgJtaVUetyaEE">Buy now</a>
    </div>
  );
};

export default testpage;
