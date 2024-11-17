/* eslint-disable max-lines */
const submitLead = {
  title: 'registration payload',
  description: 'Defines the structure for HTTP POST request body',
  type: 'object',
  properties: {
    Subscriber_details: {
      type: 'array',
      description: 'subscribers details',
      items: {
        title: 'subscriber Details',
        type: 'object',
        properties: {
          SNo: {
            type: 'string',
            description: 'serial number',
          },
          Category: {
            type: 'string',
            description: 'category of user',
            enum: [ 'AL' ],
          },
          Resident_flag: {
            type: 'string',
            description: 'residence of user',
            enum: [ 'RI' ],
          },
          NRI_Flag: {
            type: 'string',
            description: 'non-resident indian',
          },
          PRAN: {
            type: 'string',
            description: 'pran of user',
          },
          Title: {
            type: 'string',
            description: 'title of user',
            enum: [ 'Shri', 'Smt', 'Kumari' ],
          },
          First_Name: {
            type: 'string',
            description: 'first name of user',
            minLength: 2,
          },
          Middle_Name: {
            type: 'string',
            description: 'middle name of user',
          },
          Last_Name: {
            type: 'string',
            description: 'last name of user',
          },
          Subscribers_Maiden_Name: {
            type: 'string',
            description: 'subscribers maiden name',
          },
          Date_of_Birth: {
            type: 'string',
            description: 'user date of birth',
          },
          Place_of_Birth: {
            type: 'string',
            description: 'districtName of birth',
          },
          Country_of_Birth: {
            type: 'string',
            description: 'stateName of birth',
            enum: [ 'IN' ],
          },
          Gender: {
            type: 'string',
            description: 'gender',
            enum: [ 'M', 'F', 'T' ],
          },
          Nationality: {
            type: 'string',
            description: 'nationality',
            enum: [ 'IN' ],
          },
          Name_to_be_Printed_on_PRAN_Card: {
            type: 'string',
            description: 'guardian name printed on pran card',
            enum: [ 'F', 'M' ],
          },
          Fathers_First_Name: {
            type: 'string',
            description: 'father first name',
          },
          Fathers_Middle_Name: {
            type: 'string',
            description: 'father middle name',
          },
          Fathers_Last_Name: {
            type: 'string',
            description: 'father last name',
          },
          Mothers_First_Name: {
            type: 'string',
            description: 'mother first name',
          },
          Mothers_Middle_Name: {
            type: 'string',
            description: 'mother middle name',
          },
          Mothers_Last_Name: {
            type: 'string',
            description: 'mother last name',
          },
          Marital_Status: {
            type: 'string',
            description: 'marital status',
            enum: [ 'M', 'U', 'W', 'D', 'O' ],
          },
          Spouse_First_Name: {
            type: 'string',
            description: 'spouse first name',
          },
          Spouse_Middle_Name: {
            type: 'string',
            description: 'spouse middle name',
          },
          Spouse_Last_Name: {
            type: 'string',
            description: 'spouse last name',
          },
          Mobile_Number: {
            type: 'string',
            description: 'mobile number of user',
            pattern: '^[9]{1}[1]{1}[1-9]{1}[0-9]{9}',
          },
          Email_ID: {
            type: 'string',
            description: 'email id of user',
            format: 'email',
          },
          PAN: {
            type: 'string',
            description: 'pan of user',
            pattern: '^[A-Z]{5}[0-9]{4}[A-Z]{1}',
          },
          ExistingSubscriber: {
            type: 'string',
            description: 'existing subscriber',
          },
          ExistingClientType: {
            type: 'string',
            description: 'existing client type',
          },
          ExistingClientCode: {
            type: 'string',
            description: 'existing client code',
          },
          ProofOfIdentity: {
            type: 'string',
            description: 'proof of identity',
          },
          ProofOfIdentityNumber: {
            type: 'string',
            description: 'proof of identity number',
          },
          Aadhaar: {
            type: 'string',
            description: 'aadhar number',
          },
          Passport_Number_Or_OCI_Card_Number: {
            type: 'string',
            description: 'passport number',
          },
          Passport_Expiry_date: {
            type: 'string',
            description: 'passport expiry date',
          },
          Voter_ID: {
            type: 'string',
            description: 'voter id number',
          },
          National_Population_Register: {
            type: 'string',
            description: 'national population register',
          },
          Occupation_Details: {
            type: 'string',
            description: 'occuptation details',
          },
          Occupation_Others_Details: {
            type: 'string',
            description: 'occupation others details',
          },
          Politically_exposed_or_not: {
            type: 'string',
            description: 'politically exposed or not',
          },
          Income_Range: {
            type: 'string',
            description: 'income range',
          },
          Educational_Qualifications: {
            type: 'string',
            description: 'educational qualifications',
          },
          PRAN_Print_Hindi: {
            type: 'string',
            description: 'pran print in hindi or not',
          },
          Combined_form_flag: {
            type: 'string',
            description: 'combined form flag',
            enum: [ 'N' ],
          },
          Pregenerated_Pran_flag: {
            type: 'string',
            description: 'pregenerated pran flag',
          },
          T1RegisteredEntity: {
            type: 'string',
            description: 'tier-1 registered entity',
          },
          T2RegisteredEntity: {
            type: 'string',
            description: 'tier-2 registered entity',
          },
          T1Scheme_Pref: {
            type: 'string',
            description: 'tier-1 scheme preference',
          },
          T2Scheme_Pref: {
            type: 'string',
            description: 'tier-2 scheme preference',
          },
          Communication_Address: {
            type: 'string',
            description: 'communication address',
          },
          USPerson: {
            type: 'string',
            description: 'us person',
          },
          Date_of_joining: {
            type: 'string',
            description: 'date of joining',
          },
          Date_of_Retirement: {
            type: 'string',
            description: 'date of retirements',
          },
          CHO_Reg_No: {
            type: 'string',
            description: 'cho reg no',
          },
          CBO_Reg_No: {
            type: 'string',
            description: 'cbo reg no',
          },
          Employee_Code: {
            type: 'string',
            description: 'employee code',
          },
          PPAN: {
            type: 'string',
            description: 'pran',
          },
          Group_of_employee: {
            type: 'string',
            description: 'group of employee',
          },
          Office: {
            type: 'string',
            description: 'office',
          },
          Department: {
            type: 'string',
            description: 'department',
          },
          Ministry: {
            type: 'string',
            description: 'ministry',
          },
          DDO_RegNo: {
            type: 'string',
            description: 'ddo reg number',
          },
          DTO_PAO_CDDO_DTA_PrAO_RegNo: {
            type: 'string',
            description: 'dto pao cddo dta prao reg number',
          },
          Basic_Pay: {
            type: 'string',
            description: 'basic pay',
          },
          Pay_Scale: {
            type: 'string',
            description: 'pay scale',
          },
          ContributionDetails: {
            type: 'string',
            description: 'contribution details of user',
          },
          Reg_ReceiptNumber: {
            type: 'string',
            description: 'reg receipt number',
          },
          Bank_Verification: {
            type: 'string',
            description: 'bank verification of user',
          },
          E_Sign_Flag: {
            type: 'string',
            description: 'e sign in flag',
          },
          PML_Declaration_By_Subscriber: {
            type: 'string',
            description: 'pml declaration by subscribers',
          },
          Retirement_Advisor_Reg_No: {
            type: 'string',
            description: 'retirement advisor regestration number',
          },
          Referral_Code: {
            type: 'string',
            description: 'referral code',
          },
          PRAN_Dispatch_Mode: {
            type: 'string',
            description: 'pran dispatch mode',
          },
          CKYC_Number: {
            type: 'string',
            description: 'ckyc number',
          },
          T2_BankDetails_SameAs_T1: {
            type: 'string',
            description: 'tier-2 bankdetails same as tier-1',
          },
          T2_NomineeDetails_SameAs_T1: {
            type: 'string',
            description: 'tier-2 nominee details same as tier-1',
          },
          How_Did_You_Hear_About_NPS: {
            type: 'string',
            description: 'how did you heat about nps ?',
          },
          Parameter_2: {
            type: 'string',
          },
          Parameter_3: {
            type: 'string',
          },
          Parameter_4: {
            type: 'string',
          },
          Parameter_5: {
            type: 'string',
          },
          Parameter_6: {
            type: 'string',
          },
          Parameter_7: {
            type: 'string',
          },
        },
      },
    },
    Address_Details: {
      type: 'array',
      description: 'address details',
      items: {
        type: 'object',
        properties: {
          SNo: {
            type: 'string',
            description: 'serial number',
          },
          Address: {
            type: 'string',
            description: 'address',
          },
          Address_Type: {
            type: 'string',
            description: 'address type',
          },
          Address_Line1: {
            type: 'string',
            description: 'address line 1',
          },
          Address_Line2: {
            type: 'string',
            description: 'address line 2',
          },
          Road_Street: {
            type: 'string',
            description: 'road street',
          },
          Area_Locality_Taluka: {
            type: 'string',
            description: 'area locality taluka',
          },
          Landmark: {
            type: 'string',
            description: 'landmark',
          },
          ZIP_PIN_Code: {
            type: 'string',
            description: 'zip-pincode',
          },
          City_Town_District: {
            type: 'string',
            description: 'districtName',
          },
          State_Province: {
            type: 'string',
            description: 'state',
          },
          Country: {
            type: 'string',
            description: 'stateName',
          },
          Landline_With_STD_Code: {
            type: 'string',
            description: 'landline with std code',
          },
          Address_Proof: {
            type: 'string',
            description: 'address proof',
          },
          Document_Proof_ID: {
            type: 'string',
            description: 'document proof id',
          },
        },
      },
    },
    Bank_Details: {
      type: 'array',
      description: 'bank details',
      items: {
        type: 'object',
        properties: {
          SNo: {
            type: 'string',
            description: 'serial number',
          },
          Account_Type: {
            type: 'string',
            description: 'account type',
          },
          Bank_Account_Type: {
            type: 'string',
            description: 'bank account type',
          },
          Bank_Account_Number: {
            type: 'string',
            description: 'bank account number',
          },
          Bank_IFS_Code: {
            type: 'string',
            description: 'bank ifsc code',
          },
          Bank_Name: {
            type: 'string',
            description: 'bank name',
          },
          Branch_Address: {
            type: 'string',
            description: 'branch address',
          },
          Pin_Code: {
            type: 'string',
            description: 'pin code',
          },
          City_Town_District: {
            type: 'string',
            description: 'districtName',
          },
          State_UT: {
            type: 'string',
            description: 'state',
          },
          Country: {
            type: 'string',
            description: 'stateName',
          },
          Bank_MICR_Code: {
            type: 'string',
            description: 'bank micr code',
          },
          Bank_A_C_Linked_to_Aadhaar: {
            type: 'string',
            description: 'bank account linked to aadhar',
          },
          NRI_OCI_Contribution: {
            type: 'string',
            description: 'nri oci countribution',
          },
          Repatriation_Otion: {
            type: 'string',
            description: 'repatriation otion',
          },
        },
      },
    },
    Scheme_Preference_Details: {
      type: 'array',
      description: 'scheme preference details',
      items: {
        type: 'object',
        properties: {
          SNo: {
            type: 'string',
            description: 'serial number',
          },
          Account_Type: {
            type: 'string',
            description: 'account type',
          },
          PFM_Code: {
            type: 'string',
            description: 'pfm code',
          },
          Scheme_Code: {
            type: 'string',
            description: 'scheme code',
          },
          Percentage: {
            type: 'string',
            description: 'percentage',
          },
        },
      },
    },
    Nominee_Details: {
      type: 'array',
      description: 'nominee details',
      items: {
        type: 'object',
        properties: {
          SNo: {
            type: 'string',
            description: 'serial number',
          },
          Account_type: {
            type: 'string',
            description: 'account type',
          },
          Nominee: {
            type: 'string',
            description: 'nominee',
          },
          First_Name: {
            type: 'string',
            description: 'first name',
            minLength: 2,
          },
          Middle_Name: {
            type: 'string',
            description: 'middle name',
          },
          Last_Name: {
            type: 'string',
            description: 'last name',
          },
          Major_Minor: {
            type: 'string',
            description: 'major or minor based on age',
          },
          Date_of_Birth: {
            type: 'string',
            description: 'date of birth',
          },
          Relationship: {
            type: 'string',
            description: 'relationship',
            enum: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ],
          },
          Percentage_Share: {
            type: 'string',
            description: 'percentage share',
          },
          Guardian_First_Name: {
            type: 'string',
            description: 'guardian first name',
          },
          Guardian_Middle_Name: {
            type: 'string',
            description: 'guardian middle name',
          },
          Guardian_Last_Name: {
            type: 'string',
            description: 'guardian last name',
          },
          Flat_Room_Door_Block_No: {
            type: 'string',
            description: 'flat room door or block number',
          },
          Premises_Village: {
            type: 'string',
            description: 'premises village',
          },
          Area_Locality_Taluka: {
            type: 'string',
            description: 'area locality taluka',
          },
          Pin_Code: {
            type: 'string',
            description: 'pin code',
          },
          City: {
            type: 'string',
            description: 'districtName',
          },
          State_Union_Teritory: {
            type: 'string',
            description: 'state',
          },
          Country: {
            type: 'string',
            description: 'stateName',
          },
          Nominee_Age: {
            type: 'number',
            description: 'nominee age',
          },
          Relationship_Details: {
            type: 'string',
            description: 'relationship details',
          },
        },
      },
    },
    FATCA_Details: {
      type: 'array',
      description: 'Foreign Account Tax Compliance Act details',
      items: {
        type: 'object',
        properties: {
          SNo: {
            type: 'string',
            description: 'serial number',
          },
          Tindetails: {
            type: 'string',
            description: 'tax identification number details',
          },
          Tax_resident_of_India: {
            type: 'string',
            description: 'tax resident of india',
            enum: [ 'Y' ],
          },
          Country_of_Tax_Residency: {
            type: 'string',
            description: 'stateName of tax residency',
          },
          Address_Tax_Residence: {
            type: 'string',
            description: 'address of tax residency',
          },
          TIN: {
            type: 'string',
            description: 'tax identification number',
          },
          TIN_Country: {
            type: 'string',
            description: 'tin stateName',
          },
          Validity: {
            type: 'string',
            description: 'validity',
          },
        },
      },
    },
    Documents: {
      type: 'array',
      description: 'documents',
      items: {
        type: 'object',
        properties: {
          SNo: {
            type: 'string',
            description: 'serial number',
          },
          Document_Type: {
            type: 'string',
            description: 'document type',
          },
          Document_Name: {
            type: 'string',
            description: 'document name',
          },
          Image: {
            type: 'string',
            description: 'image',
          },
          KYC_verified_Flag: {
            type: 'string',
            description: 'kyc verified flag',
          },
        },
      },
    },
    Contribution_Details: {
      type: 'array',
      description: 'contribution details',
      items: {
        type: 'object',
        properties: {
          SNO: {
            type: 'string',
            description: 'serial number',
          },
          Pran: {
            type: 'string',
            description: 'pran',
          },
          ContributionType: {
            type: 'string',
            description: 'contribution type',
          },
          T1CNTamount: {
            type: 'string',
            description: 'tier-1 cnt amount',
          },
          T1SGST: {
            type: 'string',
            description: 'tier-1 sgst',
          },
          T1CGST: {
            type: 'string',
            description: 'tier-1 cgst',
          },
          T1UTGST: {
            type: 'string',
            description: 'tier-1 utgst',
          },
          T1IGST: {
            type: 'string',
            description: 'tier-1 gst',
          },
          T1ServiceCharge: {
            type: 'string',
            description: 'tier-1 service charge',
          },
          T2CNTamount: {
            type: 'string',
            description: 'tier-2 cnt amount',
          },
          T2SGST: {
            type: 'string',
            description: 'tier-2 sgst',
          },
          T2CGST: {
            type: 'string',
            description: 'tier-2 cgst',
          },
          T2UTGST: {
            type: 'string',
            description: 'tier-2 utgst',
          },
          T2IGST: {
            type: 'string',
            description: 'tier-2 gst',
          },
          T2ServiceCharge: {
            type: 'string',
            description: 'tier-2 service charge',
          },
          GatewayCharges: {
            type: 'string',
            description: 'gateway charges',
          },
          RegistrationCharges: {
            type: 'string',
            description: 'registration charges',
          },
          AccounType: {
            type: 'string',
            description: 'account type',
          },
          TotalAmount: {
            type: 'string',
            description: 'total amount',
          },
          Transactionid: {
            type: 'string',
            description: 'transaction id',
          },
          ReceiptNumber: {
            type: 'string',
            description: 'receipt number',
          },
        },
      },
    },
  },
  required: [ 'Subscriber_details', 'Address_Details', 'FATCA_Details',
    'Bank_Details', 'Contribution_Details', 'Scheme_Preference_Details', 'Nominee_Details', 'Documents' ],
  errorMessage: {
    required: {
      Subscriber_details: 'Parameter: Subscriber_Details is required in the body.',
      Address_Details: 'Parameter: Address_Details is required in the body.',
      FATCA_Details: 'Parameter: FATCA_Details is required in the body.',
      Bank_Details: 'Parameter: Bank_Details is required in the body.',
      Contribution_Details: 'Parameter: Contribution_Details is required in the body',
      Scheme_Preference_Details: 'Parameter: Scheme_Preference_Details is required in the body',
      Nominee_Details: 'Parameter: Nominee is required in the body.',
      Documents: 'Parameter: Documents is required in the body.',
    },
    properties: {
      Subscriber_details: 'Parameter: Subscriber_Details should be a valid objects.',
      Address_Details: 'Parameter: Address_Details should be a valid objects.',
      FATCA_Details: 'Parameter: FATCA_Details should be a valid objects.',
      Bank_Details: 'Parameter: Bank_Details should be a valid objects.',
      Contribution_Details: 'Parameter: Contribution_Details should be a valid objects.',
      Scheme_Preference_Details: 'Parameter: Scheme_Preference_Details should be a valid objects.',
      Nominee_Details: 'Parameter: Nominee should be a valid array of objects.',
      Documents: 'Parameter: Documents should be a valid array of object',
    },
  },
  additionalProperties: true,
};

module.exports = submitLead;
