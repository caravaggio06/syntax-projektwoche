import React from 'react';
import LastResults from '../components/LastResults';
import NextMatch from '../components/NextMatch';
import LeagueTable from '../components/LeagueTable';

const HomePage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NextMatch />
      <LastResults />
      <div className="col-span-1 md:col-span-2">
        <LeagueTable />
      </div>
    </div>
  );
};

export default HomePage;