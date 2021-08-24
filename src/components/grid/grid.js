import React from 'react';
import GridListItem from '../grid-list-item';
import './grid.css';

const Grid = ({ gridData, onMoveTo, ...props }) => {
  const { pageName } = props
  let classNames = ''
  let position = null


  if(props.isInfo)
    classNames += ' short'

  if(props.isMiddle){
    position = "middle"
  }  
  if(props.isLeft){
    classNames += ' left-grid'
    position = "left"
  }

  if(props.isRight){
    classNames += ' right-grid'
    position = "right"
  }

  const elements = gridData.map(( item ) => {
    const { ...itemProps } = item;      
    return (
      <li key={itemProps.id} className="list-group-item">
        <GridListItem  position={ position }
        {...itemProps }  
        onMoveTo ={ onMoveTo } 
        />
      </li>
    );
  });

  return (
          <div className={ classNames }>
            <p className="page-name">{ pageName }</p>
              <ul className='list-group todo-list' >
                { elements }
              </ul>
          </div>
    
  );
};

export default Grid;
//onMoveTo = {()=> onMoveTo(id, position)}
//



