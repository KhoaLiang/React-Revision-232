import React, {useState} from 'react';
import data from './data';
//single selection accordian

//multi selection accordian

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [multiSelected, setMultiSelected] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1){
            cpyMultiple.push(getCurrentId);
        }
        else cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    console.log(selected, multiple);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return(
    <div className="wrapper">
        <button className='enableSelectMulti' onClick={() => setMultiSelected(!multiSelected)}>
            Enable Multi Select
        </button>
        <div className="accordian">
            Accordian Component
            {
                data && data.length > 0 ? 
                data.map(dataItem=> <div className='item'>
                    <div onClick={multiSelected 
                        ? () => handleMultiSelection(dataItem.id)
                        : () =>handleSingleSelection(dataItem.id)} className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        multiSelected 
                        ? (multiple.indexOf(dataItem.id) !== -1 && <div className='content'>{dataItem.answer}</div>) 
                        : (selected === dataItem.id && <div className='content'>{dataItem.answer}</div>)

                          // {
                    //     selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className='content'>
                    //         <p>{dataItem.answer}</p>
                    //     </div> : null
                    
                    // }
                    }
                </div>)
                : <div className="div">No data found!</div>
            }
        </div>
    </div>
    );
}


                  