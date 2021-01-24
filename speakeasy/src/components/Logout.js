import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '256202970242-b2lcmkt138is5ss7mboi04qcaup1i76r.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Leaving the Best BBQ behind');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
