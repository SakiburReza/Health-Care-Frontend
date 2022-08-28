export class Person{
    id?:number;
    firstName?:string;
    lastName?:string;
    gender?:string;
    email?:string;
    mobileNo?:string;
    password?:string;
    dateOfBirth?: Date | null;
    role?:string;
    image?: File;
}

export class Patient{
    id?:number;
    address?:string;
    person?: Person;
    height?:number;
    weight?:number;
}
export class Doctor{
    id?:number;
    chamber?:string;
    bmdcNo?:string;
    nid?:string;
    speciality?:Speciality;
    person?: Person;
    experience?:number;
    fee?:number;
    degree?:string;
    visitingDay?:string;
    visitingTime?:string;

}
export class Speciality{
    id?:number;
    name?:string;
    description?:string | null;
}

export class _Rating{
    id?:number;
    ratingVal?:number | null;
    patient?:Patient;
    doctor?:Doctor;
}
export class Payment{
    id?:number;
    method?:string;
    amount?:number;
    acc_no?:string;
}
export class Appointment{
    id?:number;
    patient?:Patient;
    doctor?:Doctor;
    date?:Date=new Date();
    payment?:Payment;
    problem?:string;
    status?:string;
    commentFromDoctor?:string;
    dateGivenByDoctor?:Date | null;
    prescription?:Prescription
}
export class Prescription{
    id?:number;
    problem?:string;
    commnet?:string;

}
export class Medicine{
    id?:number;
    name?:string;
    weight?:number;
    expirydate?:Date |null;
}
export class Test{
    id?:number;
    name?:string;
    prerequisite?:string;
    description?:string;
}
export class Test_Prescription{
    id?:number;
    prescription?:Prescription;
    test?:Test;
    finding?:string;
}
export class MC_Prescription{
    id?:number;
    prescription?:Prescription;
    medicine?:Medicine;
    dose?:string;
    duration?:string;
}
export class _Notification{
    id?:number;
    receiver?:Person;
    type?:string;
    message?:string;
    status?:string;

}

export class TakerSpeciality
{
    id?:number;
    name?:string;
    description?:string | null;
}

export class Taker{
    id?:number;
    dc_code?:string;
    nid?:string;
    takerSpeciality?:TakerSpeciality;
    person?:Person;
    pathology_registration_no?:string;
}
export class DiagnosticCenter
{
    id?:number;
    name?:string;
    location?:string;
    isOfferOnsiteTest?:string;
    registrationNum?:string;
    person?:Person;
 
}



export class DCTestList {
    id?:number;
    dc?:DiagnosticCenter;
    test?:Test;
    isOnlineTestAvailable?:string;
    price?:number;
   
}

export class DC_Test {
    // [x: string]: any;
    id?:number;
    date?:Date=new Date();
    status?:string;
    // dc?:DiagnosticCenter;
    // test?:Test;
    dcTestList?:DCTestList;
    patient?:Patient;
    location?:string;
    report?:string;
    taker?:Taker;

}

// export class DCAdmin {

//     id?:number;
//     dc_code?:string;
//     nid?:string;
//     person?:Person;
//     dc?:DiagnosticCenter;
// }