import type { Component } from 'solid-js';
import { cn } from '../../utils/cn';

interface ListItemProps {
  readonly name: string;
  readonly isActive?: boolean;
  readonly onClick?: () => void;
}

const ListItem: Component<ListItemProps> = (props) => {
  const activeClass = () => (props.isActive ? 'font-bold underline underline-offset-4' : '');

  return (
    <div class={cn('cursor-pointer', activeClass())} onClick={props.onClick} tabIndex={0}>
      {props.name}
    </div>
  );
};

export default ListItem;
