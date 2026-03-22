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

  '/projects/gen-rad-guardian': {
    title: 'Gen-Rad Guardian | Karya Sobri',
    description:
      'Landing page Gen-Rad Guardian, platform AI preventif untuk manajemen risiko kanker, edukasi skrining dini, dan explainability.'
  },
  '/projects/gen-rad-guardian/dashboard': {
    title: 'Dashboard Gen-Rad Guardian | Karya Sobri',
    description:
      'Dashboard risiko Gen-Rad Guardian dengan risk score, alert preventif, faktor risiko aktif, dan riwayat asesmen.'
  },
  '/projects/gen-rad-guardian/profile': {
    title: 'Risk Profile Gen-Rad Guardian | Karya Sobri',
    description:
      'Profil risiko personal Gen-Rad Guardian dengan breakdown gaya hidup, paparan lingkungan, dan riwayat keluarga.'
  },
  '/projects/gen-rad-guardian/recommendations': {
    title: 'Screening Recommendation Gen-Rad Guardian | Karya Sobri',
    description:
      'Rekomendasi skrining suportif Gen-Rad Guardian dengan disclaimer validasi klinis yang jelas.'
  },
  '/projects/gen-rad-guardian/monitoring': {
    title: 'Monitoring Gen-Rad Guardian | Karya Sobri',
    description:
      'Trend dan monitoring Gen-Rad Guardian untuk pemantauan skor risiko, perilaku, dan milestone preventif.'
  },
  '/projects/gen-rad-guardian/education': {
    title: 'Education Gen-Rad Guardian | Karya Sobri',
    description:
      'Halaman edukasi dan pencegahan Gen-Rad Guardian berisi checklist, FAQ, dan myth vs fact.'
  },
  '/projects/gen-rad-guardian/explainability': {
    title: 'Explainability Gen-Rad Guardian | Karya Sobri',
    description:
      'Transparansi model dan audit trail Gen-Rad Guardian untuk mendukung penggunaan AI yang aman.'
  },
  '/projects/gen-rad-guardian/admin': {
    title: 'Population Insights Gen-Rad Guardian | Karya Sobri',
    description:
      'Admin dan population insights Gen-Rad Guardian untuk distribusi risiko, kohort, dan kesehatan dataset.'
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
