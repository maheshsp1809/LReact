import Greeting from './Greeting.jsx'
import List from './List.jsx';
import UserGreeting from './UserGreeting.jsx';
import { getImageUrl } from './Utils.jsx';
import BookList from './Que.jsx';
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';
import Input from './Input.jsx';


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

  return (
    <div>
      {/* <h1>Notable Scientists</h1>
      <Profile {...profile1Props} />
      <Profile {...profile2Props} /> */}
      {/* <Greeting/>
      {/* <UserGreeting/> */}
      {/* <List/>  */}
      {/* <BookList/> */}
      <MyComponent/>
      <Counter/>
      <Input/>

    </div>
  );
}
