import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { LevelName, RAID_DATA, RaidName } from '../../constants/raid';

interface RaidTableProps {
  readonly raid: RaidName;
  readonly level: LevelName;
}

const RaidTable: Component<RaidTableProps> = (props) => {
  return (
    <table class="w-full">
      <thead class="h-8">
        <tr>
          <th class="w-9 border-[3px] border-white bg-zinc-800 px-8 py-2 text-white">관문</th>
          <th class="border-[3px] border-white bg-zinc-800 text-white">재료</th>
          <th class="w-40 border-[3px] border-white bg-zinc-800 text-white">골드</th>
        </tr>
      </thead>
      <tbody>
        <For each={Object.entries(RAID_DATA[props.raid]?.[props.level] ?? {})}>
          {([gate, data]) => (
            <tr>
              <td class="w-9 border-[3px] border-white bg-zinc-100 px-5 py-3 text-center">{gate}</td>
              <td class="space-y-1.5 border-[3px] border-white bg-zinc-100 px-5 py-3 text-left leading-4">
                <For each={data.재료}>
                  {(item, index) => (
                    <div>
                      {item[0]} {item[1]}개
                      <br />
                      <span class="text-sm">(더보기 {data.재료_더보기[index()][1]}개)</span>
                    </div>
                  )}
                </For>
              </td>
              <td class="w-40 border-[3px] border-white bg-zinc-100 px-5 py-3 text-left leading-4">
                {data.재화}골드 <br />
                <span class="text-sm">(더보기 {data.재화_더보기}골드)</span>
              </td>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
};

export default RaidTable;
