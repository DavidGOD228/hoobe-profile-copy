export interface User {
  id: string;
  fullName: string;
  handle: string;
  altId: string;
  userType: number;
  categoryId: string;
  urlPath: string;
  hasPhoto: boolean;
  about: string;
  createdUtc: string;
  updatedUtc: string;
  imageUpdatedUtc: string;
}

export interface UserSocialPlatform {
  id: string;
  altId: string;
  userId: string;
  socialPlatform: number;
  handle: string;
  link: string;
  createdUtc: string;
}
