export const Task = (props) => {
  return (
    <div 
      className="task" style={{display: "flex", alignItems: "flex-start",
      width: "fit-content",
      alignItems: "center"}}
    >
      <p style={{ 
        background: props.completed ? 'radial-gradient(ellipse at center, rgba(0, 128, 0, 0.5) 0%, rgba(0, 128, 0, 0.2) 40%, rgba(0, 128, 0, 0) 100%)' : 'radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, .25) 40%, rgba(255, 255, 255, 0) 100%)',
        display: "flex", justifyContent: "center", alignItems: "center", padding: "50px", borderRadius: "75%",
        color: "#808080", 
        fontSize: "22px",
        fontFamily: "Comic Sans MS",
        textShadow: "1px 1px 0 #D3D3D3, -1px -1px 0 #444, 1px -1px 0 #D3D3D3, -1px 1px 0 #444",
        margin: "-.05px"
      }}>{props.taskName}</p>
      <button onClick={() => props.completeTask(props.id)} style={{ margin: "10px", backgroundColor: "darkgreen", color: "white"}}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)} style={{ margin: "10px", backgroundColor: "darkred", color: "white"}}>X</button>
    </div>
  ); 
}