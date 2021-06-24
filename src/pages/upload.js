import React, { Component } from "react";
import { storage } from "../firebase";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {

    constructor(props) {
        super(props);
        this.onChangeDisplayname = this.onChangeDisplayname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);


        this.state = {
            displayName: "",
            username: "",
            text: "",
            published: false,

            submitted: false,
            file: "",
            name: "",
            image: ""

        };

    }

    onChangeDisplayname(e) {
        this.setState({
            displayName: e.target.value,
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangeText(e) {
        this.setState({
            text: e.target.value,
        });
    }

    saveTutorial() {
        let data = {
            displayName: this.state.displayName,
            username: this.state.username,
            text: this.state.text,

            published: false,
            image: this.state.image
        };

        TutorialDataService.create(data)
            .then(() => {
                console.log("Se ha publicado correctamente");
                this.setState({
                    submitted: true,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    newTutorial() {
        this.setState({
            displayName: "",
            username: "",
            text: "",
            published: false,

            submitted: false,
        });
    }

    handleChange(e) {
        alert("e: " + e.target.files[0]);
        alert("e: " + e.target.files[0].name);

        this.setState({
            file: e.target.files[0],
            name: e.target.files[0].name
        });
    }

    handleUpload(e) {
        let myname = this.state.name;
        alert("Subiendo..." + myname);
        e.preventDefault();
        const uploadTask = storage.ref(`/images/${this.state.name}`).put(this.state.file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
                .ref("Imagenes")
                .child(this.state.name)
                .getDownloadURL()
                .then((url) => {
                    //this.setFile(null);
                    this.setState({image: url });
                });
        });
    }

    render() {

        return (

            <div className="submit-form text-light">
                {this.state.submitted ? (
                    <div>
                        <h4>Ha sido publicado correctamente.</h4>
                        <button className="text-light btn" class-="btn-success btn-lg btn-block" onClick={this.newTutorial}>
                            Agregar
                        </button>
                        <br></br>
                    </div>
                ) : (
                        <div>
                            <h4>Tweet</h4>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="displayName">Nombre del Perfil</label>
                                <input
                                    type="displayName"
                                    className="form-control"
                                    id="displayName"
                                    required
                                    value={this.state.displayName}
                                    onChange={this.onChangeDisplayname}
                                    name="displayName"
                                />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="username">Usuario</label>
                                <input
                                    type="username"
                                    className="form-control"
                                    id="username"
                                    required
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    name="username"
                                />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="text">Descripcion</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="text"
                                    required
                                    value={this.state.text}
                                    onChange={this.onChangeText}
                                    name="text"
                                />
                            </div>
                            <br></br>
                            <button onClick={this.saveTutorial} className="btn btn-info btn-lg btn-block">
                                Publicar
                            </button>
                            <br></br>
                            <br></br>
                        </div>
                    )}

                <div className="App">
                    <form onSubmit={this.handleUpload}>
                        <input type="file" onChange={this.handleChange} />
                        <button className="btn btn-success btn-lg btn-block">Cargar</button>
                    </form>
                    {this.state.image}
                    <img src={this.state.image} alt="" />
                </div>

            </div>
        );
    }

}