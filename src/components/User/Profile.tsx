import { NextPage } from "next";
import { UserProfileProps } from "@/types/profile";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Logo } from "@/components/Logo/Logo";
import styles from "./profile.module.css";
import { socialPlatformLogos } from "@/constants/socialLogoLogos";
import { UserContent } from "@/components/UserContent/UserContent";

const UserProfile: NextPage<UserProfileProps> = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/pageData.json");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  const { user, userSocialPlatform, content } = data;

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
              src={socialPlatformLogos[platform.socialPlatform]}
              alt={platform.handle}
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
