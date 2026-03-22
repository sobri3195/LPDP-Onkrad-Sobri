const SECTION_SELECTORS = {
  motivation: '.motivation-section',
  career: '.career-plan-section',
  contribution: '.contribution-section',
  study: '.study-plan-section',
  lpdpFull: '.lpdp-page',
  produktools: '.products-one-page-section'
}

const FALLBACK_CONTENT = {
  motivation: `Motivation Letter

Saya memilih melanjutkan pendidikan Spesialis Onkologi Radiasi karena pengalaman kehilangan orang terkasih akibat kanker membentuk komitmen saya untuk berkontribusi lebih nyata bagi pasien kanker di Indonesia.

Saya melihat radioterapi sebagai bidang yang memadukan presisi ilmiah, keselamatan pasien, dan tanggung jawab kemanusiaan. Di tengah beban kanker yang terus meningkat dan keterbatasan layanan radioterapi di Indonesia, saya ingin mengambil peran dalam menghadirkan pelayanan yang lebih aman, modern, dan berkeadilan.

Komitmen ini sudah mulai saya wujudkan melalui pengembangan OnkoSob sebagai platform edukasi pasien, panduan layanan, monitoring pasien anonim, dan dashboard admin demo, serta Clinical Calculation Workspace sebagai dashboard kalkulator klinis untuk simulasi, validasi input, histori, preset, dan efisiensi workflow. Meski masih berupa prototype, keduanya menunjukkan kesiapan saya membangun jembatan antara kebutuhan medis dan teknologi.

Fokus kontribusi:
- Meningkatkan akses pelayanan radiasi onkologi yang aman, presisi, dan berkualitas
- Mengembangkan inovasi digital untuk edukasi pasien dan efisiensi workflow klinis
- Membangun kapasitas SDM kesehatan di bidang onkologi radiasi
- Mendorong sistem layanan kanker yang lebih modern, adil, dan berpihak pada pasien`,
  career: `Career Plan 5-10 Tahun\n\nTahun 1-2: Pendidikan spesialis dengan fokus kompetensi inti radiasi onkologi.\nTahun 3-4: Pendalaman sub-spesialis dan modalitas terapi modern.\nTahun 5: Residensi senior dan riset klinis.\nTahun 6-7: Lulus dan praktik awal sebagai SpOnkRad.\nTahun 8-10: Pengembangan karir, riset, edukasi, dan kontribusi nasional.`,
  contribution: `Contribution Plan\n\nKontribusi klinis, akademis, edukasi, dan kebijakan untuk memperkuat layanan onkologi radiasi di Indonesia.\n\nFokus kontribusi:\n- Pelayanan klinis berkualitas\n- Riset epidemiologi dan protokol lokal\n- Pelatihan SDM kesehatan\n- Advokasi kebijakan layanan kanker`,
  study: `Study Plan\n\nProgram: Spesialis Onkologi Radiasi (SpOnkRad)\nDurasi: 5-6 tahun\nFokus: Radiasi biologi, fisika radiasi, IMRT, VMAT, SBRT, SRS, brakiterapi, riset klinis.`,
  lpdpFull: `LPDP Full Package\n\nDokumen ini berisi ringkasan Motivation Letter, Career Plan, Contribution Plan, dan Study Plan untuk aplikasi LPDP.`,
  produktools: `Produk Sobri RadOnc (1 Halaman)\n\n- Sobri RadOnc Calc\n- Sobri RadOnc Quiz\n- Sobri RadOnc Cards\n- Sobri RadOnc Atlas\n- Sobri RadOnc Terms\n- Sobri RadOnc Notes\n- Sobri RadOnc Guide\n- Sobri RadOnc OAR`
}

const FILE_TO_SECTION = {
  'Motivation_Letter.pdf': 'motivation',
  'Career_Plan.pdf': 'career',
  'Contribution_Plan.pdf': 'contribution',
  'LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf': 'lpdpFull',
  'Sobri_RadOnc_Products_One_Page.pdf': 'produktools'
}

function normalizeText(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, '')
    .trim()
}

function extractSectionText(sectionKey) {
  const selector = SECTION_SELECTORS[sectionKey]
  if (!selector) return FALLBACK_CONTENT[sectionKey] || ''

  const section = document.querySelector(selector)
  if (!section) return FALLBACK_CONTENT[sectionKey] || ''

  const title = section.querySelector('h1, h2, h3')?.textContent || 'Dokumen'
  const paragraphs = Array.from(section.querySelectorAll('p, li, h4'))
    .map((node) => normalizeText(node.textContent || ''))
    .filter(Boolean)

  const grepped = paragraphs.join('\n')
  if (!grepped) return FALLBACK_CONTENT[sectionKey] || ''

  return `${normalizeText(title)}\n\n${grepped}`
}

function escapePdfText(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

function buildPdf(text, title = 'Document') {
  const cleanText = text
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '')
    .trim()

  const lines = cleanText.split('\n').flatMap((line) => {
    const chunks = []
    let remaining = line || ' '
    while (remaining.length > 95) {
      chunks.push(remaining.slice(0, 95))
      remaining = remaining.slice(95)
    }
    chunks.push(remaining)
    return chunks
  })

  const maxLinesPerPage = 45
  const pages = []
  for (let i = 0; i < lines.length; i += maxLinesPerPage) {
    pages.push(lines.slice(i, i + maxLinesPerPage))
  }

  const objects = []
  const addObject = (content) => {
    objects.push(content)
    return objects.length
  }

  const catalogObj = addObject('')
  const pagesObj = addObject('')
  const fontObj = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')

  const pageObjectNumbers = []

  pages.forEach((pageLines) => {
    const streamLines = ['BT', '/F1 11 Tf', '50 790 Td', '14 TL']
    pageLines.forEach((line, index) => {
      if (index === 0) {
        streamLines.push(`(${escapePdfText(line)}) Tj`)
      } else {
        streamLines.push('T*')
        streamLines.push(`(${escapePdfText(line)}) Tj`)
      }
    })
    streamLines.push('ET')

    const stream = streamLines.join('\n')
    const contentObj = addObject(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`)
    const pageObj = addObject(
      `<< /Type /Page /Parent ${pagesObj} 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${fontObj} 0 R >> >> /Contents ${contentObj} 0 R >>`
    )
    pageObjectNumbers.push(pageObj)
  })

  objects[catalogObj - 1] = `<< /Type /Catalog /Pages ${pagesObj} 0 R >>`
  objects[pagesObj - 1] = `<< /Type /Pages /Kids [${pageObjectNumbers.map((n) => `${n} 0 R`).join(' ')}] /Count ${pageObjectNumbers.length} >>`

  let pdf = '%PDF-1.4\n'
  const offsets = [0]

  objects.forEach((objectContent, index) => {
    offsets.push(pdf.length)
    pdf += `${index + 1} 0 obj\n${objectContent}\nendobj\n`
  })

  const xrefOffset = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n`
  pdf += '0000000000 65535 f \n'
  for (let i = 1; i <= objects.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogObj} 0 R /Info << /Title (${escapePdfText(title)}) >> >>\n`
  pdf += `startxref\n${xrefOffset}\n%%EOF`

  return new Blob([pdf], { type: 'application/pdf' })
}

export function downloadPdfByFilename(filename, titleOverride) {
  const sectionKey = FILE_TO_SECTION[filename]
  if (!sectionKey) return false

  const text = extractSectionText(sectionKey)
  const pdfBlob = buildPdf(text, titleOverride || filename)
  const url = URL.createObjectURL(pdfBlob)

  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()

  setTimeout(() => URL.revokeObjectURL(url), 1000)
  return true
}
