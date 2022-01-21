import React from 'react';
import { ReactComponent as FB } from '../../../assets/images/fb.svg';
import { ReactComponent as Twitter } from '../../../assets/images/twitter.svg';
import { ReactComponent as Instagram } from '../../../assets/images/instagram.svg';

type ComponentSvg = React.FC<React.SVGProps<SVGSVGElement>>;

interface IProps extends React.SVGProps<SVGSVGElement> {
  variant: IconVariant;
  className?: string;
  style?: React.CSSProperties;
}

type IconVariantComponents = {
  [T in IconVariant]: ComponentSvg;
};

export type IconVariant = 'fb' | 'twitter' | 'instagram';

const variantComponents: IconVariantComponents = {
  fb: FB,
  twitter: Twitter,
  instagram: Instagram,
};

export const Icon = (props: IProps) => {
  const Component = variantComponents[props.variant];
  return Component ? <Component {...props} /> : null;
};
