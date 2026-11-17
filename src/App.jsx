
import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
const reactDesriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}



function Header(){
  const description = reactDesriptions[genRandomInt(reactDesriptions.length - 2)];
  return(
  <header>
      <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
);
}


function CoreConcepts(props){
  return <li>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcepts 
           title="Components"
           description="Learn how to create and use React components."
           image={componentImg} />
          <CoreConcepts 
          title="Props" 
          description="Understand how to pass data between components." 
          image={componentImg} />
          <CoreConcepts 
          title="State" 
          description="Discover how to manage and update component data." 
          image={componentImg} />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
