abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    this.name = name;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(): void;

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

  describe(): void {
    console.log('IT Department - ID: ' + this.id);
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

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }
}

const accounting = new AccountingDepartment('ad1', []);
accounting.mostRecentReport = 'Year and report';
accounting.addReport('Something went wrong...');
accounting.addEmployee('Max');
accounting.addEmployee('Tomas');

const employee1 = Department.createEmployee('Max');
const fiscalYear = Department.fiscalYear;

accounting.describe();
