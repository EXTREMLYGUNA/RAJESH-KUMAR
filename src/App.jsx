/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Table from 'react-bootstrap/Table';

function App() {
  return (<>
  <div className='contain' >
    <div className='container-flu' >

      <div>
        <h1 className='resume' >RESUME</h1>
        <div className='content' >
          <h4 style={{color:"red"}}>NAME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </h4 > <h4 style={{color:"green"}}>RAJESH KUMAR.V</h4> <b style={{color:"red",fontSize:"23px"}} >,</b><br/>
          <h4 style={{color:"red"}}>EMAIL &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </h4> <h4><a href='https://mail.google.com/mail/u/0/#inbox' >rajmanlysycho101@gmail.com</a> <b style={{color:"red"}} >,</b></h4><br/>
          <h4 style={{color:"red"}}>MOBILE &nbsp;:&nbsp; </h4 > <h4 style={{color:"green"}}>6369316191</h4>
          <hr/>
        </div>

        <div>
          <h4 className='career'>CAREER OBJECTIVE</h4>
          <p className='paragraph'>I am aiming to have a successful career in leading corporate with committed and dedicated people . I am ready to do the job with my complete honesty, sincerity and creativity in your organization</p>
        </div>
        
        <div>
        <h4 className='career'>EDUCATIONAL QUALIFICATION</h4>
        <Table striped bordered hover className='table' >
      <thead>
        <tr>
          <th style={{color:"red"}} >Course</th>
          <th style={{color:"red"}} >Name of Institution and location</th>
          <th style={{color:"red"}} >Year of completion</th>
          <th style={{color:"red"}} >Board / University</th>
          <th style={{color:"red"}} >Percentage of marks</th>
        </tr>
        
      </thead>
      <tbody>
      <tr>
        <td>M.Sc (Applied Microbiology)</td>
        <td>K.M.G College of Arts and Science, Gudiyatham</td>
        <td>2023</td>
        <td>Thiruvalluvar University</td>
        <td>86%</td>
      </tr>
      <tr>
        <td>B.Sc (Microbiology)</td>
        <td>K.M.G College of Arts and Science, Gudiyatham</td>
        <td>2021</td>
        <td>Thiruvalluvar University</td>
        <td>76%</td>
      </tr>
      <tr>
        <td>HSC</td>
        <td>Government Boys Higher Secondary School</td>
        <td>2018</td>
        <td>State Board</td>
        <td>69%</td>
      </tr>
      <tr>
        <td>SSLC</td>
        <td>Government Boys Higher Secondary School</td>
        <td>2016</td>
        <td>State Board</td>
        <td>70%</td>
      </tr>
      </tbody>
    </Table>
        </div>

        <div>
        <h4 className='career'>BASIC SKILLS</h4>
        <ul>
          <li>Computer Knowledge</li>
          <li>NSS</li>
          <li>SWAYAM</li>
          <li>Seminar Certificate</li>
        </ul>
        </div>

        <div>
        <h4 className='career'>TECHNICAL SKILLS</h4>
        <ul>
          <b style={{color:"red"}} className='bold' >DATA SCIENCE & MACHINE LEARNING</b>
          <li>Data analysis</li>
          <li>Power BI</li>
          <li>MySQL</li>
          <li>Python</li>
          <li>Machine learning</li>
        </ul>
        </div>

        <div>
        <h4 className='career'>PERSONAL DETAILS</h4>
        <div className='personal'>
        <h5 style={{color:"red"}} >NAME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </h5> <h5 style={{color:"green"}} >RAJESH KUMAR.V</h5> <br/>
        <h5 style={{color:"red"}} >FATHER'S NAME &nbsp;&nbsp;&nbsp;:&nbsp; </h5> <h5 style={{color:"green"}} >VIJAYARANGAN.M</h5><br/>
        <h5 style={{color:"red"}} >MOTHER'S NAME &nbsp;:&nbsp; </h5> <h5 style={{color:"green"}} >RANJITHAM.V</h5><br/>
        <h5 style={{color:"red"}} >DATE OF BIRTH &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </h5> <h5 style={{color:"green"}} >15-06-2001</h5><br/>
        <h5 style={{color:"red"}} >GENDER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </h5> <h5 style={{color:"green"}} >MALE</h5><br/>
        <h5 style={{color:"red"}} >RELIGION &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </h5> <h5 style={{color:"green"}} >HINDU</h5><br/>
        <h5 style={{color:"red"}} >NATIONALITY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </h5> <h5 style={{color:"green"}} >INDIA</h5><br/>
        <h5 style={{color:"red"}} >MARRIGE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </h5> <h5 style={{color:"green"}} >SINGLE</h5><br/>
        <h5 style={{color:"red"}} >LANGUAGE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </h5> <h5 style={{color:"green"}} >TAMIL & ENGLISH</h5><br/>
        </div>
        </div>

        <div>
        <h4 className='career'>DECLARATION</h4>
        <p className='bold'>I hereby declare that the details furnished above are true to The Best of my knowledge and belief.</p>
        </div><br/>

        <div className='class'>
          <h4 style={{color:"red"}} >Your's faithfully</h4>
          <h5> &nbsp;(RAJESH KUMAR)</h5>
        </div>

      </div>
    </div>
  </div>
  </>)
}

export default App
