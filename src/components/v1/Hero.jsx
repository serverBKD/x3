export default function Hero() {
    return (
        <section className="w-full h-[50vh] bg-[url(/v1/homebanner.webp)] bg-right bg-cover bg-no-repeat ">
            <article className="w-full h-full flex flex-col gap-4 items-start justify-center pl-12 md:bg-transparent bg-red-500/70 text-slate-100 md:text-slate-800">
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-4xl text-red-50 md:text-red-500  drop-shadow-xl">gatoloco.com</h1>
                    <p className="md:w-1/3 w-1/2 md:text-xl text-balance italic font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nam provident esse cum labore nobis delectus dignissimos explicabo. Totam.</p>
                    <form className="flex">
                        {/* <select
                            id="search-x"
                            className="w-32 h-12 pl-3 my-2 mr-1 rounded-md text-red-200 shadow-md shadow-slate-800 bg-cyan-600"
                        >
                            <option value="CCTV" id="search-x">CCTV</option>
                            <option value="ALARMAS" id="search-x">ALARMAS</option>
                            <option value="CERCOS" id="search-x">CERCOS</option>
                        </select> */}
                        <select
                            id="search-x"
                            className="w-32 h-12 pl-3 my-2 mr-1 rounded-md text-red-200 shadow-md shadow-slate-800 bg-cyan-600"
                        >
                            <option value="VALENCIA" id="search-x">VALENCIA</option>
                            <option value="GUACARA" id="search-x">GUACARA</option>
                            <option value="SAN DIEGO" id="search-x">SAN DIEGO</option>
                            <option value="TOCUYITO" id="search-x">TOCUYITO</option>
                            <option value="BEJUMA" id="search-x">BEJUMA</option>
                        </select>
                        <button
                            className="w-14 h-12 my-2 bg-cyan-600  hover:bg-cyan-700 hover:cursor-grab hover:underline shadow-md shadow-slate-800 text-red-200 rounded-md"
                            onClick={() => window.alert('buscando...')}
                        >
                            <img
                                src="/v1/lupa.png"
                                alt=""
                                className="w-8 h8 text-center mx-auto"
                            />
                        </button>
                    </form>
                </div>
            </article>
        </section>
    )
}
