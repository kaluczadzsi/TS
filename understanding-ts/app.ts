class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.name = name;
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }

    this.employees.push(name);
  }
}

const it = new ITDepartment('d1', ['Gabor']);

it.describe();
it.addEmployee('Nyad');
it.addEmployee('Max');
it.addEmployee('Yoruba');

console.log(it);
