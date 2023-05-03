export interface reservPhoneModel {
    game_code?: number;
    language?: string;
    inflow?: string | null;
    phone?: string;
    ipaddress?: string;
    device?: string | null;
    regist_date?: Date;
    invite_code?: string | null;
}

export interface reservEmailModel {
    game_code?: number;
    language?: string;
    inflow?: string | null;
    email?: string;
    ipaddress?: string;
    device?: string | null;
    regist_date?: Date;
    invite_code?: string | null;
}

export interface reservInviteModel {

}