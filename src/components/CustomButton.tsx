

import { CustomButtonProps } from '../types'
export const CustomButton = ({title, btnType , containerStyles, textStyles , rightIcon , handleClick} : CustomButtonProps ) => {
  return (
    <button disabled = {false} type={btnType || "button"} onClick={handleClick} className={`custom-btn ${containerStyles}`}>
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className='relative w-6 h-6'>
            <img src={rightIcon} alt="rightIcon" className='object-contain' />
          </div>
        )}
    </button>
  )
}
