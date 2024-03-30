import React from 'react'

const TimelineItem = ({title, date, description, company, subtitle}) => {
  return (
    <li className='timeline-item'>
      <h4 className='h4 timeline-item-title'>{title}</h4>
      <span>{subtitle}</span>
      <span>{company}</span>
      <span>{date}</span>
      <p className='timeline-text'>{description}</p>
    </li>
  )
}

export default TimelineItem
