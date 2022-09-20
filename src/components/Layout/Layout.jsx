import { Suspense } from 'react';

import { Container } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

import { RotatingLines } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense
        fallback={
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <RotatingLines strokeColor="#eee56b" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
