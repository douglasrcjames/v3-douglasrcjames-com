import Image from 'next/image';

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

            {/* <div className="p-3 text-center border-solid" style={{flex: "0 1 100%", flexBasis: "100%"}}>
                <Image 
                    width="100"
                    height="100"
                    alt="computer"
                    className="m-3.5 overflow-clip text-center w-24" 
                    src="/icons/web-basic.png"
                />
                    <h3 className="text-[1.80rem] font-bold break-words text-center" style={{wordWrap: "break-word"}}>Basic</h3>
                <ul className="text-slate-800 leading-[1.60rem] m-4 text-center"><li className="list-item leading-[1.20rem] p-3 text-center"><div className="leading-[1.20rem] text-center">5 responsive web pages</div>
                <span className="text-[0.75rem] leading-[0.90rem] text-center">We will design your website with up to 5 custom web screens that look great on every device; iPhone, Android, Mac, and more. These pages are often Home, About Us, What We Do, F.A.Q., Products, etc.</span></li>
                <li className="list-item leading-[1.20rem] p-3 text-center"><div className="leading-[1.20rem] text-center">Contact form</div>
                <span className="text-[0.75rem] leading-[0.90rem] text-center">Form that collects visitor name, email, message, and automatically sends you an email with this info. Lowers the barrier for potential visitors to contact you with a personal message or question.</span>
                </li>
                <li className="list-item leading-[1.20rem] p-3 text-center"><div className="leading-[1.20rem] text-center">Google Analytics</div>
                <span className="text-[0.75rem] leading-[0.90rem] text-center">Google Analytics will allow you analyze the traffic that visits your website. Collects metrics such as unique visitors, page views, session duration, and more! 
                An example of this being helpful is if you are trying to understand if your advertisements are properly driving visitors to your website.</span>
                </li>
                <li className="list-item leading-[1.20rem] p-3 text-center">
                    <div className="leading-[1.20rem] text-center">SEO</div>
                    <span className="text-[0.75rem] leading-[0.90rem] text-center">Search Engine Optimization (SEO) increases your business relevance ranking on any search engine (Google, Bing, etc). 
                So if someone searches on Google for your business name or related keywords, you will appear at the top. Results can differ depending on your market, business name, competitors, and more.</span>
                </li></ul>
                <span className="text-lime-700 text-[1.60rem] text-center">$1000-$2000</span></div> */}
        </main>
    )
}
