import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  'data-type'?: string;
  tooltip?: string;
  active?: boolean;
};

export function ShapeTypeButton(props: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          {...props}
          className={`${props.className ?? ' '}${props.active ? 'bg-primary ' : 'bg-transparent '}cursor-pointer p-1.5 rounded-md hover:bg-hover`}>
          {props.children}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        {props.tooltip ? props.tooltip : 'Add shape'}
      </TooltipContent>
    </Tooltip>
  );
}
