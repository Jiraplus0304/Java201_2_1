//your student id, firstname, and lastname here
//65130500011 , Jiraplus Chanpong

class Movies {
  //your code here...

  constructor(){
    this.movies1 = []
  }

  getAllMovies(){
    return movies1
  }

  addMovie(title,director,year,genre){
    if(title == null && director == null && year == null && genre == null) 
    return undefined
    if(title == director){
    return undefined
    }else{
      return movies1.push(title,director,year,genre).map((element) => 
      {"title :" + element.title.join(' ') , "director:" + element.director.join(' ') , "year: " + element.year.join(' ') , "genre: " + element.genre.join(' ')})
    }
    
  }

  updateMovie(title, updateDetails){
    if(movies1.filter((name) => title.name == name ))
    replace(updateDetails)
    else return undefined
  }

  deletedMovieByTitle(title){
    movies1.filter((name) => title.name == name).splice(0,movies1.length) 
  }
}

module.exports = Movies



