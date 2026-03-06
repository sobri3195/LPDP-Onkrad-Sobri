import { Link, useLocation } from 'react-router-dom'
import './Breadcrumb.css'

function Breadcrumb() {
  const location = useLocation()

  const pathSegments = location.pathname.split('/').filter(segment => segment !== '')

  const getBreadcrumbItems = () => {
    const items = [
      { label: 'Home', path: '/' }
    ]

    pathSegments.forEach((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/')
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      items.push({ label, path })
    })

    return items
  }

  const breadcrumbItems = getBreadcrumbItems()

  if (location.pathname === '/') {
    return null
  }

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb navigation">
      <div className="container">
        <ol className="breadcrumb-list">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="breadcrumb-item">
              {index === breadcrumbItems.length - 1 ? (
                <span className="breadcrumb-current">{item.label}</span>
              ) : (
                <>
                  <Link to={item.path} className="breadcrumb-link">
                    {item.label}
                  </Link>
                  <span className="breadcrumb-separator">/</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
