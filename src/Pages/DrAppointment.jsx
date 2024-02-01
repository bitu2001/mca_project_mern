import React from 'react'
import "../Styles/DrAppointment.css";

function DrAppointment() {
  return (
    <div className='drappointmentcss'>
      <div className="container mt-5 mb-5 d-flex justify-content-center">
    <div className="card px-1 py-4">
        <div className="card-body">
            <h6 className="card-title mb-3">This appointment is for</h6>
            <div className="d-flex flex-row"> <label className="radio mr-1"> <input type="radio" name="add" value="anz" checked/> <span> <i className="fa fa-user"></i> Anz CMK </span> </label> <label className="radio"> <input type="radio" name="add" value="add"/> <span> <i className="fa fa-plus-circle"></i> Add </span> </label> </div>
            <h6 className="information mt-4">Please provide following information about Anz CMK</h6>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                         <label for="name">Name</label>  <input className="form-control" type="text" placeholder="Name"/> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="text" placeholder="Mobile"/> </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="text" placeholder="Email ID"/> </div>
                    </div>
                </div>
            </div>
            <div className=" d-flex flex-column text-center px-5 mt-3 mb-3"> <small className="agree-text">By Booking this appointment you agree to the</small> <a href="#" className="terms">Terms & Conditions</a> </div> <button className="btn btn-primary btn-block confirm-button">Confirm</button>
        </div>
    </div>
</div>
    </div>
  )
}

export default DrAppointment
