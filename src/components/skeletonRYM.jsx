import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./SkeletonRYM.css"; 

const SkeletonRYM = () => {
  return (
    <div style={{ background: "linear-gradient(to bottom, #0043fc, #053238, #042406)", padding: "1rem" }}>
      <SkeletonTheme baseColor="#042406" highlightColor="#053238">
        <div className="skeleton-RYM-card">
          <div className="skeleton-header">
            <Skeleton className="skeleton-img" width="100%" height="100%" />
            <div className="skeleton-status">
              <Skeleton width="80px" height="20px" />
            </div>
          </div>
          <div className="skeleton-body">
            <div className="skeleton-name">
              <Skeleton width="60%" height={30} />
            </div>
            <ul className="skeleton-info">
              <li className="skeleton-item">
                <Skeleton width="80%" height={16} />
              </li>
              <li className="skeleton-item">
                <Skeleton width="80%" height={16} />
              </li>
              <li className="skeleton-item">
                <Skeleton width="80%" height={16} />
              </li>
            </ul>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonRYM;
