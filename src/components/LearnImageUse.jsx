import Image from "next/image";
import GamingConsole from "../../public/images/GamingConsole.png";
const LearnImageUse = () => {
  return (
    <div>
      <Image src={GamingConsole} alt="Description" width={500} height={500} />
    </div>
  );
};

export default LearnImageUse;
