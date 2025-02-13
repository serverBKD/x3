import React from "react"

export default function Button({ Text }: { Text: string | null }) {
    const handleSearch = (evt: React.MouseEvent<HTMLButtonElement>) => {
        const target = evt.target as HTMLButtonElement
        window.alert('buscando... ' + target.value)
    }
    return (
        <button
            className="hover:cursor-grab hover:underline "
            onClick={evt => handleSearch(evt)}
        >
            {Text}
        </button>
    )
}
