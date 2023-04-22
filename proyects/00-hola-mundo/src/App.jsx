import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){

    const formatUserName =(userName) => `@${userName}`
    
    return(
    <section className="App">
        <TwitterFollowCard 
            formatUserName={formatUserName} 
            isFollowing={true} 
            userName="mateoemilio1" 
            name="Mateo Emilio" />


        <TwitterFollowCard 
            formatUserName={formatUserName}  //le pasamos la funcion directamente
            isFollowing={false} 
            userName="midudev" 
            name="Miguel Angel Duran" />

    </section>
    )
}