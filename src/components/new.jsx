import React from 'react';

const New = ({ nw }) => {

    const { urlToImage, url, title, description, source } = nw;

    return (
       <div className="col s12 m6 l4">
           <div className="card">
                <div className="card-image">
                    <img src={urlToImage} />
                </div>
                <div className="card-content">
                    <span className="card-title truncate">{title}</span>
                    <p>
                        {description}
                    </p>
                    <br />
                    Fuente: <a href={url}> {source.name} </a>
                </div>
                <div className="card-action">
                    <a href={url} className="waves-effect waves-light btn">Leer Más</a>
                </div>
            </div>
       </div>
    )
};


export default New;