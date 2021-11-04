import { FC, HTMLProps, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

interface ContentWrapperProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children, title = '' }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default ContentWrapper;
