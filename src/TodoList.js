import React, { useState } from 'react'

function TodoList() {
    const [activity,setActivity]=useState("");
    const [listData,setlistData]=useState([]);
    const addActivity =(e)=>{
        // setlistData([...listData,activity])
        // console.log("activity",activity);
        // console.log(listData);
        setlistData((listData)=>{
            const updatedList = [...listData,activity];
            console.log('upatatedList',updatedList);
            setActivity('');
            return updatedList;
        })
    }
    const removeActivity = (i)=>{
        const upatatedListData = listData.filter((elem,id)=>{
            return i!=id;
        });
        setlistData(upatatedListData);
    }

    const removeAll = (e)=>{
        setlistData([]);
    }
  return (
    <div>
     
      <div className='container1'>
        <div className='header'>TODO LIST</div>
            <input type='text' placeholder='Add Activity' name='activity'
            value={activity} onChange={(e)=>setActivity(e.target.value)}/>
            <button onClick={addActivity}>Add</button>
            <p className='List-heading'>Here is yuour list: {")"}</p>
            {
                listData!=[] && listData.map((data,i)=>{
                    return(
                        <p key={i}>
                            <div className='listData'>{data}</div>
                            <div className='btn-position'>
                                <button onClick={()=>removeActivity(i)}>Remove(-)</button>
                                </div>
                            
                        </p>
                    )
                })
            }
            {
                listData.length>=1 && 
            
            <button onClick={removeAll}>Remove All</button>}
      </div>
    </div>
  )
}

export default TodoList
