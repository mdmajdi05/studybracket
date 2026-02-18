import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const Breadcrumb = ({ items = [] }) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from URL if not provided
  const generateBreadcrumbs = () => {
    if (items.length > 0) return items;
    
    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbs = [];
    
    breadcrumbs.push({ label: 'Home', href: '/' });
    
    let cumulativePath = '';
    pathnames.forEach((pathname, index) => {
      cumulativePath += `/${pathname}`;
      const isLast = index === pathnames.length - 1;
      const label = pathname.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      
      breadcrumbs.push({
        label,
        href: isLast ? null : cumulativePath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="bg-light py-4 border-b border-gray-200">
      <div className="container-custom">
        <nav className="flex items-center text-sm">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {index === 0 && (
                <Link 
                  to={item.href} 
                  className="flex items-center gap-1 text-primary hover:text-secondary transition"
                >
                  <FaHome className="text-lg" />
                </Link>
              )}
              
              {index > 0 && (
                <>
                  <FaChevronRight className="mx-2 text-gray-400 text-xs" />
                  {item.href ? (
                    <Link 
                      to={item.href} 
                      className="text-primary hover:text-secondary transition font-medium"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gray-700 font-semibold">{item.label}</span>
                  )}
                </>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
