import React from 'react';

import './Dashboard.scss';
import ListDashboard from './ListDashboard';

const Dashboard = ({element}) => {
    return (
      <>
        <div className = "dashboardContainer" >
          <div className = "backgroundContainer" >
          <div className="centered">
              <span>Online Flee Market for Clothes</span>
              <br/>
              <p className="subtitle fancy">
                <span>
                        It's time to recycle
                </span>
              </p>
            </div>
          </div>
        </div>
          <ListDashboard element={element} />
       </> 
    )
}

export default Dashboard;

