import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

export function Breadcrumbs({ items }) {
  return (
    <div className="breadcrumbs-wrapper">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className={isLast ? 'active' : ''} aria-current={isLast ? 'page' : undefined}>
                {isLast ? (
                  <span>{item.label}</span>
                ) : (
                  <>
                    <Link to={item.path}>{item.label}</Link>
                    <span className="separator">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
