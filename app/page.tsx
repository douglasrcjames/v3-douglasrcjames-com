export default function Home() {
    return (
        <main className="container px-5">
            <h1>
                {"Hi, I'm Doug."}<br/>
                {"I solve tech problems."}
            </h1>
            <ul role="list" className="my-2">
                <li><b>+</b> {"I'm a web engineer at Canary Marketing for their popup web shop system."}</li>
                <li><b>+</b> {"I'm a freelance full-stack software developer working with React.js/Native to build great user experiences."}</li>
                <li><b>+</b> {"I'm trained as a computer engineer in Silicon Valley, California."}</li>
                <li><b>+</b> {"In my free time, I'm working on Minute.tech to connect non-techies to techies for tech support."}</li>
            </ul>
            <button className="px-8 py-2 bg-blue-500 text-white rounded border-2 border-blue-500 hover:bg-transparent hover:text-blue-500">Work with me</button>
        </main>
    )
}
