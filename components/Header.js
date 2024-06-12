import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref legacyBehavior>
          <h2>Office of Housing Counseling</h2>
        </Link>
      </div>
    </header>
  );
}
