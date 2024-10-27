import type { Component } from 'solid-js';
import Header from './components/Header';
import RaidTotal from './components/RaidTotal';
import RaidFilter from './components/RaidFilter';
import RaidTable from './components/RaidTable';
import useRaidData from './hooks/useRaidData';

const App: Component = () => {
  const { raid, setRaid, level, setLevel, totalGold, totalPlusGold, totalItem, totalPlusItem } = useRaidData();

  return (
    <div class="flex h-screen w-screen justify-center bg-gray-100/60">
      <div class="h-full w-[500px] bg-white p-[30px]">
        <Header />
        <RaidFilter raid={raid} setRaid={setRaid} level={level} setLevel={setLevel} />
        <div class="mt-10">
          <RaidTotal
            totalGold={totalGold()}
            totalPlusGold={totalPlusGold()}
            totalItem={totalItem()}
            totalPlusItem={totalPlusItem()}
          />
        </div>
        <RaidTable raid={raid()} level={level()} />
      </div>
    </div>
  );
};

export default App;
