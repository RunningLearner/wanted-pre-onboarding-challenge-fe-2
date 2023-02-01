/**
 * Todo 객체 
 * @typedef {Object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isCompleted - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]=} tags - 태그들
 */

/**
 * Todo 객체를 추가한다.
 * @param {Todo} todo 추가할 Todo 객체
 * @throws {Error} Todo 컨텐츠가 없을 경우 에러 반환
 * @returns {void}
 * @todo 기능 구현 필요
 */
function createTodo(todo) {}

/**
 * 모든 Todo들을 가져온다.
 * @returns {Todo[]} Todo 배열
 * @todo 기능 구현 필요
 */
function getTodos() {}

/**
 * 특정 Todo를 가져온다.
 * @param {number} id 가져오려는 Todo Id
 * @returns {Todo} 해당 Id 값을 가진 Todo
 * @todo 기능 구현 필요
 */
function getTodoById(id) {}


/**
 * 특정 Todo를 업데이트 한다.
 * @param {number} id 업데이트 하려는 Todo Id값
 * @param {Todo} todo Todo에 업데이트 하려는 내용
 * @returns {void}
 * @todo 기능 구현 필요
 */
function updateTodo(id, todo) {}


/**
 * 해당 id를 가진 Todo를 삭제한다.
 * @param {number} id 삭제할 Todo의 id
 * @returns {void}
 * @todo 기능 구현 필요
 */
function deleteTodo(id) {}

/**
 * 모든 Todo를 삭제한다.
 * @returns {void}
 * @todo 기능 구현 필요
 */
function deleteTodos() {}

/**
 * 해당 id에 해당하는 tag를 삭제한다.
 * @param {number} id tag를 삭제할 Todo의 id
 * @param {string} tag 삭제할 태그값
 * @returns {void}
 * @todo 기능 구현 필요
 */
function deleteTodoTag(id, tag) {}


/**
 * 해당 id의 모든 tag들을 삭제한다.
 * @param {number} id tag를 삭제할 Todo의 id
 * @returns {void} 
 * @todo 기능 구현 필요
 */
function deleteTodoTags(id) {}

