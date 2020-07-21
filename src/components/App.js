import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies,setShowFavourite } from '../actions';
// import { render } from 'react-dom';




class  App extends React.Component {


  componentDidMount() {

    const { store } = this.props;
    store.subscribe(()=>{
      console.log("subscribe");
      console.log(store.getState())
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
    
    console.log("state",this.props.store.getState())
    


    
    

  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if( index!==-1) {
      return true;
    }
    return false;
  }
  handleChangeTab = (val) =>{
    this.props.store.dispatch(setShowFavourite(val));
  }
  render() {
      const { movies } = this.props.store.getState();
      const { list,favourites,showFavourites }  = movies;
      const showMovies = showFavourites ? favourites : list;
      return (
        <div className="App">
          <Navbar />
          <div className="main">
            <div className="tabs">
              <div className={` tab ${showFavourites? "" : "active-tabs"}`} onClick={()=>this.handleChangeTab(false)}>Movies</div>
              <div className={`tab ${showFavourites ? "active-tabs" : ""}`} onClick={()=>this.handleChangeTab(true)}>Favourites</div>
    
            </div>
            <div className="list">
              { showMovies.map((movie,index)=>(
                <MovieCard 
                movie={movie} 
                key={index} 
                dispatch={this.props.store.dispatch} 
                isFavourite={this.isMovieFavourite}
                />
              )
              )
              }
    
            </div>
            {
               showMovies.length === 0 ? <h1>No movies to display</h1> : null
            }
    
          </div>

    

            
            
            
        
        </div>
      );

  }
  
}

export default App;
