import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DEFAULT_META = {
  title: 'Muhammad Sobri Maulana - Portofolio LPDP Onkologi Radiasi',
  description:
    'Portofolio LPDP Muhammad Sobri Maulana - Dokter yang berkomitmen untuk menjadi Spesialis Onkologi Radiasi dan berkontribusi untuk Indonesia melalui penelitian dan pelayanan kesehatan.'
}

const ROUTE_META = {
  '/': {
    title: 'Beranda | Portofolio LPDP Muhammad Sobri Maulana',
    description:
      'Halaman beranda portofolio LPDP Muhammad Sobri Maulana berisi profil singkat, visi, dan komitmen pengembangan bidang onkologi radiasi di Indonesia.'
  },
  '/profile': {
    title: 'Profil | Portofolio LPDP Muhammad Sobri Maulana',
    description:
      'Profil pendidikan, pengalaman, dan kompetensi Muhammad Sobri Maulana dalam bidang kedokteran serta rencana spesialisasi onkologi radiasi.'
  },
  '/lpdp-package': {
    title: 'Paket LPDP | Portofolio LPDP Muhammad Sobri Maulana',
    description:
      'Kumpulan dokumen inti aplikasi LPDP, termasuk motivation letter, career plan, dan contribution plan Muhammad Sobri Maulana.'
  },
  '/publications': {
    title: 'Publikasi | Portofolio LPDP Muhammad Sobri Maulana',
    description:
      'Daftar publikasi ilmiah, karya riset, dan kontribusi akademik Muhammad Sobri Maulana dalam bidang kesehatan dan kedokteran.'
  },
  '/projects': {
    title: 'Proyek | Portofolio LPDP Muhammad Sobri Maulana',
    description:
      'Rangkaian proyek profesional dan inisiatif berdampak yang mendukung pelayanan kesehatan serta pengembangan keilmuan onkologi radiasi.'
  },
  '/documents': {
    title: 'Dokumen | Portofolio LPDP Muhammad Sobri Maulana',
    description:
      'Halaman unduh dokumen penting seperti CV, sertifikat, dan berkas pendukung aplikasi LPDP Muhammad Sobri Maulana.'
  },
  '/contact': {
    title: 'Kontak | Portofolio LPDP Muhammad Sobri Maulana',
    description:
      'Hubungi Muhammad Sobri Maulana untuk kolaborasi profesional, akademik, atau diskusi terkait kontribusi di bidang kesehatan.'
  },
  '/privacy-policy': {
    title: 'Kebijakan Privasi | Portofolio LPDP Muhammad Sobri Maulana',
    description:
      'Informasi kebijakan privasi dan perlindungan data pengguna pada website portofolio LPDP Muhammad Sobri Maulana.'
  }
}

function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const currentMeta = ROUTE_META[pathname] || DEFAULT_META

    document.title = currentMeta.title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute('content', currentMeta.description)
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]')
    if (canonicalTag) {
      canonicalTag.setAttribute('href', `https://muhammadsobri.netlify.app${pathname}`)
    }
  }, [pathname])

  return null
}

export default RouteMeta
