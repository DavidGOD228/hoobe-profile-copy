import { IContent } from "@/types/profile";
import Image from "next/image";
import { imageLinkBuild, youtubeLinkBuild } from "@/helpers/link";
import HoobeIcon from "../../../public/hoobe.svg";
import styles from "./content.module.css";

interface IProps {
  item: IContent;
}

export const UserContent = ({ item }: IProps) => {
  return (
    <div className={styles.container}>
      {item.content.hasPhoto && <ImageContent item={item} />}
      {item.content.isEmbedEnabled && (
        <><iframe
          height={290}
          className={styles.video}
          src={youtubeLinkBuild(item.content.link)}
        />
            <div className={styles.footer}/>
        </>
      )}
    </div>
  );
};

const ImageContent = ({ item }: IProps) => {
  const handlePress = () => {
    window.open(item.content.link);
  };

  return (
    <div className={styles.imageContainer} onClick={handlePress}>
      <Image
        className={styles.image}
        fill
        src={imageLinkBuild(item.content.altId)}
        alt={item.content.altId || "Image Content"}
      />
      <div className={styles.footer}>
        <div className={styles.imageTitle}>{item.content.title}</div>
        <div className={styles.imageLogoContainer}>
          <Image fill src={HoobeIcon} alt={item.content.altId} />
        </div>
      </div>
    </div>
  );
};
