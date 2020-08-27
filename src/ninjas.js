import React from 'react';


const Ninjas = ({ ninjas }) => {

    // console.log(this.props);
    // const ninjaList = ninjas.map(ninja => {
    //     if(ninja.age <30){
    //         return (
    //             <div className='ninja' key={ninja.id}>
    //                 <div>Name : {ninja.name}</div>
    //                 <div>Age : {ninja.age}</div>
    //                 <div>Skill : {ninja.skill}</div>
    //             </div>
    //         )
    //     }
    //     else{
    //         return null;
    //     }          
    // })

    // const ninjaList = ninjas.map(ninja => {
    //     return ninja.age < 30
    //         ?(
    //         <div className='ninja' key={ninja.id}>
    //             <div>Name : {ninja.name}</div>
    //             <div>Age : {ninja.age}</div>
    //             <div>Skill : {ninja.skill}</div>
    //         </div>
    //         )
    //         : null;
    // })
    return (
        <div className='ninja-list'>
            {
               ninjas.map(ninja => {
                return ninja.age < 30
                    ?(
                    <div className='ninja' key={ninja.id}>
                        <div>Name : {ninja.name}</div>
                        <div>Age : {ninja.age}</div>
                        <div>Skill : {ninja.skill}</div>
                    </div>
                    )
            : null;
    })
            }
        </div>
    )

}

export default Ninjas;