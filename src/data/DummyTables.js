export const dataBank = [
  {
    no: 1,
    bankName: 'Bank AAA',
    totalDeposito: '10',
    totalOutstanding: '100.000.000.000',
  },
  {
    no: 2,
    bankName: 'Bank BBB',
    totalDeposito: '10',
    totalOutstanding: '100.000.000.000',
  },
  {
    no: 3,
    bankName: 'Bank XXX',
    totalDeposito: '10',
    totalOutstanding: '100.000.000.000',
  },
]


export const dataOfficer = [
  {
    id: 1,
    fullname: 'Alfa Rumero',
    email: 'alfa@gmail.com',
    officerType: 'Officer',
  },
  {
    id: 2,
    fullname: 'Beta Simorangkir',
    email: 'beta@gmail.com',
    officerType: 'Officer',
  },
  {
    id: 3,
    fullname: 'Charlie',
    email: 'charlie@gmail.com',
    officerType: 'Admin',
  },
]

export const dataDeposito = [
  {
    no: 1,
    pathneringBprName: 'Pathnering 1',
    depositoName: 'Deposito A',
    depositoCode: '0001',
    rate: '10',
    tenure: '3',
    minAmount: '100.000',
    maxAmount: '10.000.000',
    createAt: '21.07.2022',
    status: 'Active',
  },
  {
    no: 2,
    pathneringBprName: 'Pathnering 2',
    depositoName: 'Deposito B',
    depositoCode: '0002',
    rate: '10',
    tenure: '9',
    minAmount: '100.000',
    maxAmount: '10.000.000',
    createAt: '21.07.2022',
    status: 'Inactive',
  },
  {
    no: 3,
    pathneringBprName: 'Pathnering 3',
    depositoName: 'Deposito C',
    depositoCode: '0003',
    rate: '10',
    tenure: '12',
    minAmount: '10.000.000',
    maxAmount: '100.000.000',
    createAt: '21.07.2022',
    status: 'Sold Out',
  },
]

export const dataDepositoEditRequest = [
  {
    no: 1,
    pathneringBprName: 'Pathnering 1',
    depositoName: 'Deposito A',
    depositoCode: '0001',
  },
  {
    no: 2,
    pathneringBprName: 'Pathnering 2',
    depositoName: 'Deposito B',
    depositoCode: '0002',
  },
  {
    no: 3,
    pathneringBprName: 'Pathnering 3',
    depositoName: 'Deposito C',
    depositoCode: '0003',
  },
]

export const dataTransactionList = [
  {
    id: 1,
    no: 1,
    fundingCode: '0000001',
    username: 'Alfa',
    email: 'Alfa@gmail.com',
    fundingAmount: 100000,
    depositoCode: 'Deposito1',
    createAt: '21.07.2022',
    statusRaw: 'Requested',
  },
  {
    id: 2,
    no: 2,
    fundingCode: '0000002',
    username: 'Beta',
    email: 'Beta@gmail.com',
    fundingAmount: 1000000,
    depositoCode: 'Deposito1',
    createAt: '21.07.2022',
    statusRaw: 'Processed',
  },
  {
    id: 3,
    no: 3,
    fundingCode: '0000003',
    username: 'Charlie',
    email: 'Charlie@gmail.com',
    fundingAmount: 1000000,
    depositoCode: 'Deposito1',
    createAt: '21.07.2022',
    statusRaw: 'Cancelled',
  },
  {
    id: 4,
    no: 4,
    fundingCode: '0000004',
    username: 'Delta',
    email: 'Delta@gmail.com',
    fundingAmount: 1000000,
    depositoCode: 'Deposito1',
    createAt: '21.07.2022',
    statusRaw: 'Billyet Signing',
  },
  {
    id: 5,
    no: 5,
    fundingCode: '0000005',
    username: 'Echo',
    email: 'Echo@gmail.com',
    fundingAmount: 100000,
    depositoCode: 'Deposito1',
    createAt: '21.07.2022',
    statusRaw: 'On Going',
  },
  {
    id: 6,
    no: 6,
    fundingCode: '0000006',
    username: 'Foxtrot',
    email: 'Foxtrot@gmail.com',
    fundingAmount: 100000,
    depositoCode: 'Deposito1',
    createAt: '21.07.2022',
    statusRaw: 'Paid Off',
  },
  {
    id: 7,
    no: 7,
    fundingCode: '0000007',
    username: 'Golf',
    email: 'Golf@gmail.com',
    fundingAmount: 100000,
    depositoCode: 'Deposito1',
    createAt: '21.07.2022',
    statusRaw: 'Early Paid Off',
  },
  {
    id: 8,
    no: 8,
    fundingCode: '0000008',
    username: 'Hotel',
    email: 'Hotel@gmail.com',
    fundingAmount: 100000,
    depositoCode: 'Deposito1',
    createAt: '21.07.2022',
    statusRaw: 'Nearing Due',
  }
]

