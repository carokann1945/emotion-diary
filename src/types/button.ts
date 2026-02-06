export type ButtonProps = {
  type: 'positive' | 'negative' | 'default';
  text: string;
  onClick: () => void;
};
