import { ConsoleService } from '../console/console.service';

export class Datetime {

  static formatDate(param) {
    const data = param.data;
    const seconds = data.datePublished.seconds;
    const date = new Date(seconds * 1000).toISOString().slice(0, 10);
    ConsoleService.log2('format second', seconds);
    ConsoleService.log2('format date', date);

    return date;
  }
}