export const dataBankOfficer = [
  {
    no: 1,
    bankName: 'Bank 1',
    officerName: 'Bonaventura',
    email: 'bodaventura@gmail.com',
    role: 'Bank Admin',
    status: 'Active',
  },
  {
    no: 2,
    bankName: 'Bank 2',
    officerName: 'Henry Manampiring',
    email: 'henry@gmail.com',
    role: 'Bank Admin',
    status: 'Active',
  },
  {
    no: 3,
    bankName: 'Bank 3',
    officerName: 'Martin Adams',
    email: 'martin@gmail.com',
    role: 'Bank Officer',
    status: 'Active',
  },
  {
    no: 4,
    bankName: 'Bank 1',
    officerName: 'Fathan Alif',
    email: 'fathan@gmail.com',
    role: 'Bank Officer',
    status: 'Inactive',
  },
  {
    no: 5,
    bankName: 'Bank 1',
    officerName: 'Wahyu Firmansyah',
    email: 'wahyu@gmail.com',
    role: 'Bank Officer',
    status: 'Inactive',
  },
]

export const dataLender = [
  {
    no: 1,
    lenderName: 'Bonaventura Candra',
    lenderUserCode: '001',
    lenderEmail: 'bodaventura@gmail.com',
    lenderTotalOutstanding: '10.000.000',
    status: 'Active',
  },
  {
    no: 2,
    lenderName: 'Henry Manampiring',
    lenderUserCode: '001',
    lenderEmail: 'hendrymanampiring@gmail.com',
    lenderTotalOutstanding: '10.000.000',
    status: 'Active',
  },
  {
    no: 3,
    lenderName: 'Martin Adams',
    lenderUserCode: '002',
    lenderEmail: 'martin@gmail.com',
    lenderTotalOutstanding: '10.000.000',
    status: 'Active',
  },
]


export const dataLogHistory = [
  {
    no: 1,
    date: '29/06/2022 23:00:00',
    userEmail: 'alfa@gmail.com',
    changeData: 'Deposito Request Data',
  },
  {
    no: 2,
    date: '29/06/2022 23:00:00',
    userEmail: 'beta@gmail.com',
    changeData: 'Officer Data',
  },
]

export const dataLogHistoryDetail = [
  {
    no: 1,
    oldData: 'Tenure: 4%',
    newData: 'Tenure: 6%',
  },
]

export const dataRequirementData = [
  {
    id: 1,
    requirementName: 'Selfie Foto',
    requirementType: 'Picture',
    status: 'Active',
  },
  {
    id: 2,
    requirementName: 'Selfie with KTP KTP',
    requirementType: 'Picture',
    status: 'Active',
  },
  {
    id: 3,
    requirementName: 'Pathnering 3',
    requirementType: 'Picture',
    status: 'Inactive',
  },
]

export const dataBulkSettlement = [
  {
    id: 1,
    transactionCode: '001',
    bankName: 'Bank 1',
    userName: 'Bonaventure',
    email: 'Bonaventure@gmail.com',
    amount: 10000000,
    transactionDate: '22-04-2022',
  },
  {
    id: 2,
    transactionCode: '002',
    bankName: 'Bank 2',
    userName: 'Panji',
    email: 'Panji@gmail.com',
    amount: 20000000,
    transactionDate: '22-04-2022',
  },
  {
    id: 3,
    transactionCode: '003',
    bankName: 'Bank 3',
    userName: 'Briyan',
    email: 'Briyan@gmail.com',
    amount: 30000000,
    transactionDate: '22-04-2022',
  },
]