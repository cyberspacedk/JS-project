import React from "react";
import './add-new-data.css';

const AddNewData = ({close, isShow, getNewData, wrightNewData, val}) => {
	const data = new Date(Date.now()); 
	const fullDate =`${data.getDate()} / ${data.getMonth()} / ${data.getFullYear()}`;
	console.log(fullDate);
	
  return (
    <div className={isShow ? 'add-new-wrap show' : 'add-new-wrap hide'}>
	 
      <h2 className="add-new-title">
        <span  className="return" data-name="close"  onClick={close}> &#8249; </span>
      	<span> Add new weight </span> 
      </h2>

		  
				<form className="add-new-input" onSubmit={wrightNewData}>

					<div className="add-new-input-controls">
						<span>New weight ( kg )</span> 
						<input type="number" name="weight" onChange={getNewData} value={val.weight}required/>
					</div>

					<div className="add-new-input-controls">
						<span>Date</span>  
						<input type="date" name="date" onChange={getNewData} value={val.date} min="2019-01-01" max="2019-12-31" required />
					</div>
 
					<div className="add-new-controls">
						<button className="save-data">Save new data</button>
						<button className="cancel-data" data-name="close"  onClick={close}>Cancel</button>
					</div>

				</form> 
		

		
		 
    </div>
  );
};

export default AddNewData;
