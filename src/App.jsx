import { useState } from 'react';

import * as Prime from './prime-setup/index.module';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>Navbar</nav>
      <section>
        <div className='container'>
          <div className='surface-card border-round shadow-2 p-4'>
            <div className='flex flex-column gap-2'>
              <h1 className='m-0 text-900 text-3xl font-medium line-height-3'>
                Saroj Padhan
              </h1>
              <p className='mt-0 mb-0 text-600 text-lg'>
                Software Engineer, Cognizant
              </p>
              <p className='mt-0 mb-0 text-600 text-sm'>
                Experience in the development of Web-based solutions and
                Application development as a Full Stack Developer. Experience in
                Application Development using RestFull Webservice, HTML5, CSS3,
                Javascript, Angular, ReactJs, PHP and NodeJs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-2 '>
        <div className='container'>
          <div className='surface-card border-round shadow-2 p-4'>
            <div className='flex flex-column gap-2'>
              <h1 className='m-0 text-900 text-3xl font-medium line-height-3'>
                Contact Information
              </h1>
              <div className='mt-0 mb-0 text-600 text-lg'>
                <div className='card'>
                  <Prime.Button
                    icon='pi pi-mobile'
                    rounded
                    text
                    severity='success'
                    label='+91- 7809120629'
                  />
                  <Prime.Button
                    icon='pi pi-at'
                    rounded
                    text
                    severity='success'
                    label='saroj.padhan11@gmail.com'
                  />
                  <Prime.Button
                    icon='pi pi-github'
                    rounded
                    text
                    severity='success'
                    label='https://github.com/saroj8455/'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
