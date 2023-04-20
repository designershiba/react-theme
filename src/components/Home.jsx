import React from 'react';
import { useDispatch } from 'react-redux';
import { selectColour } from '../redux/action';
import { MDBContainer } from 'mdb-react-ui-kit';

export default function Home() {
    const dispatch = useDispatch();
  return (
    <MDBContainer className='mt-5'>
      <select onChange={(e)=> dispatch(selectColour(e.target.value))} defaultValue={'blue'} class="browser-default custom-select">
        <option value='red'>Red</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
      </select>
      <div>
      
      
      </div>
    </MDBContainer>
  )
}
