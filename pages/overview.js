import Link from 'next/link'

export default function Overview() {
    return (<>
        <h1>Overview Page</h1>
        <Link href="/">
                <a>Return to Main page</a>
        </Link>
    </>)
}
