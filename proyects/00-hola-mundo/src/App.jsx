import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){

    const format =(userName) => `@${userName}`
    
    return(
    <section className="App">
        <TwitterFollowCard 
            formatUserName={format} 
            isFollowing={true} 
            userName="mateoemilio1" 
            name="Mateo Emilio" />


        <TwitterFollowCard 
            formatUserName={format}  //le pasamos la funcion directamente
            isFollowing={false} 
            userName="midudev" 
            name="Miguel Angel Duran" />

    </section>
    )
}