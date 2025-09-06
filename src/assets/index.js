const images = import.meta.glob("./**/*.webp", {
  eager: true,
  import: "default",
});

export function imgSrc(path) {
  return images[`./${path}.webp`];
}
