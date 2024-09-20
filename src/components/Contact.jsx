import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  // Reusable animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        {...fadeInUp}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="py-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.a
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          href={`https://wa.me/${CONTACT.phoneNo}`}
          className="my-4 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          {CONTACT.phoneNo}
        </motion.a>
        <motion.a
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.6 }}
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}&su=Job%20Opportunity&body=I%20am%20interested%20in%20hiring%20you.`}
          className="border-b"
          target="_blank"
          rel="noopener noreferrer"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;

