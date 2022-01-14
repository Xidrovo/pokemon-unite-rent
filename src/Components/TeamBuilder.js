import React, { useState } from 'react'

const TeamBuilder = () => {
    const MAX_MEMBERS = 5
    const [members, setMembers] = useState([])
    const [currentMember, setCurrentMember] = useState('')
    const [team1, setTeam1] = useState([])
    const [team2, setTeam2] = useState([])
    const [extraTeam, setExtraTeam] = useState([])

    function handleInput({ target }) {
        const { value } = target
        setCurrentMember(value)
    }

    function addMember(evt) {
        evt.preventDefault()
        if (currentMember === '') return

        setMembers([...members, currentMember])
        setCurrentMember('')
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
        while (totalSelected < memberSize) {
            let selectedMember = Math.floor(Math.random() * (memberSize + 1))
            if (selectedMemberArray[selectedMember] === 0) {
                selectedMemberArray[selectedMember] = 1
                totalSelected = selectedMemberArray.reduce((x, y) => x + y)
                //  -----
                if (tempTeam1.length < MAX_MEMBERS) {
                    tempTeam1.push(members[selectedMember])
                } else if (tempTeam2.length < MAX_MEMBERS) {
                    tempTeam2.push(members[selectedMember])
                } else {
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
        } else {
            tempTeam = extraTeam
            tempTeam.push(members[index])
            setExtraTeam([...extraTeam, members[index]])
        }
    }

    function cleanTeam() {
        return new Promise((resolve) => {
            setTeam1([])
            setTeam2([])
            setExtraTeam([])
            setMembers([])
        })
    }

    return (
        <div className="py-8">
            <p className="text-lg font-bold pl-8 pb-4">Team Builder section </p>
            <section className="flex flex-col md:flex-row w-full justify-around">
                <article className="flex flex-col space-y-4 py-2 mx-auto justify-around content-center border w-5/6 md:w-1/3 bg-white rounded-lg">
                    <form onSubmit={addMember} className="mx-auto space-y-6">
                        {members.length > 0 && (
                            <p className="w-full text-center font-semibold ">
                                ({members.length} participants)
                            </p>
                        )}
                        <p className="w-3/2 font-semibold ">
                            Add more participants here!
                        </p>
                        <input
                            type="text"
                            className="border-2 py-1 px-2 w-full"
                            onChange={handleInput}
                            value={currentMember}
                        ></input>
                        <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-x-4 md:space-y-0">
                            <div
                                className="bg-indigo-900 rounded-lg cursor-pointer flex items-center justify-center w-full md:w-1/2"
                                onClick={addMember}
                            >
                                <button className="font-semibold text-white py-2">
                                    Add
                                </button>
                            </div>
                            <div
                                className="cursor-pointer flex justify-center items-baseline w-full md:w-1/2"
                                onClick={cleanTeam}
                            >
                                <p className="text-red-700 font-semibold py-2">
                                    clear all
                                </p>
                            </div>
                        </div>
                    </form>
                </article>
                <article className="flex flex-row flex-wrap my-4 w-full md:w-1/2 justify-between md:px-8 overflow-y-auto h-52 space-y-2">
                    {members.map((member, index) => {
                        return (
                            <article className="flex flex-row w-full md:w-1/2 h-12 my-auto ">
                                <p className="w-2/3 px-4 py-2 mx-2 bg-white my-auto break-words	">
                                    {member}
                                </p>
                                <section
                                    className="px-2 my-auto bg-indigo-900 hover:bg-indigo-800 rounded-lg cursor-pointer h-8 w-1/12"
                                    onClick={() => removeMember(index)}
                                >
                                    <button className="font-semibold text-white align-baseline h-8 w-full text-center">
                                        -{' '}
                                    </button>
                                </section>
                            </article>
                        )
                    })}
                </article>
            </section>
            <section className="flex flex-col my-12">
                {members.length > 5 && (
                    <button
                        className="w-1/2 mx-auto md:w-1/6 font-semibold text-white py-2 px-2 bg-indigo-900 rounded-full cursor-pointer"
                        onClick={randomizeTeams}
                    >
                        <p>Randomize Teams!</p>
                    </button>
                )}
                {team1.length > 1 && (
                    <article className="flex flex-col">
                        <h2 className="font-semibold text-lg ml-4 md:ml-12">
                            Team 1
                        </h2>
                        <div className="flex flex-row flex-wrap w-full justify-evenly md:justify-start md:ml-12 my-4">
                            {team1.map((team, index) => {
                                return (
                                    <td
                                        className=" bg-white py-1 px-4 m-2 w-1/3 md:w-1/4 break-words"
                                        key={`team1-${index}`}
                                    >
                                        {team}
                                    </td>
                                )
                            })}
                        </div>
                        {team2.length > 0 && (
                            <React.Fragment>
                                <h2 className="font-semibold text-lg ml-12">
                                    Team 2
                                </h2>
                                <div className="flex flex-row flex-wrap w-full justify-evenly md:justify-start md:ml-12 my-4">
                                    {team2.map((team, index) => {
                                        return (
                                            <td
                                                className=" bg-white py-1 px-4 m-2 w-1/3 md:w-1/4 break-words"
                                                key={`team2-${index}`}
                                            >
                                                {team}
                                            </td>
                                        )
                                    })}
                                </div>
                            </React.Fragment>
                        )}
                        {extraTeam.length > 0 && (
                            <React.Fragment>
                                <h2 className="font-semibold text-lg ml-12">
                                    Extra Team ( {extraTeam.length} )
                                </h2>
                                <div className="flex flex-row flex-wrap w-full justify-evenly md:justify-start md:ml-12 my-4">
                                    {extraTeam.map((team, index) => {
                                        return (
                                            <td
                                                className=" bg-white py-1 px-4 m-2 w-1/3 md:w-1/4 break-words"
                                                key={`extraTeam-${index}`}
                                            >
                                                {team}
                                            </td>
                                        )
                                    })}
                                </div>
                            </React.Fragment>
                        )}
                    </article>
                )}
            </section>
        </div>
    )
}

export default TeamBuilder
