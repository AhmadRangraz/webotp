import React, { useEffect, useState } from 'react';


const App = () => {

  const [pin, setPin] = useState('');
  useEffect(() => {
    console.log( navigator.credentials
        .get({
          otp: { transport: ['sms'] },
        }));
        console.log("dude im notttt in if");
    if ('OTPCredential' in window) {
        console.log("if");

      const ac = new AbortController();
      navigator.credentials
        .get({
          otp: { transport: ['sms'] },
          signal: ac.signal,
        })
        .then(otp => {
          console.log({ otp });
          setPin(otp.code);
          ac.abort();
        })
        .catch(err => {
          ac.abort();
          console.log(err);
        });
    }
  });

  return (
    <section>
     <h1>test 2 </h1>
      <h2> pin is : {pin}</h2>
    </section>
  );
};

export default App;

