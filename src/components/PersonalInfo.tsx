const PersonalInfo = () => {
    return (
      <>
        <h1 className="mt-3 mb-2 ms-5 fs-3 text-white">Jhon Rex Tabanas</h1> 
        <h2 className="mb-4 ms-5 text-light fs-6">Junior Software Developer</h2> 
        <div className="ms-5 mb-3 text-secondary">
            <h5 className="mb-1 text-light fs-5">Contact Number:</h5> 
            <p className="fs-6">09948070403</p> 
        </div>

        <div className="ms-5 mb-3 text-secondary">
            <h5 className="mb-1 text-light fs-5">Email Address:</h5> 
            <p className="fs-6">jhonrextabanas27@gmail.com</p> 
        </div>

        <div className="ms-5 mb-3 text-secondary">
            <h5 className="mb-1 text-light fs-5">LinkedIn:</h5> 
            <a href="https://www.linkedin.com/in/jhon-rex-tabanas-a74a052b5/">
            <p className="fs-6">Jhon Rex Tabanas</p>
            </a> 
        </div>
      </>
    );
  };
  
  export default PersonalInfo;
  