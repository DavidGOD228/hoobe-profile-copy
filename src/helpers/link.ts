export const imageLinkBuild = (id: string) =>
  `https://devapp.hoo.be/_next/image?url=https%3A%2F%2Fcontent-images.devapp.hoo.be%2F${id}.webp%3Fv%3D1690475534960&w=1080&q=75`;
export const youtubeLinkBuild = (link: string) => {
  const parts = link.split("/");
  const id = parts[parts.length - 1];
  return `https://www.youtube.com/embed/videoseries?list=${id}&enablejsapi=1&autoplay=0&playsinline=1`;
};
