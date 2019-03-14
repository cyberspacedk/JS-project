import React from 'react';
import HistoryItem from '../HistoryItem/HistoryItem'
import './history.css';

const History = ({history, startWeight}) => {
 
  return (
    <ul className='history-list'> 
		 
     {history &&  history.map(elem => ( 
        <HistoryItem  key={elem.id}
                      date={elem.date} 
                      weight={elem.weight}
                      balance={startWeight<elem.weight}
                      delta={(elem.weight - startWeight).toFixed(1)}
                      />
        ))}

    </ul>
  )
}

export default History;
