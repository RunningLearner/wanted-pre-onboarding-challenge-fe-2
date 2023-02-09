
interface Todo{
    id: number;
    content: string;
    isCompleted: boolean;
    category: string;
    tags?: string[];
}

interface createTodo{ (todo: Todo): void}

interface getTodos {():Todo[]}

interface getTodoById {(id:number): Todo}


interface updateTodo {(id: number, todo:Todo): void}


interface deleteTodo {(id:number):void}

interface deleteTodos {():void}

interface deleteTodoTag {(id:number, tag:string): void}


interface deleteTodoTags {(id:number): void}

