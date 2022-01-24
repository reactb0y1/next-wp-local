import React from 'react';
import { ReactComponent as FB } from '../../../assets/images/fb.svg';
import { ReactComponent as Twitter } from '../../../assets/images/twitter.svg';
import { ReactComponent as Instagram } from '../../../assets/images/instagram.svg';
import { ReactComponent as Arrow } from '../../../assets/images/arrow.svg';
import { ReactComponent as ArrowBig } from '../../../assets/images/arrow-big.svg';

type ComponentSvg = React.FC<React.SVGProps<SVGSVGElement>>;

interface IProps extends React.SVGProps<SVGSVGElement> {
  variant: IconVariant;
  className?: string;
  style?: React.CSSProperties;
}

type IconVariantComponents = {
  [T in IconVariant]: ComponentSvg;
};

export type IconVariant = 'fb' | 'twitter' | 'instagram' | 'arrow' | 'arrow-big';

const variantComponents: IconVariantComponents = {
  fb: FB,
  twitter: Twitter,
  instagram: Instagram,
  arrow: Arrow,
  'arrow-big': ArrowBig,
};

export const Icon = (props: IProps) => {
  const Component = variantComponents[props.variant];
  return Component ? <Component {...props} /> : null;
};
