import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "ROBO NITARIO🤖",
        1000,
        "I'm Your Personal OpenAI ChatGPT! 🤖",
        2000,
        " How can I assist you today?💻",
        1500,
      ]}
      speed={50}
      className="text-xl md:text-[30px] lg-[30px]"
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
