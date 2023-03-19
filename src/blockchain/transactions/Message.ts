import { Account } from "../wallets/Account";
import { Action } from "./actions/Action";

export class Message {
    _source: Account
    _destination: Account
    _value: bigint
    _op: string
    _comment?: string
    _bounced: boolean
    _action: Action

    /* TODO: 
    action: {
        type: 'jetton:internal_transfer',
        query_id: '0',
        amount: '4332000',
        from: 'EQClQvHmqPaSini7ztSApvlKxfrhq3J3jXA10in6je4w0pN2',
        response_address: 'EQClQvHmqPaSini7ztSApvlKxfrhq3J3jXA10in6je4w0pN2',
        forward_ton_amount: '1'
    },
    */
    //action: Object 
    constructor(source: Account, destination: Account, value: bigint, op: string, bounced: boolean, action?: Action, comment?: string)
    {
        this._source = source;
        this._destination = destination;
        this._value = value;
        this._op = op;
        this._comment = comment;
        this._bounced = bounced;
        this._action = action;
    }

    public get source() {
        return this._source;
    }

    public get destination() {
        return this._destination;
    }

    public get value() {
        return this._value;
    }

    public get op() {
        return this._op;
    }

    public get comment() {
        return this._comment;
    }

    public get bounced() {
        return this._bounced;
    }
}