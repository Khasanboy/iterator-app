export class AppResponse {
    constructor(public activity: Activity, public activityUrl: string) {}
}

export enum Activity {
    xhr = 'xhr',
    redirect = 'redirect'
}
