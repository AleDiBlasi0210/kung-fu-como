'use client'

import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          sede: data.get('sede'),
          subject: data.get('subject'),
          message: data.get('message'),
        }),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-inter font-medium text-black mb-1.5">
            Nome e Cognome *
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full border border-gray-light rounded-sm px-4 py-3 font-inter text-sm focus:border-red focus:outline-none"
            placeholder="Mario Rossi"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-inter font-medium text-black mb-1.5">
            Telefono *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full border border-gray-light rounded-sm px-4 py-3 font-inter text-sm focus:border-red focus:outline-none"
            placeholder="333 123 4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-inter font-medium text-black mb-1.5">
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full border border-gray-light rounded-sm px-4 py-3 font-inter text-sm focus:border-red focus:outline-none"
            placeholder="nome@email.com"
          />
        </div>
        <div>
          <label htmlFor="sede" className="block text-sm font-inter font-medium text-black mb-1.5">
            Sede preferita
          </label>
          <select
            id="sede"
            name="sede"
            className="w-full border border-gray-light rounded-sm px-4 py-3 font-inter text-sm focus:border-red focus:outline-none bg-white"
            defaultValue=""
          >
            <option value="">Seleziona una sede</option>
            <option value="ponte-lambro">Ponte Lambro</option>
            <option value="como">Como</option>
            <option value="albate">Albate</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-inter font-medium text-black mb-1.5">
          Oggetto
        </label>
        <input
          id="subject"
          name="subject"
          className="w-full border border-gray-light rounded-sm px-4 py-3 font-inter text-sm focus:border-red focus:outline-none"
          placeholder="Informazioni corsi"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-inter font-medium text-black mb-1.5">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full border border-gray-light rounded-sm px-4 py-3 font-inter text-sm focus:border-red focus:outline-none resize-y"
          placeholder="Scrivi qui il tuo messaggio..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full sm:w-auto"
      >
        {status === 'sending' ? 'Invio in corso...' : 'Invia richiesta'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm font-inter">
          Messaggio inviato correttamente. Ti risponderemo al più presto.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red text-sm font-inter">
          Errore durante l&apos;invio. Riprova o chiamaci direttamente al 338 846 6400.
        </p>
      )}
    </form>
  )
}
