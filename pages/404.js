import { useEffect } from "react"
import { useRouter } from "next/router"

import Head from "next/head"


export default function Error() {
  const router = useRouter();

  useEffect(()=> {
      setTimeout(()=> {
        router.push('/wishlist')
      }, 3000)
  }, [router])

  return (
    <div>
        <Head>
          <title>404</title>
        </Head>
        <h2>404</h2>
        <h3>Что то пошло не так...</h3>



    </div>
  )
}
