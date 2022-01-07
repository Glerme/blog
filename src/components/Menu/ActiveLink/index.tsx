import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

import { cloneElement, ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  activeClassName,
  href,
  ...rest
}) => {
  const { asPath } = useRouter();

  const className =
    asPath.toString() === href.toString() ? activeClassName : '';

  return (
    <Link href={href} {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
};
