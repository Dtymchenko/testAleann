import React from 'react'
import { JobListItem } from '../Components/JobListItem'
import { Pagination } from './../Components/Pagination';

export const JobBoard = ({ today, getTimePassed, currentItems, items, itemsPerPage, setCurrentItems, setItemId }) => {

  return (
    <div className='items mx-[260px] py-[29px]'>
      {
        currentItems.map((obj) => {
          return <JobListItem getTimePassed={getTimePassed} today={today} key={obj.id} obj={obj} setItemId={setItemId}/>
        })
      }
      <Pagination items={items} itemsPerPage={itemsPerPage} currentItems={currentItems} setCurrentItems={setCurrentItems} />
      </div>
  )
}
