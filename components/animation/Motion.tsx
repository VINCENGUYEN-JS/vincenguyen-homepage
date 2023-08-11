import { AnimatePresence, motion } from "framer-motion";

type AnimatedComponent = {
  children: React.ReactNode;
};

const generateUniqueKey = () => {
  const uniqueId = new Date().getTime();
  return uniqueId;
};

const AnimatedComponent = (props: AnimatedComponent) => {
  const { children } = props;
  return (
    <>
      <AnimatePresence mode="wait" initial={false} />
      <motion.div
        key={generateUniqueKey()}
        style={{ display: "inline-block" }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedComponent;
