import React, { Suspense } from 'react';
import { Routes, Route, Router } from "react-router-dom";
import { Spinner } from 'flowbite-react';

const Home = React.lazy(() => import('@pages/Home'));
const Auth = React.lazy(() => import('@pages/Auth'));
const Editor = React.lazy(() => import('@pages/BlogEditor'));


function Navigation() {


  return (

    <Suspense fallback={<div className='w-full h-full flex items-center justify-center flex-col gap-2'><Spinner color={'success'} /> Getting resources...</div>}>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </Suspense>
  );
}

export default Navigation;
