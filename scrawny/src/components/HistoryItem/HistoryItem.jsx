import React from 'react'

const HistoryItem = ({date,weight, balance, delta}) => {
  return ( 
        <li className="history-item">
            <p className="history-date">{date}</p>
            <p className="history-weight">{weight}<span>kg</span></p>
            <p className={balance ? 'history-delta ididit':'history-delta iloser'}>
              {delta} 
            </p>  
        </li>   
  )
}

export default HistoryItem
