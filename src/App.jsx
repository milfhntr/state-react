import Comment from './components/Comment'; 
import Counter from './components/Counter'
import Rick from './components/Rick'
import React, {useState} from 'react'

const App = () => {
    // const [state, setState] = useState(0)
    // const [comment, setComment] = useState([])
    // const [newComment, setNewComment] = useState('')
    // const [name, setName] = useState('')
    // const [user, setUser] = useState({
    //     name: null,
    //     desc: null
    // })
    // const[users.setUsers] = useState([])
    // const commentHandler = () =>{
    //     setUser({
    //         name: name,
    //         desc: newComment
    //     })
    //     setUsers([...users, user])
    // }
    // console.log(users);
       // const countHandler = () => {
    //     // let count = state;
    //     // count++;
    //     // setState(count)

    //     setState(state + 1)
    // }

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
  

//   function bigFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
  
//   const arr = [
//     {
//       id: 1,
//       name: 'John',
//       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque!'
//     },
//     {
//       id: 2,
//       name: 'anne',
//       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque!'
//     },
//     {
//       id: 3,
//       name: 'rain',
//       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque!'
//     },
//     {
//       id: 4,
//       name: 'Martin',
//       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque!'
//     },
//   ];
  

    const [users, setUsers] = useState([])
    const [user, setUser] = useState({
      name: '',
      desc: ''
    })

    const addFormhandler = () => {
      setUsers([...users, user])
      setUser({
        name: '',
        desc: ''
      })
      console.log(user);
      console.log(users);
    }
    const changeInput = (key, event) => {
      setUser({...user, [key]: event.target.value})
    }
    return (
        <>
          <div style={{width:300}}>
            <input type="text" value={user.name} onChange={(e) => changeInput('name', e)} />
            <textarea name="" id="" cols="30" rows="10" value={user.desx} onChange={(e) => changeInput('desc', e)}></textarea>
            <button onClick={addFormhandler}>crreate user</button>
          </div>
          <div>
            {
              users.map((item,index) => {
                <li key = {index}>{item.name}</li>
              })
            }
          </div>





          {/* <div>
            {arr.map((user) => (
              <div key={user.id}>
                <div>
                  <span style={{ backgroundColor: getRandomColor(), padding: '5px', borderRadius: '50%' }}>
                    {bigFirstLetter(user.name[0])}
                  </span>
                </div>
                <div>
                  <h3>{bigFirstLetter(user.name)}</h3>
                  <p>{user.desc}</p>
                </div>
                <hr />
              </div>
            ))}
          </div> */}
        </>
  )
}

export default App