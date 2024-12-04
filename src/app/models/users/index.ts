export interface TUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string
}
export interface TUserResponse {
    users: TUser[],
    limit: number,
    skip: number,
    total: number
}