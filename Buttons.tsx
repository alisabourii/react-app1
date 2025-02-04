
interface Props{
        children: string;
        color?: string;
        onClilck: ()=>void;
}
export const Buttons = ({children,onClilck,color='primary'}:Props) => {
  return (
        <button type="button" className={"btn btn-"+color} onClick={onClilck}>{children}</button>

  )
}
