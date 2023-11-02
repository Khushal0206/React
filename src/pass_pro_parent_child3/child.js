export default function Child({SandFun ,SandState}){
    return<>
    <h1>Child component</h1>
    <h3>{SandState}</h3>
    <button onClick={SandFun}>Count</button>

    </>

}