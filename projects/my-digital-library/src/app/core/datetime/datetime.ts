import { ConsoleService } from '../console/console.service';
import * as moment from 'moment';

export class Datetime {
  static formatDate(param) {
    const data = param.data;
    const seconds = data.datePublished.seconds;
    // const date = new Date(seconds * 1000).toISOString().slice(0, 10);
    const a = moment.unix(seconds).format('YYYY-MM-DD');
    ConsoleService.log2('format second', seconds);
    ConsoleService.log2('format date', a);

    // ConsoleService.log2('format date', date);

    return a;
  }
}
