import { connect, Connect } from "react-redux";
import Todo from "../components/Todo";
import TodoList from "../components/TodoList";
import { removeTodo } from "../features/todo/todoSlice";

function mapStateToProps(state){
    return{
        todos: state.todo
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onRemove: id=> {
            dispatch(removeTodo(id))
        }
    }
}
/* const TodoContainer  = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoContainer */
