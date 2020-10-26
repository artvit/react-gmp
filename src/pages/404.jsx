import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import Footer from '../components/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';

const NotFoundPage = () => {
  const router = useRouter();
  const onGoToHome = useCallback(() => router.push('/', undefined, { shallow: true }), [router]);
  return (
    <>
      <NotFound onGoToHomeClick={onGoToHome} />
      <Footer />
    </>
  );
};

export default NotFoundPage;
