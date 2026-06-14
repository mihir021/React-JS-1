import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1 style={{ color: 'blue' }}>Welcome user</h1>
      <Link to="/pro">Go to Product Page</Link>
    </div>
  );
}

export default Home;
