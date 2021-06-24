import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import Tutorial from "./tutorial.component";

export default class TutorialsList extends Component {

    constructor(props) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.onDataChange = this.onDataChange.bind(this);

        this.state = {
            posts: [],
            currentTutorial: null,
            currentIndex: -1,
        };

        this.unsubscribe = undefined;

    }

    componentDidMount() {
        this.unsubscribe = TutorialDataService.getAll().orderBy("username", "asc").onSnapshot(this.onDataChange);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onDataChange(items) {
        let posts = [];

        items.forEach((item) => {
            let id = item.id;
            let data = item.data();
            posts.push({
                id: id,
                displayName: data.displayName,
                username: data.username,
                text: data.text,
                published: data.published,
                image: data.image
            });
        });

        this.setState({
            posts: posts,
        });
    }

    refreshList() {
        this.setState({
            currentTutorial: null,
            currentIndex: -1,
        });
    }

    setActiveTutorial(tutorial, index) {
        this.setState({
            currentTutorial: tutorial,
            currentIndex: index,
        });
    }

    render() {
        const { posts, currentTutorial, currentIndex } = this.state;
    
        return (
          <div className="list row">
            <div className="col-md-4 text-light">
              <h4>Posts List</h4>
    
              <ul className="list-group text-dark">
                {posts &&
                  posts.map((tutorial, index) => (
                    <li
                      className={
                        "list-group-item " +
                        (index === currentIndex ? "active" : "")
                      }
                      onClick={() => this.setActiveTutorial(tutorial, index)}
                      key={index}
                    >
                      {tutorial.username}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-md-8 text-light">
              {currentTutorial ? (
                <Tutorial
                  tutorial={currentTutorial}
                  refreshList={this.refreshList}
                />
              ) : (
                <div>
                  <br />
                  <p>Por favor seleccione un post</p>
                </div>
              )}
            </div>
          </div>
        );
      }

}