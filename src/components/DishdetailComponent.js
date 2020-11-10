import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

  function RenderDish({dish}){
    if(dish != null){
      return(
        <Card>
          <CardImg width = "100%" src = {dish.image} alt = {dish.name} />
          <CardBody>
            <CardTitle><b>{dish.name}</b></CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    else{
       return(
         <div></div>
       );
    }
  }

  function RenderComments({comments}){
    if(comments != null){
      const commentList = comments.map((comment) => {
        return(
          <li key = {comment.id}>
            <p>{comment.comment}</p>
            <p> -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
          </li>
        );
      });

      return(
        <div>
          <h3><b>Comments</b></h3>
          <ul className = "list-unstyled">
            {commentList}
          </ul>
        </div>
      );
    }
    else{
       return(
         <div></div>
       );
    }
  }

  const DishDetail = (props) =>{
    if(props.selectedDish != null){
      return(
        <div className = "container">
          <div className = "row">
              <div className = "col-12 col-md-5 m-1">
                <RenderDish dish = {props.selectedDish}/>
              </div>

              <div className = "col-12 col-md-5 m-1">
                <RenderComments comments = {props.selectedDish.comments}/>
              </div>
            </div>
        </div>
      );
    }
    else{
       return(
         <div></div>
       );
    }
  }

export default DishDetail;
