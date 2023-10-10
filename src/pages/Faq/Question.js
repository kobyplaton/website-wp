import React from 'react'
import '../../styles/Faq.css'
import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md'

function Question({ question, answer, extra}) {
  const [open, setOpen] = React.useState(false)
  const [seeMore, setSeeMore] = React.useState(false)

  React.useEffect(() => {
    if (!open) setSeeMore(false)
    console.log(extra)
  }, [open])
  
  return (
    <div className={`question-component`} >
      <div className="question" onClick={() => setOpen(() => !open)}>
        {question}
        {open ? <MdOutlineExpandLess className='icon' /> : <MdOutlineExpandMore className='icon' />}
        </div>
      {open && <div className="answer">
        {answer}
        {extra && <div className='color-rainbow' style={{cursor: 'pointer'}} onClick={() => setSeeMore((seeMore) => !seeMore)}>see {seeMore ? 'less' : 'more'}</div>}
        {seeMore && extra.map(({body, heading}) => <div><span className='color-rainbow'>{heading} - </span>{body}</div>)}
      </div>}
      {}
    </div>
  )
}

export default Question