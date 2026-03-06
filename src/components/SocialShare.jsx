import { useState } from 'react'
import './SocialShare.css'

function SocialShare({ title, url }) {
  const [copied, setCopied] = useState(false)

  const shareLinks = [
    {
      name: 'Facebook',
      icon: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: '#1877f2'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: '#1da1f2'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: '#0077b5'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
      color: '#25d366'
    }
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="social-share">
      <span className="share-label">Bagikan:</span>
      <div className="share-buttons">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="share-button"
            style={{ '--share-color': link.color }}
            title={`Bagikan ke ${link.name}`}
            aria-label={`Bagikan ke ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
        <button
          className="share-button copy-button"
          onClick={copyToClipboard}
          title="Salin tautan"
          aria-label="Salin tautan"
        >
          {copied ? '✅' : '🔗'}
        </button>
      </div>
    </div>
  )
}

export default SocialShare
