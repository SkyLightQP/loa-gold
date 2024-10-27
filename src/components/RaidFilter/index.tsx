import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { LevelName, RAID_LEVEL_LIST, RAID_NAME_LIST, RaidName } from '../../constants/raid';
import ListItem from '../ListItem';

interface RaidFilterProps {
  readonly raid: () => RaidName;
  readonly setRaid: (raid: RaidName) => void;
  readonly level: () => LevelName;
  readonly setLevel: (level: LevelName) => void;
}

const RaidFilter: Component<RaidFilterProps> = (props) => {
  return (
    <>
      <div class="mt-10 flex flex-wrap gap-x-3 gap-y-0.5">
        <For each={RAID_NAME_LIST}>
          {(raidName) => (
            <ListItem
              name={raidName}
              isActive={props.raid() === raidName}
              onClick={() => {
                props.setRaid(raidName);
                props.setLevel('노말');
              }}
            />
          )}
        </For>
      </div>
      <div class="mt-2.5 flex flex-wrap gap-x-3 gap-y-0.5">
        <For each={RAID_LEVEL_LIST[props.raid()]}>
          {(levelName) => (
            <ListItem
              name={levelName}
              isActive={props.level() === levelName}
              onClick={() => props.setLevel(levelName)}
            />
          )}
        </For>
      </div>
    </>
  );
};

export default RaidFilter;
