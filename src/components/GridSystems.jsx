import Button from './sub/Button'

export default function GridSystems() {
    return (
        <section className="w-full h-10 flex items-center justify-between text-red-100 font-bold">
            <article className="w-full h-full grid place-content-center bg-green-600">
                <Button Text={'CCTV'} />
            </article>
            <article className="w-full h-full grid place-content-center bg-orange-600">
                <Button Text={'ALARMAS'} />
            </article>
            <article className="w-full h-full grid place-content-center bg-cyan-600">
                <Button Text={'CERCOS'} />
            </article>
            <article className="w-full h-full grid place-content-center bg-violet-600">
                <Button Text={'ACCESO'} />
            </article>
        </section>
    )
}
