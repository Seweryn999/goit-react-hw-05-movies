import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { internalBtmBorder } from 'components/sharedLayout/SharedLayout';

const AdditionalInfo = () => {
  return (
    <>
      <h4>Additional Information</h4>
      <ul style={internalBtmBorder}>
        <li>
          <Link to={'cast'} replace>
            Cast
          </Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<h2>Lazy loading in action</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AdditionalInfo;
