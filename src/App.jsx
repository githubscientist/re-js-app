import StudentCard from './components/StudentCard';

function App() {
  const studentName = "Arun";
  const course = "React JS";
  const age = 21;
  const city = "Coimbatore";

  return <StudentCard
    studentName={studentName}
    course={course}
    age={age}
    city={ city }
  />
}

export default App;