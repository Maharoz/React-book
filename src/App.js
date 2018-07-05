import React, { Component } from 'react';
import logo from './logo.svg';
import Post from './Post/Post';
import './App.css';

class App extends Component {
  
  state={
    posts : [
      {id:'1',content:'test post' },
      {id:'2',content:'hello test'}
    ],
    showPosts:true,
    test : ''
  }
 
  handleChange = (event) =>{

    this.setState({ input: event.target.value });
    //let i = this.state.posts.length;

    //console.log(i);
    
  }

  showContent = () =>{
    //console.log(this.state.input);
    let post = [...this.state.posts];
    post.push({
      id:'',
      content: this.state.input
    });
    this.setState({posts:post});
    console.log(post);
  }


  render() {
    let posts = null;
    if(this.state.showPosts){

     posts =(
      <div>
        {this.state.posts.map((posts,index) => {
        return <Post
        content={posts.content}
      />
     })}  
      </div>
     );
    
    }

    return (
      <div className="App">
        <h1>Welcome to React book</h1>
        <input type="text" onChange={this.handleChange}/>
        <button  onClick={this.showContent}>Post</button>
        {posts}
      </div>
    );
  }
}

export default App;
