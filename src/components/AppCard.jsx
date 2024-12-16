import { useState } from 'react';
import AppButton from "./AppButton";

function AppCard({ languages }) {


    const prendiTitolo = () =>{

        console.log("salve");
        
    }

    return (
        <>
            <div className="flex">

                
                {languages.map((curLang) => {

                    return (
                        <div>
                            <AppButton
                                title={curLang.title}
                                description={curLang.description}
                                takeTitle={prendiTitolo}
                            />
                        </div>
                    )
                })}
            </div>

            <div className="mt-5 ms-marg-left">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{languages[0].title}</h5>
                        <p className="card-text">{languages[0].description}</p>

                    </div>
                </div>
            </div>
        </>
    )



}

export default AppCard;