import {
  ClientType,
  InvoiceSettingType,
  InvoiceType,
} from '@crema/types/models/invoice';

export const invoiceList: InvoiceType[] = [
  {
    id: 1,
    clientId: 'ecovacs',
    clientName: 'EcoVacs Tech Pvt Ltd',
    inum: 'MDAS001',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    folderValue: 120,
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
  {
    id: 2,
    clientId: 'ozmo',
    clientName: 'Ozmo Inc',
    inum: 'MDAS002',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    folderValue: 120,
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
  {
    id: 3,
    clientId: 'pay',
    clientName: 'Paytm',
    inum: 'MDAS003',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    folderValue: 120,
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
  {
    id: 4,
    clientId: 'ecovacs',
    clientName: 'EcoVacs Tech Pvt Ltd',
    inum: 'MDAS004',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    folderValue: 121,
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
  {
    id: 5,
    clientId: 'ozmo',
    clientName: 'Ozmo Inc',
    inum: 'MDAS005',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    folderValue: 121,
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
  {
    id: 6,
    clientId: 'pay',
    clientName: 'Paytm',
    inum: 'MDAS006',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    folderValue: 121,
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
  {
    id: 7,
    clientId: 'ecovacs',
    clientName: 'EcoVacs Tech Pvt Ltd',
    inum: 'MDAS007',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    folderValue: 122,
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
  {
    id: 8,
    clientId: 'ozmo',
    clientName: 'Ozmo Inc',
    inum: 'MDAS008',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    folderValue: 122,
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
  {
    id: 9,
    clientId: 'pay',
    clientName: 'Paytm',
    inum: 'MDAS009',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    folderValue: 122,
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
  {
    id: 10,
    clientId: 'pay',
    clientName: 'Paytm',
    inum: 'MDAS0010',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    folderValue: 123,
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
  {
    id: 11,
    clientId: 'ecovacs',
    clientName: 'EcoVacs Tech Pvt Ltd',
    inum: 'MDAS0011',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    folderValue: 123,
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
  {
    id: 12,
    clientId: 'ozmo',
    clientName: 'Ozmo Inc',
    inum: 'MDAS0012',
    idt: '24 Nov 2022',
    dueDate: '24 Nov 2022',
    amount: 100,
    tax: 12,
    taxType: 'vat',
    introductionText: 'New Invoice Start',
    conclusionText: 'New Invoice End',
    folderValue: 123,
    items: [
      {
        id: 1,
        name: 'Task Name',
        duration: {
          from: '24 Nov 2022',
          to: '24 Nov 2022',
        },
        quantity: {
          type: 'fixed',
          value: 1,
        },
        unitPrice: 100,
        total: 100,
      },
    ],
  },
];

export const clientList: ClientType[] = [
  {
    id: 'ecovacs',
    name: 'EcoVacs Tech Pvt Ltd',
    firstName: 'Suresh',
    lastName: 'Singh',
    mail: 'suresh.singh@gmail.com',
    steetName: '',
    zipCode: '123132',
    city: 'Bhiwandi',
    state: 'Maharashtra',
    country: 'India',
    vatId: 'IDSIUAHD93E923UIU',
    taxId: 'HBDSYH3872E',
    phone: '+91 1234567890',
    logo: '/assets/images/logo.png',
  },
  {
    id: 'ozmo',
    name: 'Ozmo Inc',
    firstName: 'George',
    lastName: 'Admin',
    mail: 'george@ozmo.co',
    steetName: '5th Avenue',
    zipCode: '123132',
    city: '',
    state: 'New York',
    country: 'US',
    vatId: 'IDSIUAHD93E923UIU',
    taxId: 'HBSDYH3872E',
    link: 'ozmo.co',
    logo: '/assets/images/logo.png',
  },
  {
    id: 'inno',
    name: 'InnovateX',
    firstName: 'Smith',
    lastName: 'Admin',
    mail: 'info@innovatexcorp.com',
    steetName: '',
    zipCode: '123132',
    city: 'Bikaner',
    state: 'Rajasthan',
    country: 'India',
    vatId: 'IDSIUAHD93E923UIU',
    taxId: 'HBSDYH3872E',
    link: 'innovatexcorp',
    logo: '/assets/images/logo.png',
  },
  {
    id: 'pay',
    name: 'Paytm',
    firstName: 'Paytm',
    lastName: 'Admin',
    mail: 'support@paytm.com',
    steetName: '',
    zipCode: '123132',
    city: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    vatId: 'IDSIUAHD93E923UIU',
    taxId: 'HBSDYH3872E',
    link: 'paytm.com',
    logo: '/assets/images/logo.png',
  },
];

export const invoiceSettings: InvoiceSettingType = {
  general: {
    accountType: 'Agency',
    agencyName: 'EcoVacs Tech Pvt Ltd.',
    language: 'English',
    dateFormat: 'DD/MM/YYYY',
    decimalSeparator: 'Decimal Point',
    currency: 'USD',
    street: 'St. Street 34',
    zipCode: '827102',
    city: 'NYC',
    country: 'New York',
    state: 'New York',
    phoneNumber: '+91 9372371278',
    alternateNumber: '+91 9372371278',
  },
  accounting: {
    accountHolder: 'EcoVacs Tech  Pvt.  Ltd',
    bankName: 'Canara Bank',
    countryOfBank: 'India',
    accountNumber: '312718521635726626',
    swiftBic: 'CNRBINBBXXX',
    taxId: 'SAK31234JK21',
    vatId: 'KH239J88JJ22UI',
    ifsc: 'CNRB0000540',
  },
  invoicing: {
    language: 'English',
    dateFormat: 'DD/MM/YYYY',
    currency: 'USD',
    email: 'abc@email.com',
    decimalSeparator: 'Decimal Point',
    clientName: 'Client & Recipient Name',
    introductionText: 'Not Set',
    taxType: 'GST',
    taxValue: '0.00%',
    concludingText: 'Not Set',
    paymentDeadline: '30 days',
    logo: '/assets/images/logo.png',
  },
};
