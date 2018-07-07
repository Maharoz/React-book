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
    
  }
 
  handleChange = (event) =>{

    this.setState({ input: event.target.value });

  }

  showContent = () =>{     
      let post = [...this.state.posts];
    
      post.push({
        id:'',
        content: this.state.input
      });
      this.setState({posts:post});
      this.refs.some.value='';
      this.setState({input:''})    
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
     <div class="center">
  <img src={logo} className="App-logo" alt="logo"/>
</div>
        <h1>Welcome to React book</h1>
        <input type="text" ref="some" className = "form BookMarginLeft-30 " onChange={this.handleChange}/>
        <button className = "btn btn-primary btnWidth" disabled={!this.state.input} onClick={this.showContent}>Post</button>
        {posts}
      </div>
    );
  }
}

export default App;
