import React, { useState } from  "react"

const TeamBuilder = () => {
    const MAX_MEMBERS = 5
    const [members, setMembers] = useState([])
    const [currentMember, setCurrentMember] = useState("")
    const [team1, setTeam1] = useState([])
    const [team2, setTeam2] = useState([])
    const [extraTeam, setExtraTeam] = useState([])

    function handleInput({target}) {
        const {value} = target
        setCurrentMember(value)
    }

    function addMember(evt) {
        evt.preventDefault()
        if (currentMember === "") return 

        setMembers([...members, currentMember])
        setCurrentMember("")
    }

    function removeMember(index) {
        let temp = [...members]
        temp.splice(index, 1)
        setMembers(temp)
    }

    async function randomizeTeams() {
        // cleanTeam()
        let memberSize = members.length
        let selectedMemberArray = new Array(memberSize).fill(0)
        let totalSelected = 0
        let tempTeam1 = []
        let tempTeam2 = []
        let tempExtraTeam = []
        while ( totalSelected < memberSize ) {
            let selectedMember = Math.floor(Math.random() * (memberSize + 1))
            if (selectedMemberArray[selectedMember] === 0 ) {
                selectedMemberArray[selectedMember] = 1
                totalSelected = selectedMemberArray.reduce( (x, y) => x + y)
                //  ----- 
                if (tempTeam1.length < MAX_MEMBERS) {
                    tempTeam1.push(members[selectedMember])
                } else if (tempTeam2.length < MAX_MEMBERS) {
                    tempTeam2.push(members[selectedMember])
                }
                else {
                    tempExtraTeam.push(members[selectedMember])
                }
            }
        }

        setTeam1(tempTeam1)
        setTeam2(tempTeam2)
        setExtraTeam(tempExtraTeam)
    }

    function addToTeams(index) {
        let tempTeam = []
        if (team1.length < MAX_MEMBERS) {
            tempTeam = team1
            tempTeam.push(members[index])
            setTeam1(tempTeam)
        } else if (team2.length < MAX_MEMBERS) {
            tempTeam = team2
            tempTeam.push(members[index])
            setTeam2([...team2, members[index]])
        }
        else {
            tempTeam = extraTeam
            tempTeam.push(members[index])
            setExtraTeam([...extraTeam, members[index]])
        }
    }

    function cleanTeam() {
        return new Promise(resolve => {setTeam1([])
            setTeam2([])
            setExtraTeam([])
        })
        
    }

    return (
        <div>
            <section className="flex flex-row ">
            <article className="flex flex-row flex-wrap my-4 w-1/2 justify-between px-8 max h-52 overflow-y-auto">
                {members.map((member, index) => {
                    return (
                        <article className="flex flex-row w-1/3 justify-between my-2 mx-2">
                            <p className="my-auto1">{member}</p>
                            <section className="px-2 bg-indigo-900 rounded-lg cursor-pointer h-8" onClick={() => removeMember(index)}>
                                <button className="font-semibold text-white align-baseline h-8"> - </button>
                            </section>
                        </article>
                    )
                })}
            </article>
            <article className="flex flex-col space-y-4 mx-4 py-2 justify-around content-center border w-1/2">
            <form onSubmit={addMember} className="mx-auto space-y-8">
                <p className="w-3/2 font-semibold">Add more participants here!</p>
                <input type="text" className="border-2 py-1 px-2 w-full" onChange={handleInput} value={currentMember} ></input>
                <div className="bg-indigo-900 rounded-lg cursor-pointer flex items-center justify-center" onClick={addMember}>
                    <button className="font-semibold text-white py-2"> Add </button>
                </div>
                </form>
            </article>
        </section>
        <section className="flex flex-col">
                <button className="m-4 w-1/6 font-semibold text-white py-2 px-2 bg-indigo-900 rounded-full cursor-pointer flex items-center justify-center"
                    onClick={randomizeTeams}>
                    Randomize Teams!
                </button>
                <article className="flex flex-col">
                           <h2 className="font-semibold text-lg ml-12">Team 1</h2>
                            <div className="flex flex-row justify-evenly my-4">
                                {team1.map((team, index) => {
                                    return <td className=" bg-white py-1 px-4 w-1/6" key={`team1-${index}`} >{team}</td>
                                })}
                            </div>
                            <h2 className="font-semibold text-lg ml-12">Team 2</h2>
                            <div className="flex flex-row justify-evenly my-4">
                                {team2.map((team, index) => {
                                return  <td className=" bg-white py-1 px-4 w-1/6"  key={`team2-${index}`} >{team}</td>
                                })}
                            </div>
                            {extraTeam.length > 0 && 
                                    <React.Fragment>
                                        <h2 className="font-semibold text-lg ml-12">Extra Team</h2>
                                        <div className="flex flex-row flex-wrap justify-evenly my-4">
                                            {extraTeam.map((team, index) => {
                                            return  <td className=" bg-white py-1 px-4 mx-4 w-1/6 my-1"  key={`extraTeam-${index}`} >{team}</td>
                                            })}
                                        </div>
                                        </React.Fragment>
                                    }
                </article>
        </section>
        </div>
    )
}

export default TeamBuilder