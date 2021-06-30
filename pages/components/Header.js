import Link from 'next/link'
export default function Header() {
    return (<>
        <header className="flex justify-between w-full text-left bg-green-300">
            <h1 className="text-3xl ">Cookie Stand Admin</h1>
            <Link href="/overview">
                <a className="bg-green-600 border border-gray-800 ">Overview</a>
            </Link>
        </header>
    </>)
}
