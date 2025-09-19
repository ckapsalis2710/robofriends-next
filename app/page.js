'use client';
import { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

export default function Home() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch robots');
        }
        const users = await response.json();
        setRobots(users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRobots();
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter(robot => 
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  if (loading) {
    return (
      <div className="tc pa5">
        <h1>Loading robots...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="tc pa5">
        <h2>Error: {error}</h2>
        <button 
          onClick={() => window.location.reload()}
          className="f5 link dim br-pill ph3 pv2 mb2 dib white bg-red"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}