/* Helps dynamically import images to project */
export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
}