import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (

    // may want to change the position of the footer at later date
    <MDBFooter className='bg-dark text-center text-white fixed-bottom'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=100091358232616' target="_blank" role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
              </MDBBtn> */}

          <MDBBtn outline color="light" floating className='m-1' href='mailto:dressedtokillcomedy@gmail.com' role='button'>
            <MDBIcon fab icon='google' /> 
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/dressedtokillcomedy/' target="_blank" role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn> */}
{/* 
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn> */}
        </section>
      </MDBContainer>

    </MDBFooter>
  );
}