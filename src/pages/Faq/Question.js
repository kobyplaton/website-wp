import React from 'react'
import '../../styles/Faq.css'
import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md'

function Question({ question, answer}) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className={`question-component`} onClick={() => setOpen(() => !open)}>
      <div className="question">
        {question}
        {open ? <MdOutlineExpandLess className='icon' /> : <MdOutlineExpandMore className='icon' />}
        </div>
      {open && <div className="answer">{answer}</div>}
    </div>
  )
}

export default Question