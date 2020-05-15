import React from 'react';
import './App.css';
import Joke from './Joke'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: {
        message: null,
      },
      isLoaded: false,
      categories: [],
      mode: 'random',
      fromCategory: null,
      query: null,
      jokes: [],
    }
    this.onModeChange = this.onModeChange.bind(this);
    this.onCategorySelect = this.onCategorySelect.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.getJoke = this.getJoke.bind(this);
  }

  componentDidMount(){
    fetch("https://api.chucknorris.io/jokes/categories")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            categories: result,
            fromCategory: result[0],
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
     
  }

  componentDidUpdate(){
    if(this.state.error.message){
      console.log(this.state.error.message)
      document.getElementById('errorMessage').classList.add('show');
      setTimeout(()=>{
        document.getElementById('errorMessage').classList.remove('show');
        setTimeout(()=>(this.setState({error: {message: null}})),100);
      }, 3000);
      
    }
  }
  onModeChange(event){
    this.setState({mode: event.target.value})
  }

  onCategorySelect(event){
    this.setState({fromCategory: event.target.value})
  }

  onSearchChange(event){
    this.setState({query: event.target.value})
  }


  getJoke(){
    console.log(this.state.mode)
    if(this.state.mode === 'random'){
      this.setState({isLoaded: false});
      fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(
        (result) => {
          let jokes = this.state.jokes;
          jokes.unshift(result);
          this.setState({
            isLoaded: true,
            jokes
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    if(this.state.mode === 'categories' && this.state.fromCategory){
      console.log('get  joke from category:' + this.state.fromCategory);
      this.setState({isLoaded: false});
      const category = this.state.fromCategory;
      fetch("https://api.chucknorris.io/jokes/random?category="+encodeURI(category))
      .then(res => res.json())
      .then(
        (result) => {
          let jokes = this.state.jokes;
          jokes.unshift(result);
          this.setState({
            isLoaded: true,
            jokes
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    if(this.state.mode === 'search' && this.state.query ){
      if(this.state.query.length < 3 || this.state.query.length > 120){
        this.setState({
          error : {message: "Query must be from 3 to 120 characters"}
        });
        return
      }
      console.log('get query joke: ' + this.state.query)
      this.setState({isLoaded: false});
      const query = this.state.query;
      fetch("https://api.chucknorris.io/jokes/search?query="+encodeURI(query))
      .then(res => res.json())
      .then(
        (result, error) => {
          if(result.total === 0){
            this.setState({
              error : {message: "There is no jokes about "+ query}
            });
            
          }else{
            
               let jokes = this.state.jokes;
                jokes = result.result.concat(jokes);
                this.setState({
                  isLoaded: true,
                  jokes
                });
            
           
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  }

  render(){
    return (
      <div className="App">
         <div className="wrap">
      <header>
        <h1>MSI 2020</h1>
      </header>
      <input className="menu" type="checkbox" id="menu" />
      <div className="menu">
        <div>
          <span></span>
          <span></span>
        </div>
        <h2>Favourite</h2>
      </div>
  
      <main>
        <h2>Hey!</h2>
        <form>
          <fieldset name="selectMode">
            <legend>Let’s try to find a joke for you:</legend>
            <label htmlFor="random">
              <input type="radio" id="random" name="mode" value="random" onChange={this.onModeChange} defaultChecked></input>
              <span className="radio">Random</span>
            </label>
            <fieldset name="fromCategories" className="categories">
              <legend>
                <label htmlFor="categories">
                  <input type="radio" id="categories" name="mode" onChange={this.onModeChange} value="categories"></input>
                  <span className="radio">From categories</span>
                </label>
              </legend>

              <div className={this.state.mode === 'categories' ? 'categories show' : 'categories hide'}> 
                {this.state.categories.map((cat) =>{
                  const checkStatus = this.state.fromCategory === cat;
                  return (
                    <label htmlFor={cat} key={cat}>
                    <input type="radio" id={cat} name="category" value={cat} checked={checkStatus} onChange={this.onCategorySelect}></input>
                    <span className="radio">{cat}</span>
                  </label>
                  )
                })}
              </div>
              
  
            </fieldset>
            <label htmlFor="search">
              <input type="radio" id="search" name="mode" onChange={this.onModeChange} value="search"></input>
              <span className="radio">Search</span>
            </label>
            <input className={this.state.mode === 'search' ? 'search show' : 'search hide'} 
                   type="search" placeholder="Free text search..." 
                   id="search-field" 
                   name="mode"
                   onChange={this.onSearchChange}
                   ></input>
            <button type="button" className="getJoke" onClick={this.getJoke}>Get a joke</button>
            <p id="errorMessage">{this.state.error.message}</p>
          </fieldset>
        </form>
        <section>
          {this.state.jokes.map((joke)=>(
            <Joke key={joke.id} {...joke}></Joke>
          ))}
         
        </section>
      </main>
    </div>
  
        <aside className="hide">
  
          <h2>Favourite</h2>
  
          <section>
            <article>
              <span className="message">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.2504 0H2.74963C1.23352 0 0 1.23328 0 2.74963V11.6238C0 13.1367 1.22815 14.368 2.73987 14.3734V18.4004L8.5271 14.3734H17.2504C18.7665 14.3734 20 13.1399 20 11.6238V2.74963C20 1.23328 18.7665 0 17.2504 0ZM18.8281 11.6238C18.8281 12.4937 18.1204 13.2015 17.2504 13.2015H8.15942L3.91174 16.1573V13.2015H2.74963C1.87964 13.2015 1.17188 12.4937 1.17188 11.6238V2.74963C1.17188 1.87952 1.87964 1.17188 2.74963 1.17188H17.2504C18.1204 1.17188 18.8281 1.87952 18.8281 2.74963V11.6238Z"
                    fill="#ABABAB" />
                  <path d="M5.35291 4.14075H14.6471V5.31262H5.35291V4.14075Z" fill="#ABABAB" />
                  <path d="M5.35291 6.64075H14.6471V7.81262H5.35291V6.64075Z" fill="#ABABAB" />
                  <path d="M5.35291 9.14075H14.6471V10.3126H5.35291V9.14075Z" fill="#ABABAB" />
                </svg>
              </span>
              <button type="button" className="like">
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.4134 1.66367C17.3781 0.590857 15.9575 0 14.413 0C13.2585 0 12.2012 0.348712 11.2704 1.03637C10.8008 1.38348 10.3752 1.80814 10 2.3038C9.62494 1.80829 9.19922 1.38348 8.7294 1.03637C7.79877 0.348712 6.74149 0 5.58701 0C4.04251 0 2.62177 0.590857 1.58646 1.66367C0.563507 2.72395 0 4.17244 0 5.74252C0 7.35852 0.630341 8.83778 1.98364 10.3979C3.19427 11.7935 4.93423 13.2102 6.94916 14.8507C7.63718 15.411 8.41705 16.046 9.22684 16.7224C9.44077 16.9015 9.71527 17 10 17C10.2846 17 10.5592 16.9015 10.7729 16.7227C11.5826 16.0461 12.363 15.4108 13.0513 14.8503C15.0659 13.2101 16.8059 11.7935 18.0165 10.3978C19.3698 8.83778 20 7.35852 20 5.74238C20 4.17244 19.4365 2.72395 18.4134 1.66367Z"
                    fill="#FF6767" />
                </svg>
  
              </button>
              <address>
                ID:
                <a href="#id">
                  <span>XNaAxUduSw6zANDaIEab7A</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.54539 0H5.90903C5.65799 0 5.45448 0.203515 5.45448 0.45455C5.45448 0.705585 5.65799 0.9091 5.90903 0.9091H8.44803L3.76946 5.58768C3.59198 5.76516 3.59198 6.05298 3.76946 6.2305C3.85819 6.31923 3.97452 6.36362 4.09085 6.36362C4.20718 6.36362 4.32352 6.31923 4.41223 6.23048L9.09086 1.55191V4.09091C9.09086 4.34194 9.29437 4.54546 9.54541 4.54546C9.79644 4.54546 9.99996 4.34194 9.99996 4.09091V0.45455C9.99994 0.203515 9.79642 0 9.54539 0Z"
                      fill="#8EA7FF" />
                    <path
                      d="M7.72725 4.54543C7.47622 4.54543 7.2727 4.74894 7.2727 4.99998V9.09089H0.90908V2.72725H4.99999C5.25103 2.72725 5.45454 2.52373 5.45454 2.2727C5.45454 2.02166 5.25103 1.81817 4.99999 1.81817H0.45455C0.203515 1.81817 0 2.02168 0 2.27272V9.54544C0 9.79645 0.203515 9.99997 0.45455 9.99997H7.72727C7.97831 9.99997 8.18182 9.79645 8.18182 9.54542V4.99998C8.1818 4.74894 7.97829 4.54543 7.72725 4.54543Z"
                      fill="#8EA7FF" />
                  </svg>
                </a>
              </address>
              <h2>No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this. He
                must've conceived himself.</h2>
  
              <p>Last update: <time dateTime="">1923 hours ago</time></p>
  
              <mark>celebrity</mark>
            </article>
        
          </section>
      </aside>
    </div>
    );
  }
}

export default App;
