import { AdditionalFieldsEnum } from "../../store/mainReducer";

export interface EmployeeProps 
{
    formState: boolean,
    handleClose: Function
}

export interface Employee
{
    countryOfWork?: number,
    firstName?: string,
    lastName?: string,
    dateOfBirth?: Date,
    holidayAllowance?: number,

    //extra fields
    maritalStatus?: number,
    socialInsuranceNumber?: string,
    numberOfChildren?: number,
    workingHours?: number
}

export interface AdditionalFieldsProps {
    setFieldValue: Function,
    countryOfWork: number | undefined
}

export interface FieldArray
{
    id: number,
    name: string,
    value: JSX.Element
}

export interface Rule
{
    countryid: number,
    value: AdditionalFieldsEnum[]
}

export interface Country
{
    id: number,
    label: string
}

export interface MaritalStatus
{
    id: number,
    label: string
}
