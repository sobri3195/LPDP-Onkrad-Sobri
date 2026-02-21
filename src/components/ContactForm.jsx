import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState(null) // 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For Netlify Forms, the form data is sent automatically via the form's action
      // This is just for showing success feedback to the user
      console.log('Form submitted:', formData)
      setStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus(null), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
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

      {status === 'success' && (
        <div className="form-success">
          ✅ Pesan berhasil dikirim! Terima kasih telah menghubungi. Saya akan merespons secepat mungkin.
        </div>
      )}

      {status === 'error' && (
        <div className="form-error">
          ❌ Terjadi kesalahan. Silakan coba lagi atau hubungi melalui email langsung.
        </div>
      )}

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
          disabled={status === 'submitting'}
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
          disabled={status === 'submitting'}
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
          disabled={status === 'submitting'}
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
          disabled={status === 'submitting'}
        />
      </div>

      <button 
        type="submit" 
        className="btn btn-primary"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Mengirim...' : 'Kirim Pesan'}
      </button>
    </form>
  )
}

export default ContactForm
