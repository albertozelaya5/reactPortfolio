const images = import.meta.glob("./**/*.png", {
  eager: true,
  import: "default",
});

export function imgSrc(path) {
  return images[`./${path}.png`];
}
