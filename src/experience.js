import LeftNav from "./navigation";

const Experience = () =>{
    return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4">
                <LeftNav/>
            </div>
            <div className="col-xl-6 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Experience Imformation </div>
                        <div className="card-body "> 
                            <form action="">
                                
                                <div className="form-group row">
                                    <div className="mb-4 ">
                                    <label className="mb-2">Total Experience</label>
                                    <input  type="text" placeholder="Total Experience" className="form-control"/>
                                    </div>
                                    <div className="mb-4 ">
                                    <label className="mb-2">About Experience</label>
                                    <textarea  placeholder="About Experience" className="form-control" rows="3" cols="3" maxlength="400"  ></textarea>
                                    </div>

                                    <div class="text-center pb-2">
                                      <button class="btn btn-danger me-3"> Save </button>
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

export default Experience;
