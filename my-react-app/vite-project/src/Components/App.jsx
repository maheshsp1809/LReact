import Greeting from './Greeting.jsx'
import List from './List.jsx';
import UserGreeting from './UserGreeting.jsx';
import { getImageUrl } from './Utils.jsx';
import BookList from './Que.jsx';
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';
import Input from './Input.jsx';
import ColorPicker from './ColorPicker.jsx';
import TodoList from './ToDoList.jsx';
import CustomNavbar from './CustomNavBar.jsx';
import Product from './Product.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import Todos from './ToDos.jsx';
import LoginPage from './LoginPage.jsx';


function Profile(props) {
  const { name, imageId, profession, awards, discovery } = props;
  

  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b> 
          {awards.map((award, index) => (
            <span key={index}>{award}{index !== awards.length - 1 && ', '}</span>
          ))}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  const profile1Props = {
    name: 'Maria Skłodowska-Curie',
    imageId: 'szV5sdG',
    profession: 'physicist and chemist',
    awards: [
      'Nobel Prize in Physics',
      'Nobel Prize in Chemistry',
      'Davy Medal',
      'Matteucci Medal'
    ],
    discovery: 'polonium (element)'
  };

  const profile2Props = {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    profession: 'geochemist',
    awards: [
      'Miyake Prize for geochemistry',
      'Tanaka Prize'
    ],
    discovery: 'a method for measuring carbon dioxide in seawater'
  };
  const color = '#FF0000';
  const price='USD19'
  const productProps = {
    name: 'Shirt',
    Price: '$19.99',
    Quantity: 3
  };

  const scores=[
    {name:'Mahesh',score:'100'},
    {name:'Ammu', score:'95'},
    {name:'Malinga',score:'85'}
  ];
  const todos=[
    {id:'1',text:'first of list'},
    {id:'2',text:'second of list'},
    {id:'3',text:'third of list'}
  ]
  console.log('App');
  return (
    <div>
      {/* <h1>Notable Scientists</h1>
      <Profile {...profile1Props} />
      <Profile {...profile2Props} /> */}
      {/* <Greeting/>
      {/* <UserGreeting/> */}
      {/* <List/>  */}
      {/* <BookList/> */}
      {/* <MyComponent/>
      <Counter/>
      <Input/>
      <ColorPicker color={color} />
      <TodoList/> */}
      {/* <CustomNavbar/>
      <Greeting name='Mahesh'/>
      <Product {...productProps} />
      <ScoreBoard scores={scores} /> */}
      {/* <Todos todos={todos}/> */}
      <LoginPage/>
      

    </div>
  );
}
