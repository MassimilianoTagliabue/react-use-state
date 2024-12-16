import { useState } from 'react';


function AppCard({ languages }) {

    let [titolo, setTitolo] = useState(languages[0].title);
    let [descrizione, setDescrizione] = useState(languages[0].description)

    


    return (
        <>
            <div className="flex">
                {languages.map((curLang, index) => {


                    return (
                        <div key={index}>
                            <button onClick={
                                () => {
                                setTitolo(titolo = curLang.title);
                                setDescrizione(descrizione = curLang.description);
                            }} 
                            
                            className="btn btn-primary ms-marg-left">{curLang.title}</button>

                        </div>
                    )
                })}
            </div>

            <div className="mt-5 ms-marg-left">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{titolo}</h5>
                        <p className="card-text">{descrizione}</p>

                    </div>
                </div>
            </div>
        </>
    )



}




export default AppCard;