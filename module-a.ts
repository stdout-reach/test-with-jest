import modB from "./module-b";

export default function getName() {
  return "John Smith";
}

export function getAge() {
  return 35;
}

export function getFriend() {
  return modB();
}
