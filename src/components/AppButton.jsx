
function AppButton({title,description, takeTitle}) {

    //const takeTitle = () => console.log("ciao");
     
    
    return(
        <>
        <button onClick={takeTitle} className="btn btn-primary ms-marg-left">{title}</button>

        
        </>
    )
}

export default AppButton; 
