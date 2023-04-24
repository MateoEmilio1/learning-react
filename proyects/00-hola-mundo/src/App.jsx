import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){

    const users= [
        {
            userName: 'mateoemilio1',
            name: 'Mateo Emilio',
            isFollowing: true
        },
        {
            userName: 'emilianorios1',
            name:'Emliano Rios',
            isFollowing:false
        }


    ]


    return(
    <section className="App">
        {
            users.map( ({userName, name, isFollowing}) => (  

            <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
            >

            {name}

            </TwitterFollowCard>
            ))


        }
    
    </section>
    )
}