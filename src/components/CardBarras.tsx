import React from "react"

export default function CardBarras() {
  return (
    <section className="py-4 bg-slate-200 ">
      <article className="md:w-full w-xs md:h-48 h-full mx-auto md:gap-y-0 gap-y-6 py-4 md:py-0 border-2 border-red-400 rounded-lg flex md:flex-nowrap flex-wrap items-center justify-between overflow-hidden bg-slate-100 shadow-lg md:shadow-md shadow-slate-500">
        <div className="w-full md:w-1/4 md:h-full h-12 grid place-content-center ">
          <picture className="w-32 h-32 p-2 grid place-content-center rounded-full overflow-hidden bg-slate-100">
            <img
            src="/assets/img/kiev-ukraine-october-08-2023-600nw-2372272311-removebg-preview.png"
            alt=""
            className="w-32 h-32 object-contain object-center"
          />
        </picture>
        </div>
        <div className="w-full md:w-1/3 md:h-full h-32 px-4 flex flex-col items-start justify-evenly">
          <h1>Técnico Seguridad</h1>
          <div className="text-xs">https://tecnicoseguridad.shop</div>
          <div>⭐9.8/10</div>
        </div>
        <div className="w-full md:w-2/3 md:h-full h-18 md:gap-y-0 gap-y-3 px-4 flex flex-col items-start md:justify-evenly">
          <h2>Técnico Seguridad</h2>
          <p className="text-xs italic font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit!
        </p>
        </div>
        <div className="w-full md:w-1/3 h-full px-2 flex flex-col items-center justify-evenly">
          <a
            href="/pay"
            className="md:w-2/3 w-full md:px-2 px-1 md:py-4 py-2 md:text-sm text-xs font-bold text-center uppercase overflow-hidden bg-red-500 hover:bg-red-600 text-slate-200 rounded-md hover:shadow-md hover:shadow-slate-600 hover:underline"
          >
          Contactar
          </a>
        </div>
      </article>
    </section>
  )
}

