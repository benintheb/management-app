import logo from './logo.svg';
import Customer from './components/customer';
import './App.css';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: "정성현",
    birthdate: "970510",
    gender: "male",
    occupation: "student"
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: "남동호",
    birthdate: "950829",
    gender: "male",
    occupation: "blockchain developer"
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: "최민성",
    birthdate: "950413",
    gender: "male",
    occupation: "naver webtoon developer"
  }
]

function App() {
  return (
    customers.map(c => {return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthdate={c.birthdate} gender={c.gender} occupation={c.occupation} />})
  );
}

export default App;
