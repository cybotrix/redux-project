import LeftNav from "./navigation";

const Education = () =>{
    return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4">
            <LeftNav/>
            </div>
            <div className="col-xl-6 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Education Imformation </div>
                        <div className="card-body "> 
                            <form action="">
                                
                                <div className="form-group row">

                                    <div className="mb-4">
                                    <label className="mb-2">Highest Education </label>
                                        <input type="text" placeholder="Highest Eduction" className="form-control"/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2"> Passing Year</label>
                                        <input type="number" placeholder="Ex. 2012" className="form-control"/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2" > Grade/Persentage (%)</label>
                                    <input type="text" placeholder="Grade/Persentage (%)" className="form-control"/>

                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> Collage / University</label>
                                    <input type="text" placeholder="Collage / University" className="form-control"/>

                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> City</label>
                                    <input type="text" placeholder="City" className="form-control"/>
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

export default Education;
