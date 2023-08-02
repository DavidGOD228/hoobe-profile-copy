import { NextPage } from "next";
import Image from "next/image";
import { Logo } from "@/components/Logo/Logo";
import styles from "./profile.module.css";
import { socialPlatformLogos, SocialPlatformLogosItem } from "@/constants/socialLogoLogos";
import { UserContent } from "@/components/UserContent/UserContent";
import { IPageData } from "../../types/pageData";

interface IUserProfile {
    PageData: IPageData;
}

const UserProfile: NextPage<IUserProfile> = ({ PageData }) => {
  if (!PageData) {
    return <div>Wrong User</div>;
  }

  const { user, userSocialPlatform, content } = PageData;

  return (
    <div className={styles.container}>
      <Logo styles={styles.logo} />
      <h4 className={styles.text}>{user.fullName}</h4>

      <div className={styles.socialContainer}>
        {userSocialPlatform.map((platform) => (
          <a
            key={platform.id}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image
              width={24}
              height={24}
              src={socialPlatformLogos[platform.socialPlatform as SocialPlatformLogosItem]}
              alt={platform.handle || platform.link}
            />
          </a>
        ))}
      </div>

      <div className={styles.contentContainer}>
        {content.map((item) => (
          <UserContent item={item} key={item.content.id} />
        ))}
      </div>

    </div>
  );
};



export default UserProfile;
