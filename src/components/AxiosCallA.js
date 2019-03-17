import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import axios from 'axios';
import axios from 'axios';

class AxiosCallA extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Axios Call',
            posts:[]
        }       
    } 

    componentDidMount() {
        axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
          .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({ posts });
          });
      }     
    
    render(){

        const { users, todos } = this.state;
        //const { users } = this.state;
       
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>{`/r/${this.props.subreddit}`}</h2>
                        <ul>
                          {this.state.posts.map(post =>
                            <li key={post.id}>{post.title}</li>
                          )}
                        </ul> 
                    </div>                                                                                                  
                </div>
            </div>            
        );
    }
}

export default AxiosCallA;