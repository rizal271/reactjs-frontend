import React, { Component } from 'react';
import Data from '../data'
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function text(text) {
    if(text.length > 25){
        let textSplit = text.substr(0, 25)
        return `${textSplit} ...`    
    }else{
        let textSplit = text
        return `${textSplit}`
    }    
}
class Body extends React.Component{

    

    constructor(props) {
        super(props);
        
        this.state = {
        modal: false
        };
        this.st = Data;

         this.delete = this.handledelete;
        

        this.toggle = this.toggle.bind(this);
    }
    

    handledelete(bookid) {
        // console.log(bookid)
        this.delete(bookid).then((res)=>{
            console.log(res)
        })
    }

    toggle() {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
    }
    render(){
        return(
            <Container>
                <div className="row justify-content-md-center">                 <div className= "coListbook from '../Component/Listbook'l-sm-7">
                        <input type="text" placeholder="Search Book..." className="form-control form-control-lg rounded-pill search shadow-sm p-3 mb-5 bg-white" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 offset-md-8 mt-3">
                        
                        <input type="Button" onClick={this.toggle} className="btn btn-warning" value="ADD"/>
                    </div>
                </div>
                <div className="row mt-5">
                {this.st.map((item) => {
                    
                    return (  
                                     
                    // <a href="">
                        <div className="col-md-3 ">                     
                            <div className="card" style={{width: '15rem'}}>                
                                <img src="https://placeimg.com/640/480/tech" className="card-img-top" alt="..." />                                
                                <div className="card-body">
                                    <p className="card-text"><b>{item.title}</b></p>
                                    <p>{text(item.desc)}</p>
                                    <button onClick={()=> this.delete(item.bookid)}>coba delete</button>
                                </div>
                            </div>                                              
                        </div>
                    
                    );
                    
                       })
                    }
                </div> 
                <div> 
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add Book</ModalHeader>
                <ModalBody>
                    <form >
                        <div className="form-group">
                            <label className="control-label" for="imageUrl">URL Image</label>
                            <input type="text" name="imageUrl" className="form-control" id="imageUrl" required />
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="title">Title</label>
                            <input type="text" name="title" className="form-control" id="title" required />
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="desc">Description</label>
                            <textarea name="desc" className="form-control" id="desc" required ></textarea>
                        </div>
                    </form>	
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-warning" onClick={this.toggle}>Save</Button>
                </ModalFooter>
                </Modal>
                </div> 
            </Container>


        )
    }
}
export default Body