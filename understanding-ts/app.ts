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

class AccountingDepartment extends Department {
  private lastReport: string;
  protected reports: string[] = [];

  get allReports() {
    return this.reports;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }

    this.addReport(value);
  }

  constructor(id: string, reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = this.reports[0];
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('ad1', []);

accounting.mostRecentReport = 'Year and report';

accounting.addReport('Something went wrong...');

accounting.addEmployee('Max');
accounting.addEmployee('Tomas');

console.log(accounting.mostRecentReport);
console.log(accounting.allReports);
