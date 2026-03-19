import { PropsWithChildren, ReactNode } from 'react';

type HeaderProps = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}>;

export default function Header({ image, children }: HeaderProps) {
  const { src, alt } = image;
  return (
    <div>
      {children}
      <img src={src} alt={alt} />
    </div>
  );
}
