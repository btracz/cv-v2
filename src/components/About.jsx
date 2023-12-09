import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card sm-fixed"
    >
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()} className="sm-fixed">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Bienvenue !</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-5xl leading-[30px]"
      >
        Vous êtes curieux d&apos;en découvrir un peu plus sur moi ? Vous êtes au
        bon endroit. Pour toute demande d&apos;information complémentaire ou si
        mon profil vous plaît, n&apos;hésitez pas à{" "}
        <a
          className="link"
          href="#contact"
          aria-label="Redirection vers la section Contact"
        >
          me contacter grâce au formulaire prévu à cet effet.
        </a>
        <h3>Qui suis-je ?</h3>
        Je suis <b>Ingénieur</b> de formation et aime le revendiquer. Au
        quotidien, mon <b>esprit d&apos;analyse et de déduction</b> me permet
        d&apos;exercer mon métier avec compétence et professionnalisme.
        L&apos;aspect technique de mon métier est primordial, il est essentiel
        pour moi de participer activement à la concrétisation d&apos;un projet.{" "}
        <br />
        Je suis un <b>Développeur Fullstack</b> expérimenté, React pour la
        partie FrontEnd, Node.js principalement pour la partie BackEnd. Le monde
        technologique étant mouvant, découvrir de nouvelles technologies ne
        m&apos;effraie pas, je sais aller chercher les informations là où elles
        se trouvent pour m&apos;adapter. Mes divers{" "}
        <a
          className="link"
          href="#projects"
          aria-label="Redirection vers la section Projets"
        >
          projets personnels
        </a>{" "}
        me permettent de me sensibiliser à de nouveaux frameworks ou
        d&apos;expérimenter de nouvelles technologies.
        <br />
        J&apos;ai l&apos;habitude de travailler en équipe au quotidien, mon
        expérience de développeur senior me permet d&apos;accompagner
        naturellement mes collègues. J&apos;essaie de leur transmettre du mieux
        possible mes connaissances et les bonnes pratiques apprises apprises au
        fil des ans. <b>J&apos;apprécie le travail en équipe</b> pour tous ces
        moments d&apos;échanges qui nous permettent de progresser ensemble et
        d&apos;avoir pour objectif commun : la réussite du projet.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
