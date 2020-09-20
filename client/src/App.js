import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Template from './components/Template';
import TodoList from './components/TodoList';


const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: true
    },
    {
      id: 2,
      text: '할일 2',
      checked: false
    },
    {
      id: 3,
      text: '할일 3',
      checked: true
    }
  ]);
  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
    </Template>
  );
};
export default App;


// function App() {

//   const [movieName, setMovieName] = useState('')
//   const [review, setReview] = useState('')
//   const [movieReviewList, setMovieList] = useState([])
//   const [newReview, setNewReview] = useState('')

//   useEffect(() => {
//     axios.get('http://localhost:3001/api/get').then((response) => { 
//       setMovieList(response.data)
//       console.log('[]')
//     });
//   }, []);


//   const submitReview = () => {
//     axios.post('http://localhost:3001/api/insert', {
//       movieName: movieName, 
//       movieReview: review
//     });  
//     setMovieList([
//       ...movieReviewList, 
//       {movieName: movieName, movieReview: review}
//     ]);
//   };

//   const deleteReview = (movie) => {
//     axios.delete(`http://localhost:3001/api/delete/${movie}`)
//       .then(response => {
//        console.log(response)
//        const newmovielist = movieReviewList.filter(item => {
//          return item.movie !== movie
//        })
//        console.log(newmovielist)
//        setMovieList(newmovielist)
//       });
//   }

//   const updateReview = (movie) => {
//     axios.put("http://localhost:3001/api/update", {
//       movieName: movie, 
//       movieReview: newReview
//     });  
//     setNewReview("")
//   }

//   return (
//     <div className="App">
//       <h1>CRUD</h1>
//       <div className="form">
//         <label>Movie Name</label>
//         <input type="text" name="movieName" onChange={(e) => {
//           setMovieName(e.target.value);
//         }}/>
//         <label>Review</label>
//         <input type="text" name="review" onChange={(e) => {
//           setReview(e.target.value);
//         }}/>
//         <button onClick={submitReview}>Submit</button>
//         {movieReviewList.map((val) => {
//           return (
//             <div className="card">
//               <h1>{val.movieName}</h1>
//               <p>{val.movieReview}</p>

//               <button onClick={() => {deleteReview(val.movieName)}}>Delete</button>
//               <input type="text" id="updateInput" onChange={(e) => {
//                   setNewReview(e.target.value);
//                 }
//               }/>
//               <button onClick={() => {updateReview(val.movieName)}}>Update</button>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;
