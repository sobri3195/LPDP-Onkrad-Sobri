import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState(null) // 'submitting', 'success', 'error'

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nama minimal 3 karakter'
    } else if (!/^[a-zA-Z\s\u00C0-\u00FF'.-]+$/.test(formData.name.trim())) {
      newErrors.name = 'Nama hanya boleh berisi huruf dan spasi'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Format email tidak valid'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan harus diisi'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter'
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = 'Pesan maksimal 2000 karakter'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched({
      ...touched,
      [name]: true
    })

    // Validate this field on blur
    const fieldErrors = validateField(name, formData[name])
    if (fieldErrors) {
      setErrors({
        ...errors,
        [name]: fieldErrors
      })
    }
  }

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Nama harus diisi'
        if (value.trim().length < 3) return 'Nama minimal 3 karakter'
        if (!/^[a-zA-Z\s\u00C0-\u00FF'.-]+$/.test(value.trim())) {
          return 'Nama hanya boleh berisi huruf dan spasi'
        }
        break
      case 'email':
        if (!value.trim()) return 'Email harus diisi'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Format email tidak valid'
        }
        break
      case 'message':
        if (!value.trim()) return 'Pesan harus diisi'
        if (value.trim().length < 10) return 'Pesan minimal 10 karakter'
        if (value.trim().length > 2000) return 'Pesan maksimal 2000 karakter'
        break
      default:
        break
    }
    return ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    })

    // Validate all fields
    const validationErrors = validateForm()
    setErrors(validationErrors)

    // If there are errors, don't submit
    if (Object.keys(validationErrors).length > 0) {
      return
    }

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
      setErrors({})
      setTouched({})

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

      <div className={`form-group ${touched.name && errors.name ? 'has-error' : ''}`}>
        <label htmlFor="name">Nama Lengkap *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Masukkan nama lengkap Anda"
          disabled={status === 'submitting'}
          className={touched.name && errors.name ? 'error' : ''}
          aria-invalid={touched.name && errors.name ? 'true' : 'false'}
          aria-describedby={touched.name && errors.name ? 'name-error' : ''}
        />
        {touched.name && errors.name && (
          <span id="name-error" className="error-message" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className={`form-group ${touched.email && errors.email ? 'has-error' : ''}`}>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="nama@email.com"
          disabled={status === 'submitting'}
          className={touched.email && errors.email ? 'error' : ''}
          aria-invalid={touched.email && errors.email ? 'true' : 'false'}
          aria-describedby={touched.email && errors.email ? 'email-error' : ''}
        />
        {touched.email && errors.email && (
          <span id="email-error" className="error-message" role="alert">
            {errors.email}
          </span>
        )}
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
          maxLength={100}
        />
      </div>

      <div className={`form-group ${touched.message && errors.message ? 'has-error' : ''}`}>
        <label htmlFor="message">Pesan *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows="6"
          placeholder="Tulis pesan Anda di sini..."
          disabled={status === 'submitting'}
          className={touched.message && errors.message ? 'error' : ''}
          aria-invalid={touched.message && errors.message ? 'true' : 'false'}
          aria-describedby={touched.message && errors.message ? 'message-error' : ''}
          maxLength={2000}
        />
        {touched.message && errors.message && (
          <span id="message-error" className="error-message" role="alert">
            {errors.message}
          </span>
        )}
        <span className="char-count">
          {formData.message.length} / 2000 karakter
        </span>
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
