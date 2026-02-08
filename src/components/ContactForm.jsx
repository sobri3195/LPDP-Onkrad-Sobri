import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailTo = 'sobrimaulana@example.com'
    const subject = formData.subject?.trim() || 'Pesan dari Website Portofolio LPDP'
    const body = [
      `Nama: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Pesan:',
      formData.message
    ].join('\n')

    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">

      <div className="form-group">
        <label htmlFor="name">Nama Lengkap *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Masukkan nama lengkap Anda"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="nama@email.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subjek</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Topik pesan Anda"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Pesan *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          placeholder="Tulis pesan Anda di sini..."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Kirim Pesan
      </button>
    </form>
  )
}

export default ContactForm
