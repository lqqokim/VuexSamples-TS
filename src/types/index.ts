export interface LicenseState {
    licenses: License[];
}

export interface UserState {
    users: string[];
}

export interface RootState {
    licenses: LicenseState,
    users: UserState
}

export interface License {
    id: number;
    email: string;
    licenseKey: string;
}