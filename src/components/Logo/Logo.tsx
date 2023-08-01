import Image from "next/image";
import LogoImage from "../../../public/hoobe-icon.png";

interface Props {
  styles: string;
}

export const Logo = ({ styles }: Props) => {
  return <Image className={styles} src={LogoImage} alt={"LogoImage"} />;
};
