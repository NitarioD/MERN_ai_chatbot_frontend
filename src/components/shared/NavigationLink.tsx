import {Link} from 'react-router-dom'

type Props = {
    to: string;
    bg: string;
    text: string;
    textColor: string;
    onClick?: () => Promise<void>; 
};
const NaivgationLink = (props: Props) => {
  return ( 
    <Link
    to = {props.to} 
    className= "font-semibold uppercase mr-[10px] ml-[10px] px-[20px] py-[8px] rounded-[10px] no-underline tracking-wide" 
    style = {{background: props.bg, color: props.textColor}} 
    onClick={props.onClick}
  >
    {props.text}
  </Link>
  );

};

export default NaivgationLink;