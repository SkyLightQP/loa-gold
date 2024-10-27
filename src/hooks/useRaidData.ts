import { createMemo, createSignal } from 'solid-js';
import { LevelName, RAID_DATA, RaidName } from '../constants/raid';

const useRaidData = () => {
  const [raid, setRaid] = createSignal<RaidName>('발탄');
  const [level, setLevel] = createSignal<LevelName>('노말');

  const totalGold = createMemo(() =>
    Object.values(RAID_DATA[raid()]?.[level()] ?? {}).reduce((acc, data) => acc + data.재화, 0)
  );

  const totalPlusGold = createMemo(() =>
    Object.values(RAID_DATA[raid()]?.[level()] ?? {}).reduce((acc, data) => acc + data.재화_더보기, 0)
  );

  const totalItem = createMemo(() => {
    const result: Record<string, number> = {};
    Object.values(RAID_DATA[raid()]?.[level()] ?? {}).forEach((data) => {
      data.재료.forEach((item) => {
        const [name, count] = item;
        result[name] = (result[name] || 0) + Number(count);
      });
    });
    return result;
  });

  const totalPlusItem = createMemo(() => {
    const result: Record<string, number> = {};
    Object.values(RAID_DATA[raid()]?.[level()] ?? {}).forEach((data) => {
      data.재료_더보기.forEach((item) => {
        const [name, count] = item;
        result[name] = (result[name] || 0) + Number(count);
      });
    });
    return result;
  });

  return { raid, setRaid, level, setLevel, totalGold, totalPlusGold, totalItem, totalPlusItem };
};

export default useRaidData;
