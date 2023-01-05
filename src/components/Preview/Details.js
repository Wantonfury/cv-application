import React from "react";

const Details = props => {
    const { data } = props;
    
    return (
        <div id="preview-details">
            <div className="preview-card-title">
                <h2 className='preview-name preview-text'><span>{data['info-firstname']}</span> <span>{data['info-lastname']}</span></h2>
                <p className='preview-description preview-text'>{data['info-description']}</p>
            </div>
        </div>
    );
}

export default Details;