import { Content } from 'components/Layout';
import React from 'react';

const EmptyLayout = ({ children, ...restProps }) => (
  <main className="cr-app bg-gradient-theme-left" {...restProps}>
    <Content fluid>{children}</Content>
  </main>
);

export default EmptyLayout;
