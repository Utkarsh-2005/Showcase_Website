import Link from "next/link"

const page = () => {
  return (
    <div>
      <h1>welcome to crazy website of utkarsh</h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/about/team'>Team</Link>
        </li>
      </ul>
    </div>
  )
}
export default page