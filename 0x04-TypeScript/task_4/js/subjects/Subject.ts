namespace Subjects {
    export class Subject {
      _teacher: Teacher | undefined;
      setTeacher(teacher: Teacher){
        this._teacher = teacher;
      }
    }
  }
  