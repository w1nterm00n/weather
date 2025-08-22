export type Scale = "F" | "C";
let scale: Scale = "F";

export function getScale() {
  return scale;
}

export function setScale(newScale: Scale) {
  scale = newScale;
}