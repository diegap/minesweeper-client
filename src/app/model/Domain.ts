
export class User {
    userName: string;

  constructor(values: any = {}) {
    Object.assign(this, values);
  }
}

export class Board {
    rows: number;
    cols: number;
    mines: number;
    user: User

    constructor(values: any = {}) {
        Object.assign(this, values);
    }
}

export class Col {
    x: string;
    y: string;
    vale: string

    constructor(values: any = {}) {
        Object.assign(this, values);
    }
}

export class Row {
    cols: [Col]

    constructor(values: any = {}) {
        Object.assign(this, values);
    }
}

export class ViewBoard {
    boardId: string;
    rows: [Row];
    status: string;
    elapsedTimeInSeconds: number

    constructor(values: any = {}) {
        Object.assign(this, values);
    }
}

export class BoardDraft {
    rows: number;
    cols: number;
    mines: number;
    user: User

    constructor(values: any = {}) {
        Object.assign(this, values);
    }
}

