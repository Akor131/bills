import Image from "next/image"

export default function Dashboard () {
    return (
        <main>
            <p>User dashboard</p>
            <p>propose a UI design</p>
            <p>Build the UI</p>
            <p>propose possible changes</p>

            <Image width={480} height={250} src="/sam.jpg" alt="image of sam"/>
        </main>
    )
}