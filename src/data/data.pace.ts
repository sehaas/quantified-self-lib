import {DataDuration} from './data.duration';

export class DataPace extends DataDuration {
  static className = 'DataPace';
  static type = 'Pace';
  static unit = 'm/km';

  getDisplayValue(): string{
    const d = this.getValue();
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);
    if (!m && !h) {
      return '00:' + ('0' + s).slice(-2);
    } else if (!h) {
      return ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
    } else {
      return ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
    }
  }

  getDisplayUnit(): string {
    return 'min/km';
  }
}
