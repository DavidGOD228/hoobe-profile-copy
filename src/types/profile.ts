import { IUser, IUserSocialPlatform } from "@/types/user";

export interface IContent {
  content: {
    id: string;
    altId: string;
    title: string;
    contentType: number;
    mimeType: number;
    categoryAltId: string;
    link: string;
    isDraft: boolean;
    isDirectLinkEnabled: boolean;
    isEmbedEnabled: boolean;
    hasPhoto: boolean;
    sortOrder: number;
    isFeatured: boolean;
    isDeleted: boolean;
    isEditable: boolean;
    socialPlatform: number;
    userId: string;
    createdUtc: string;
    updatedUtc: string;
    imageUpdatedUtc: string;
  };
  childCount: number;
  imageCount: number;
  videoCount: number;
  contentSettings: {};
}

export interface IUserProfileProps {
  userData:
    | {
        user: IUser;
        userSocialPlatform: IUserSocialPlatform[];
        content: IContent[];
      }
    | null
    | undefined;
}
