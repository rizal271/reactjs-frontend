import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Detailbook extends React.Component{
    render(){
        return(
            <Container>
                <div className="jumbotron">
                <div className="row">
                    {/* <Button/> */}
                </div>
                <div className="card cardBook" style={{maxWidth: '15rem'}}>
                    <img src="https://placeimg.com/400/500/people/sepia" className="card-img-top" alt="..." />
                </div>                  
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloribus consequatur neque accusamus voluptate nostrum accusantium molestiae dicta! Eligendi quisquam dignissimos et nulla reprehenderit cumque consequatur voluptatem autem voluptates asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut maiores quis architecto sequi eveniet ipsum, autem aspernatur porro magnam, maxime iure quasi labore. Excepturi magnam quos earum soluta minima. Magni.</p>
                </div>  
            </div>
            </Container>
        )
    }
}

export default Detailbook