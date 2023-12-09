import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isARobot, setIsARobot] = useState();
  const captchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("/api/contact", {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        token: captchaRef.current.getValue(),
      })
      .then(() => {
        setLoading(false);
        alert("Message envoyé. Merci.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
        captchaRef.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);

        if (error.response.status === 400) {
          alert("Les robots ne sont pas autorisés à envoyer des messages.");
        } else {
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      });
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl sm-fixed"
      >
        <p className={styles.sectionSubText}>Envoyer un message</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Votre nom</span>
            <input
              type="text"
              name="name"
              value={form.name}
              required
              onChange={handleChange}
              placeholder="Jean Dupont"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Votre adresse mail
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              required
              onChange={handleChange}
              placeholder="jean.dupont@gmail.com"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Votre message (max 2500 caractères)
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              required
              onChange={handleChange}
              placeholder="Laissez ici votre message"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>
          <ReCAPTCHA
            sitekey={"6LcWxBEpAAAAAMPsjwjxzJOPtd2-BUKQ_7RHTukD"}
            theme={"dark"}
            onErrored={() => setIsARobot(true)}
            onChange={(value) => {
              console.log("value", value);
              setIsARobot(value === null);
            }}
            ref={captchaRef}
          />
          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[250px] sm:h-[50px] 
            w-[300px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out disabled:cursor-not-allowed"
            onMouseOver={() => {
              document
                .querySelector(".contact-btn")
                .setAttribute("src", sendHover);
            }}
            onMouseOut={() => {
              document.querySelector(".contact-btn").setAttribute("src", send);
            }}
            disabled={isARobot !== false}
          >
            {loading ? "Envoi en cours" : "Envoyer"}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
