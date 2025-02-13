export default function NavBar() {
    return (
        <section className="w-full max-w-7xl mx-auto h-20 py-2 flex items-center justify-between bg-slate-200">
            <article className="w-20 h-20 pl-3 md:pl-1 grid place-content-center">
                <img
                    src="/v1/avatar-x3.png"
                    alt=""
                    className="w-16 h-16 rounded-full border-2 border-[#E41E2E]"
                />
            </article>
            <article className="w-2/3 h-20 grid  place-content-center ">
                <ul className="flex text-slate-200 md:gap-x-3 gap-x-1 text-md uppercase mx-auto">
                    <li>
                        <a
                            href="/pay"
                            className="w-full px-3 py-4 text-sm font-bold text-center uppercase overflow-hidden bg-red-500 hover:bg-red-600 text-slate-200 rounded-md hover:shadow-md hover:shadow-slate-600 hover:underline"
                        >
                            Listado
                        </a>
                    </li>
                    <li className="md:block hidden">
                        <a
                            href="/pay"
                            className="w-full px-3 py-4 text-sm font-bold text-center uppercase overflow-hidden bg-red-500 hover:bg-red-600 text-slate-200 rounded-md hover:shadow-md hover:shadow-slate-600 hover:underline "
                        >
                            Ciudad
                        </a>
                    </li>
                    <li className="md:block hidden">
                        <a
                            href="/pay"
                            className="w-full px-3 py-4 text-sm font-bold text-center uppercase overflow-hidden bg-red-500 hover:bg-red-600 text-slate-200 rounded-md hover:shadow-md hover:shadow-slate-600 hover:underline"
                        >
                            Comunidad
                        </a>
                    </li>
                    <li>
                        <a
                            href="/pay"
                            className="w-full px-3 py-4 text-sm font-bold text-center uppercase overflow-hidden bg-red-500 hover:bg-red-600 text-slate-200 rounded-md hover:shadow-md hover:shadow-slate-600 hover:underline"
                        >
                            Blog
                        </a>
                    </li>
                </ul>
            </article>
            <article className="w-1/5 h-20 grid place-content-center">
                <a
                    href="/pay"
                    className="w-full px-3 py-4 text-sm font-bold text-center uppercase overflow-hidden bg-cyan-400 hover:bg-cyan-500 text-slate-200 rounded-md hover:shadow-md hover:shadow-slate-600 hover:underline"
                >
                    Login
                </a>
            </article>
        </section >
    )
}
