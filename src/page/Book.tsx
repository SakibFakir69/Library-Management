

import React from 'react'
import { useGetAllbooksQuery } from '@/redux/api/allBookApi'


function Book() {

  const {data, error, isError, isLoading,} =useGetAllbooksQuery();

  // error handel

  console.log(data);

  




  return (
    <div>






    </div>
  )
}

export default Book