import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class Tutorial extends Component {

    constructor(props) {
        super(props);
        this.onChangeDisplayname = this.onChangeDisplayname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateTutorial = this.updateTutorial.bind(this);
        this.deleteTutorial = this.deleteTutorial.bind(this);

        this.state = {
            currentTutorial: {
                id: null,
                displayName: "",
                username: "",
                text: "",
                published: false,
                image: ""
            },
            message: "",
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { tutorial } = nextProps;
        if (prevState.currentTutorial.id !== tutorial.id) {
            return {
                currentTutorial: tutorial,
                message: ""
            };
        }

        return prevState.currentTutorial;
    }

    componentDidMount() {
        this.setState({
            currentTutorial: this.props.tutorial,
        });
    }

    onChangeDisplayname(e) {
        const displayName = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTutorial: {
                    ...prevState.currentTutorial,
                    displayName: displayName,
                },
            };
        });
    }

    onChangeUsername(e) {
        const username = e.target.value;

        this.setState((prevState) => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                username: username,
            },
        }));
    }

    onChangeText(e) {
        const text = e.target.value;

        this.setState((prevState) => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                text: text,
            },
        }));
    }

    updatePublished(status) {
        TutorialDataService.update(this.state.currentTutorial.id, {
            published: status,
        })
            .then(() => {
                this.setState((prevState) => ({
                    currentTutorial: {
                        ...prevState.currentTutorial,
                        published: status,
                    },
                    message: "El estado fue actualizado exitosamente!!",
                }));
            })
            .catch((e) => {
                console.log(e);
            });
    }

    updateTutorial() {
        const data = {
            displayName: this.state.currentTutorial.displayName,
            username: this.state.currentTutorial.username,
            text: this.state.currentTutorial.text,
        };

        TutorialDataService.update(this.state.currentTutorial.id, data)
            .then(() => {
                this.setState({
                    message: "El tutorial fue actualizado exitosamente!!",
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    deleteTutorial() {
        TutorialDataService.delete(this.state.currentTutorial.id)
            .then(() => {
                this.props.refreshList();
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        const { currentTutorial } = this.state;
    
        return (
          <div>
            <h4>Post</h4>
            {currentTutorial ? (
              <div className="edit-form text-light">
                <form>
                  <div className="form-group text-light">
                    <label htmlFor="displayName">Nombre del Perfil</label>
                    <input
                      type="text"
                      className="form-control"
                      id="displayName"
                      value={currentTutorial.displayName}
                      onChange={this.onChangeDisplayname}
                    />
                  </div>
                  <div className="form-group text-light">
                    <label htmlFor="username">Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={currentTutorial.username}
                      onChange={this.onChangeUsername}
                    />
                  </div>
                  <div className="form-group text-light">
                    <label htmlFor="text">Descripcion</label>
                    <input
                      type="text"
                      className="form-control"
                      id="text"
                      value={currentTutorial.text}
                      onChange={this.onChangeText}
                    />
                  </div>
                  <div className="form-group text-light">
                    <label>Imagen:</label>
                    {currentTutorial.fileurl}
                    <img src={currentTutorial.image} alt="" />
                  </div>
                  <div className="form-group">
                    <label>
                      <strong>Estado:</strong>
                    </label>
                    {currentTutorial.published ? "Published" : "Pending"}
                  </div>
                </form>
    
                {currentTutorial.published ? (
                  <button
                    className="badge badge-primary mr-2 text-light"
                    onClick={() => this.updatePublished(false)}
                  >
                    Anular Publicacion
                  </button>
                ) : (
                  <button
                    className="badge badge-primary mr-2 text-light"
                    onClick={() => this.updatePublished(true)}
                  >
                    Publicar
                  </button>
                )}
    
                <button
                  className="badge badge-danger mr-2 text-light"
                  onClick={this.deleteTutorial}
                >
                  Eliminar
                </button>
    
                <button
                  type="submit"
                  className="badge badge-success text-light"
                  onClick={this.updateTutorial}
                >
                  Actualizar
                </button>
                <p>{this.state.message}</p>
              </div>
            ) : (
              <div>
                <br />
                <p>Favor de seleccionar un post</p>
              </div>
            )}
          </div>
        );
      }


}