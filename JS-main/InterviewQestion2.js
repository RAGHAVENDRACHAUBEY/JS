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


// Is FlatList a Pure Component?
// No, FlatList is not inherently a PureComponent or memoized. However, it has built-in optimizations to minimize unnecessary re-renders.

// How FlatList Optimizes Performance
// Item Recycling (Virtualization)

// Unlike ScrollView, FlatList only renders items that are visible on the screen (or about to be visible), improving performance for large lists.

// It recycles off-screen items to reduce memory usage.

// React.memo or PureComponent for List Items

// While FlatList itself is not pure, you should optimize individual list items using:

// React.memo() (for functional components)

// PureComponent (for class components)

// This prevents unnecessary re-renders of list items when props don't change.