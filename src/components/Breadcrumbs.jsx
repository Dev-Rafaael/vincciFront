import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Breadcrumbs.module.css';

const Breadcrumbs = ({ paths }) => {
  const navigate = useNavigate();

  const handleBreadcrumbClick = (path) => {
    if (path.onClick) {
      path.onClick();
    } else if (path.url) {
      navigate(path.url, { state: path.state });
    }
  };

  return (
    <nav className={classes.breadcrumbs}>
      {paths.map((path, index) => {
        const isLast = index === paths.length - 1; 

        return (
          <span key={index}>
            {index > 0 && ' > '}
            <span
              className={classes.span}
              onClick={() => handleBreadcrumbClick(path)}
              style={{
                cursor: path.url || path.onClick ? 'pointer' : 'default',
                color: isLast ? 'rgb(92, 91, 90)' : ' rgb(146, 117, 60)',
                textDecoration:  'none',
                textTransform:  'uppercase', 
              }}
            >
              {path.label}
            </span>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
