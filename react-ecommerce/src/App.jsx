import { setCookie } from './utilities/helper/cookie';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const createCookie = async () => {
      await setCookie("cookie", {
        name: "zahra", 
        access_token: "kjdfvjdfvkjdvngkjx", 
        refresh_token: "mjdavjdfvkjdvnrkjv"
      })
    }

    createCookie();
  }, [])
  return (
    <>This is App page.

    </>
  )
}

export default App
