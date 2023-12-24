import { useState } from 'react';

import * as Prime from './prime-setup/index.module';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='container'>
        <h1>Hello World App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          similique, porro deleniti nihil nam laudantium, possimus ipsa quaerat
          quos eum, facere veritatis labore ipsam id. Asperiores, illo nostrum.
          Ad, maiores?
        </p>
        <section>
          <div className='surface-card border-round shadow-2 p-4'>
            <h1>Hello World App</h1>
          </div>
        </section>
        <div className='px-4 py-8 md:px-6 lg:px-8 flex gap-2 justify-content-center align-items-center'>
          <div className='surface-card w-6 sm:w-max border-round shadow-2 p-4'>
            <p className='text-center text-6xl font-bold'>Portfolio/Resume</p>
            <p className='text-center font-bold'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              dicta?
            </p>
            <div className='card flex justify-content-center'>
              <Prime.Button label='Click Here' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
