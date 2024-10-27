import { For } from 'solid-js';
import type { Component } from 'solid-js';

interface RaidTotalProps {
  readonly totalGold: number;
  readonly totalPlusGold: number;
  readonly totalItem: Record<string, number>;
  readonly totalPlusItem: Record<string, number>;
}

const RaidTotal: Component<RaidTotalProps> = (props) => {
  return (
    <p class="text-sm font-light">
      <span class="block font-semibold">
        TOTAL<span class="font-normal text-gray-400"> (더보기)</span>
      </span>
      <span>
        재화 {props.totalGold}골드 <span class="text-gray-400">({props.totalPlusGold}골드)</span>
        <For each={Object.entries(props.totalItem)}>
          {([item, count]) => (
            <span class="inline-block whitespace-nowrap">
              &nbsp;&middot; {item} {count}개&nbsp;
              <span class="text-gray-400">({props.totalPlusItem[item]}개)</span>
            </span>
          )}
        </For>
      </span>
    </p>
  );
};

export default RaidTotal;
