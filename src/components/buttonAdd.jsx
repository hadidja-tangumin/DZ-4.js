import { useState } from "react"
import './button.css'

export function ButtonAdd({ onClick }) {
    return (
        <button className="button" onClick={onClick}>Add</button>
    )
}