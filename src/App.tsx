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
      <div class="flex h-full w-[500px] flex-col justify-between bg-white p-[30px]">
        <div>
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
        <div class="text-sm text-gray-400">
          <p class="text-sm">
            만든이 :{' '}
            <a class="underline" href="https://daegyeo.me" target="_blank">
              하대겸(daegyeo.me)
            </a>{' '}
            &middot; View on{' '}
            <a class="underline" href="https://github.com/SkyLightQP/loa-gold" target="_blank">
              GitHub
            </a>{' '}
          </p>
          <p class="text-sm">
            모든 리소스 파일의 권리는 Smilegate RPG, Inc. Lostark에서 보유합니다.
            <br />이 사이트는 Smilegate RPG와 어떠한 관련도 없습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
