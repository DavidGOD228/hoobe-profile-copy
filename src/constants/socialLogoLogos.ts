import { SocialPlatform } from "@/types/enums";

import InstagramLogo from "../../public/instagram.svg";
import ThreadsLogo from "../../public/threads.svg";
import TwitterLogo from "../../public/twitter.svg";
import TikTokLogo from "../../public/tiktok.svg";

export type SocialPlatformLogosItem = SocialPlatform.Threads | SocialPlatform.Tiktok | SocialPlatform.Instagram | SocialPlatform.Twitter;

export const socialPlatformLogos = {
  [SocialPlatform.Instagram]: InstagramLogo,
  [SocialPlatform.Threads]: ThreadsLogo,
  [SocialPlatform.Tiktok]: TikTokLogo,
  [SocialPlatform.Twitter]: TwitterLogo,
};
