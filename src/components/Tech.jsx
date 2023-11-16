import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { zoomIn, textVariant } from "../utils/motion";
import { useState } from "react";

const Tech = () => {
  const [hoveringIndex, setHoveringIndex] = useState(-1);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Mes compétences techniques</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology, idx) => (
          <motion.div key={technology} variants={zoomIn(0.1 * idx, 0.5)}>
            <div className="w-28 h-28 mt-4 text-center" key={technology.name}>
              <span
                onMouseEnter={() => setHoveringIndex(idx)}
                onMouseLeave={() => setHoveringIndex(-1)}
                className="inline-flex items-center justify-center w-18 h-18 p-4 text-sm font-semibold rounded-full bg-black"
              >
                <img height="90" src={technology.icon} alt={technology.name} />
              </span>
              <div
                role="tooltip"
                className={`transition-opacity ease-in-out duration-700 ${
                  idx === hoveringIndex ? "opacity-100" : "opacity-0"
                } inline-block px-3 py-2 text-sm font-medium text-white rounded-lg tooltip bg-black font-poppins`}
              >
                {technology.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
