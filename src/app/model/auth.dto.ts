export class Login {
  phone: string;
  password: string;

  constructor(phone: string, passwor: string) {
    this.phone = phone;
    this.password = passwor;
  }
}

export class Register {
  _id?: string;
  name: string;
  lastname: string;
  phone: string;
  mail: string;
  password: string;
  admin: boolean;

  constructor(nam: string, lasn: string, phon: string, mai: string, passwor: string, admi: boolean
  ) {
    this.name = nam;
    this.lastname = lasn;
    this.phone = phon;
    this.mail = mai;
    this.password = passwor;
    this.admin = admi
  }
}


export class Person {
  name: string;
  lastname: string;

  constructor(nam: string, lasn: string
  ) {
    this.name = nam;
    this.lastname = lasn;
  }
}


export class PersonUpte {
  _id?: string;
  name: string;
  lastname: string;
  phone: string;
  mail: string;

  constructor(_id: any, nam: string, lasn: string, phon: string, mai: string
  ) {
    this._id = _id;
    this.name = nam;
    this.lastname = lasn;
    this.phone = phon;
    this.mail = mai
  }
}


export class PassWord {
  _id?: string;
  password: string;
  oldpassword: string;

  constructor(_id: any, pass: string, conf: string
  ) {
    this._id = _id;
    this.password = pass;
    this.oldpassword = conf;
    
  }
}
