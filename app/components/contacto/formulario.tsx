"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setSuccess(true)
      formRef.current?.reset()
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      data-aos="fade-left"
      className="md:p-10 p-5 bg-[#131332] rounded-lg w-full mx-auto max-w-[700px]"
    >
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        required
        className="px-4 bg-[#363659] text-white rounded-md w-full py-3 sm:py-4"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="px-4 mt-6 bg-[#363659] text-white rounded-md w-full py-3 sm:py-4"
      />

      <input
        type="text"
        name="phone"
        placeholder="Número de teléfono"
        className="px-4 mt-6 bg-[#363659] text-white rounded-md w-full py-3 sm:py-4"
      />

      <textarea
        name="message"
        placeholder="Déjame tu mensaje"
        required
        className="px-4 mt-6 bg-[#363659] text-white rounded-md w-full pt-3 sm:pt-4 h-[10rem]"
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-8 px-12 py-4 rounded-full bg-blue-700 hover:bg-blue-600 text-white transition duration-300 cursor-pointer"
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>

      {success && (
        <p className="mt-4 text-green-400">
          ✅ Mensaje enviado correctamente
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-400">
          ❌ Ocurrió un error, intenta nuevamente
        </p>
      )}
    </form>
  )
}