const a = [3,5]; 
const b = a;
b.push(6);
console.log(a , b);
// Biswa Nath Nath
// 3:16 PM
function Person(first,last){
this.first = first;
this.last = last;
}
const raj = new Person('Raj','Roy');
const jhon = Person('Jhon','Doe');

console.log(raj);
console.log(jhon);
// Biswa Nath Nath
// 3:17 PM
const a = [2,3,5];
const b = [2,3,5];
const c = a;
const d = b;

a === c; 
a == b;
b === c;
d == a;
// Biswa Nath Nath
// 3:37 PM
function App() {
  const [count, setCount] = useState(0);

useEffect(() =>{
setCount(count + 1);
},[count])

function updateCount(){
setCount(count + 1);
}

  return (
    <div>
      <p>
       count is {count} 
      </p>
      <button onClick={updateCount}>
        Increment count
      </button>
    </div>
  );
}