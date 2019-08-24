import React from 'react';  
import New from './new';

const ListNews = ({news}) => (
    <div className="row">
        {news.map((nw, key) => (
           <New nw={nw} key={key} />  
        ))}
    </div>
);
export default ListNews;