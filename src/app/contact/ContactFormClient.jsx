"use client";
import { useState } from "react";

export default function ContactFormClient() {
    const [status, setStatus] = useState("");
    const [isError, setIsError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("");
        setIsError(false);
        const form = e.target;
        const data = new FormData(form);
        const res = await fetch("/contact.php", {
            method: "POST",
            body: data,
        });
        if (res.ok) {
            setStatus("Message envoyé ! Merci, nous vous répondrons rapidement.");
            setIsError(false);
            form.reset();
        } else {
            setStatus("Erreur lors de l'envoi. Merci de réessayer.");
            setIsError(true);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4.5 w-full">
            <div>
                <input
                    type="text"
                    name="name"
                    className="w-full text-sm border-b-1 border-gray-900 text-gray-900 py-2 px-1 focus:outline-none placeholder-gray-700"
                    placeholder="Votre nom"
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    className="w-full text-sm border-b-1 border-gray-900 text-gray-900 py-2 px-1 focus:outline-none placeholder-gray-700"
                    placeholder="Votre email"
                />
            </div>
            <div>
                <textarea
                    name="message"
                    className="w-full text-sm border-b-1 border-gray-900 text-gray-900 py-2 px-1 mt-2 focus:outline-none placeholder-gray-700 resize-none"
                    placeholder="Dites-nous ce que vous avez en tête..."
                    rows={3}
                />
            </div>
            <button
                type="submit"
                className="hero-button pt-5"
            >
                Envoyer
            </button>
            {status && (
                <p className={`mt-4 font-semibold ${isError ? "text-red-600" : "text-green-600"}`}>{status}</p>
            )}
        </form>
    );
} 