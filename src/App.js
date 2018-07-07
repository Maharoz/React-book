import React, { Component } from 'react';
import logo from './logo.svg';
import Post from './Post/Post';
import './App.css';

class App extends Component {
  
  state={
    posts : [
      {id:'1',content:'This is test post number one' },
      {id:'2',content:'This test post number two'}
    ],
    showPosts:true,
    
  }
 
  handleChange = (event) =>{

    this.setState({ input: event.target.value });

  }

  showContent = () =>{     
      let post = [...this.state.posts];
    
      post.unshift({
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



<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p>
                    Developed with love by <a target="_blank" href="https://sites.google.com/view/porfoliomaharoz/home">Maharoz Alam</a> (<a target="_blank" href="https://sites.google.com/view/porfoliomaharoz/home">Mugdho)</a>
                </p>
            </div>
            <div class="col-md-6 text-right">
                <p>
                    <a target="_blank" href="https://github.com/Maharoz/React-book">Get Source Code</a>
                </p>
            </div>
        </div>
    </div>
</div>
      </div>



    );
  }
}

export default App;
