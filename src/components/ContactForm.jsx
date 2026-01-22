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
    console.log('Form submitted:', formData)
  }

  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ display: 'none' }}>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

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
