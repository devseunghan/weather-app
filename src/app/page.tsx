import Link from 'next/link'
import style from './style.module.css'
import { getCurrentWeather } from '@/utils/getCurrentWeather'
import { getTime } from '@/utils/getTime'
import RevalidateButton from '@/components/RevalidateButton'

export default async function Home() {
  return (
    <>
      <h1>날씨 앱</h1>
      <ul className={style.list}>
        <li>
          <Link href="/seoul?name=서울">서울</Link>
        </li>
        <li>
          <Link href="/NYC?name=뉴욕">뉴욕</Link>
        </li>
        <li>
          <Link href="/london?name=런던">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={'time'}/>
    </>
  )
}
