import { PropsWithChildren, ReactNode } from 'react';

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  // const { src, alt } = image;
  return (
    <div>
      {/* <img src={src} alt={alt} /> */}

      <img {...image} />
      {children}
    </div>
  );
}
