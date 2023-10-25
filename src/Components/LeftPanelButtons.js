import {React,useState} from 'react'

function LeftPanelButtons(props) {
    const [isHover, setIsHover] = useState(0)

    const handleMouseEnter = (value) => {
        setIsHover(value)
      };
    const handleMouseLeave = () => {
        setIsHover(0)
      };
    

  return (
    <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
        <button onClick={props.onClickBtn1} onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=> handleMouseLeave(1)} style={{backgroundColor: isHover === 1 ? 'var(--primary2)' : 'var(--light)',color : isHover === 1 ? 'var(--white)' : 'var(--primary2)'}}>
            {isHover === 1 ? <img src={props.hoverImg} alt='img'/> : <img src={props.img} alt='img'/>}
            {props.b1}
        </button>
        <button onClick={props.onClickBtn2} onMouseEnter={()=>handleMouseEnter(2)} onMouseLeave={()=> handleMouseLeave(2)} style={{backgroundColor: isHover === 2 ? 'var(--primary2)' : 'var(--light)',color : isHover === 2 ? 'var(--white)' : 'var(--primary2)'}}>
            {isHover === 2 ? <img src={props.hoverImg2} alt='img'/> : <img src={props.img2} alt='img'/>}
            {props.b2}
        </button>
    </div>
  )
}

export default LeftPanelButtons