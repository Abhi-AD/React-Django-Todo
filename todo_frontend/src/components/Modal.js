import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class CustomModal extends Component {
     constructor(props) {
          super(props);
          this.state = {
               activeItem: {
                    title: '',
                    description: '',
                    completed: false
               }
          };
     }

     componentDidMount() {
          if (this.props.activeItem) {
               this.setState({ activeItem: this.props.activeItem });
          }
     }

     handleChange = (e) => {
          const { name, value, type, checked } = e.target;
          const newValue = type === 'checkbox' ? checked : value;

          this.setState({
               activeItem: {
                    ...this.state.activeItem,
                    [name]: newValue
               }
          });
     };

     render() {
          const { toggle, onSave } = this.props;
          const { activeItem } = this.state;

          return (
               <Modal isOpen={true} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
                    <ModalBody>
                         <Form>
                              <FormGroup>
                                   <Label for="todo-title">Title</Label>
                                   <Input
                                        type="text"
                                        id="todo-title"
                                        name="title"
                                        value={activeItem.title}
                                        onChange={this.handleChange}
                                        placeholder="Enter Todo Title"
                                   />
                              </FormGroup>
                              <FormGroup>
                                   <Label for="todo-description">Description</Label>
                                   <Input
                                        type="text"
                                        id="todo-description"
                                        name="description"
                                        value={activeItem.description}
                                        onChange={this.handleChange}
                                        placeholder="Enter Todo Description"
                                   />
                              </FormGroup>
                              <FormGroup check>
                                   <Label check>
                                        <Input
                                             type="checkbox"
                                             name="completed"
                                             checked={activeItem.completed}
                                             onChange={this.handleChange}
                                        />
                                        Completed
                                   </Label>
                              </FormGroup>
                         </Form>
                    </ModalBody>
                    <ModalFooter>
                         <Button
                              color="success"
                              onClick={() => onSave(activeItem)}
                         >
                              Save
                         </Button>
                    </ModalFooter>
               </Modal>
          );
     }
}

export default CustomModal;
