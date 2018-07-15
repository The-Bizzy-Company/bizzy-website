export default function classNames(...classes: string[]) {
  return classes.filter(className => className).join(' ');
}
