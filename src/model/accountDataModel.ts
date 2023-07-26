export interface IAccountDataModel {
    name: string;
    account: {
        agency: string;
        number: string;
    };
    card: {
        limit: number;
        number: string;
    }
}