import Accordions from "./Accordions"
import { accordionData } from "./utils/content.js"

const App = () => {

    return (
        <div>{
            accordionData.map(({title, content})=>(
                <Accordions title={title} content={content} key={title}/>
            ))
        }</div>
    )
}
export default App