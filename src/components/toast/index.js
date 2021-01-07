import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './Toast.scss';

const Toast = ({ toastList, autoDelete, autoDeleteTime }) => {
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList([...toastList]);
    }, [toastList]);

    useEffect(() => {
        const interval = setTimeout(() => {
            if (toastList.length && list.length) {
                const id = toastList[0].id;
                const listItemIndex = list.findIndex(e => e.id === id);
                const toastListItem = toastList.findIndex(e => e.id === id);
                list.splice(listItemIndex, 1);
                toastList.splice(toastListItem, 1);
                setList([...list]);
            }
        }, autoDeleteTime);
        
        return () => {
            clearInterval(interval);
        }
    }, [toastList, autoDelete, autoDeleteTime, list]);

    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }


  return (
    <>
            <div className={`notification-container top-right`}>
                {
                    list.map((toast, i) =>     
                        <div 
                            key={i}
                            className={`notification toast top-right`}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <button onClick={() => deleteToast(toast.id)}>
                                X
                            </button>
                            {/* <div className="notification-image">
                                <img src={toast.icon} alt="" />
                            </div> */}
                            <div>
                                {/* <p className="notification-title">{toast.title}</p> */}
                                <p className="notification-message">
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
  );
};

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    autoDelete: PropTypes.bool,
    autoDeleteTime: PropTypes.number
}

export default Toast;
