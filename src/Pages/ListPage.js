import React from 'react';

function ListPage(props) {
    const tasks = props.tasks.filter((task) => task.list == props.list.id);
    //TODO: Bellow the ListPage title h3 , we add the following lines:

    return(
        <div>
            <h1>{props.list.title}</h1>
        </div>
    )
}

export default ListPage;