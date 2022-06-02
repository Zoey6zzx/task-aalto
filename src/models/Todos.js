export class Todos {
  constructor(userId, id, title, completed) {
    this.completed = completed;
    this.id = id;
    this.title = title;
    this.userId = userId;
  }
}
