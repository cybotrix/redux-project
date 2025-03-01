import LeftNav from "./navigation";

const Contact= () =>{
    return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4">
                <LeftNav/>
            </div>
            <div className="col-xl-6 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa fa-headset" aria-hidden="true"></i> Contact Imformation </div>
                        <div className="card-body "> 
                            <form action="">
                                
                                <div className="form-group row">

                                    <div className="mb-4">
                                    <label className="mb-2"> Mobile Number </label>
                                        <input type="number" placeholder="Mobile No" className="form-control"/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2"> Email Id</label>
                                        <input type="email" placeholder="Example@gmail.com" className="form-control"/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2" > Local Address</label>
                                    <textarea placeholder="Local Address" className="form-control" rows="3" cols="3"  ></textarea>
                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> Permanent Address</label>
                                    <textarea placeholder="Permanent Address" className="form-control" rows="3" cols="3"  ></textarea>

                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> Any Refrence Address and Contact</label>
                                    <textarea placeholder="Other Contact" className="form-control" rows="3" cols="3"  ></textarea>

                                    </div>

                                    <div class="text-center pb-2">
                                      <button class="btn btn-danger me-3"> Save & Contiue </button>
                                    </div>



                                </div>

                            </form>
                        </div>
                        
                    </div>
                </div>
            <div className="col-xl-3 mb-4"></div>
        </div>
    </div>
        )
    
}

export default Contact;
