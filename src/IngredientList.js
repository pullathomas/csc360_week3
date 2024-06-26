import './IngredientList.css'
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function IngredientList(props) {

    if(props.ingredients !== null)
    {
        // Create the list items using map
        const ingredientListItems = props.ingredients.map((ingredient, index) => {
            return (  
                
                <ListGroup.Item as="li" key={index} className={ ingredient.prepared ? 'prepared' : '' }  onClick={ () => props.onClick(props.title,index) }>
                    {ingredient.name}
                </ListGroup.Item>   
            );
        });
        // return the HTML for the component
        // ingredientListItems will be rendered as li elements
        return (
            <ListGroup as="ul">
                { ingredientListItems }
            </ListGroup>
        );
    }
}
export default IngredientList;
