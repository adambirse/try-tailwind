interface Props {
  id?: string;
}
export const MyComponent: React.FC<Props> = ({ id }) => {
  return <p id={id}>Hello</p>;
};
