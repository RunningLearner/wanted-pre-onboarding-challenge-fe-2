
interface Todo{
    id: number;
    content: string;
    isCompleted: boolean;
    category: string;
    tags?: string[];
}

/**
 * Todo 객체를 추가한다.
 * @param {Todo} todo 추가할 Todo 객체
 * @throws {Error} Todo 컨텐츠가 없을 경우 에러 반환
 * @returns {void}
 * @todo 기능 구현 필요
 */
interface createTodo{ (todo: Todo): void}

/**
 * 모든 Todo들을 가져온다.
 * @returns {Todo[]} Todo 배열
 * @todo 기능 구현 필요
 */
interface getTodos {():Todo[]}

/**
 * 특정 Todo를 가져온다.
 * @param {number} id 가져오려는 Todo Id
 * @returns {Todo} 해당 Id 값을 가진 Todo
 * @todo 기능 구현 필요
 */
interface getTodoById {(id:number): Todo}


/**
 * 특정 Todo를 업데이트 한다.
 * @param {number} id 업데이트 하려는 Todo Id값
 * @param {Todo} todo Todo에 업데이트 하려는 내용
 * @returns {void}
 * @todo 기능 구현 필요
 */
interface updateTodo {(id: number, todo:Todo): void}


/**
 * 해당 id를 가진 Todo를 삭제한다.
 * @param {number} id 삭제할 Todo의 id
 * @returns {void}
 * @todo 기능 구현 필요
 */
interface deleteTodo {(id:number):void}

/**
 * 모든 Todo를 삭제한다.
 * @returns {void}
 * @todo 기능 구현 필요
 */
interface deleteTodos {():void}

/**
 * 해당 id에 해당하는 tag를 삭제한다.
 * @param {number} id tag를 삭제할 Todo의 id
 * @param {string} tag 삭제할 태그값
 * @returns {void}
 * @todo 기능 구현 필요
 */
interface deleteTodoTag {(id:number, tag:string): void}


/**
 * 해당 id의 모든 tag들을 삭제한다.
 * @param {number} id tag를 삭제할 Todo의 id
 * @returns {void} 
 * @todo 기능 구현 필요
 */
interface deleteTodoTags {(id:number): void}

