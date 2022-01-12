export class ServerSideError extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);

    this.status = status;
  }
}

export class ServerSideErrorRedirect extends ServerSideError {
  public location: string;

  constructor(location: string, status: number, message: string) {
    super(status, message);

    this.location = location;
  }
}
