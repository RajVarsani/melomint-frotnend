import { useState } from "react";
import Image from "next/image";
import { Text, Slider } from "@mantine/core";
import {
  backbutton,
  fastforardbutton,
  heart,
  nextbutton,
  playbutton,
  prevbutton,
  volume,
} from "@/assets/general";

import styles from "./Bottombar.module.css";

function MusicControllor({ image }: { image: string }) {
  return (
    <button className={styles.button}>
      <Image src={image} alt="" />
    </button>
  );
}

function BottomBar() {
  const [value, setValue] = useState(25);
  return (
    <div className={styles.container}>
      <div className={styles.musicName}>
        <Text
          size="lg"
          color="primary"
          weight={700}
          className={styles.musicFont}
        >
          Living My Best Life
        </Text>
        <Text size="sm" color="primary.2" weight={400}>
          Ben Hector
        </Text>
      </div>
      <div className={styles.playBar}>
        <div className={styles.timeLine}>
          <Text color="primary.1" weight={500} size="xs">
            1.21
          </Text>
          <Slider color="primary" size="sm" value={value} onChange={setValue} />
          <Text color="primary.1" weight={500} size="xs">
            2.36
          </Text>
        </div>
        <div className={styles.bar}>
          <MusicControllor image={backbutton} />
          <MusicControllor image={prevbutton} />
          <MusicControllor image={playbutton} />
          <MusicControllor image={nextbutton} />
          <MusicControllor image={fastforardbutton} />
        </div>
      </div>

      <div className={styles.rightBar}>
        <Image src={heart} alt="" className="" />
        <div className={styles.volumeBar}>
          <Image src={volume} alt="" className="" />
          <Slider color="primary" size="sm" />
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
