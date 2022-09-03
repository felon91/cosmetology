import React, { createElement } from 'react';
import cn from 'classnames';

import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  tag?: string;
  className?: string;
}

export const Title: React.FC<Props> = ({ className, tag = 'h2', children }) =>
  createElement(
    tag,
    {
      className: cn(className, 'h1 border-bottom fw-semibold pb-2 mb-4'),
    },
    <>{children}</>
  );
