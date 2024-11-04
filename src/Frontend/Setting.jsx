import React from 'react';
import './Setting.css'; // สไตล์ของป๊อปอัพ


const SettingsPopup = ({ onClose }) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className="popup-content">
                <h2>การตั้งค่า</h2>
                <p>นี่คือเนื้อหาของการตั้งค่า</p>
                <button onClick={onClose}>ปิด</button>
            </div>
        </div>
    );
};
export default SettingsPopup;
