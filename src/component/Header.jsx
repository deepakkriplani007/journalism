import { motion } from "framer-motion";
import logop from "../assets/image1.png";
import { useState } from "react";
import { useEffect } from "react";
const Header = () => {
  const textVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Retired Journalist",
    "Practical Insights",
    "Investigative Guru",
  ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div
      id="header"
      className=" px-10 flex gap-4 w-full sm:h-screen h-[30rem] text-white"
    >
      {/* text container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ ease: "easeOut", duration: 1 }}
        className="sm:w-3/4 md:w-3/4 lg:w-1/2 xl:w-1/2 lg:h-full h-96  gap-5 flex flex-col justify-center"
      >
        <h1 className=" text-2xl sm:text-5xl font-bold ">
          Explore the Art of Journalism with Mr. Arun
        </h1>
        <span className="text-xl sm:text-3xl ">
          Welcome To The Future Of Journalism
        </span>
        <h1 className="text-xl sm:text-3xl">
          {`With Mr. Arun`} <br />
          <span className="font-bold" dataperiod="1000">
            <span className="text-gray-800">
              {" ,"}
              {text}
            </span>
          </span>
        </h1>
      </motion.div>

      {/* image container */}

      <div className="w-1/2 max-md:hidden md:items-start md:w-3/4 h-screen md:flex lg:items-center lg:justify-end">
        <img src={logop} className="w-3/4" alt="user image" />
      </div>
    </div>
  );
};

export default Header;
