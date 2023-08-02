import { IUserSocialPlatform, IUser } from "./user";
import { IContent } from "./profile";

export interface IPageData {
    user: IUser;
    userSocialPlatform: IUserSocialPlatform[];
    content: IContent[];
}
