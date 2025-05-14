// import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      HomePage
      <div>
        <ul>
           <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/Contact">Contact Page</Link>
          </li>
          <li>
            <Link href="/listUser">List User</Link>
          </li>
        </ul>
      </div>
    </div>
  
  );
}
