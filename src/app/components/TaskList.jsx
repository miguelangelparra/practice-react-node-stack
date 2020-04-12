import React from "react";
import { connect } from "react-redux";

export const TaskList = ({ tasks, name }) => (
  <div>
    <div>
      <h3>{name}</h3>
    </div>
    <div>
      {tasks.map((task) => (
        <div>{task.name}</div>
      ))}
    </div>
  </div>
);
//Esto es lo que llegara como props al componente
function mapStateToProps(state, ownProps) {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter((task) => task.group === groupID),
  };
}
//Esto crea una especie de funcion anidada, las propiedades del objeto que retorna la primera funcion llega a la segunda como props que pueden ser consultadas directamente
export const ConnectedTaskList = connect(mapStateToProps)(TaskList);
//Se debe importar el componente conectado. 
