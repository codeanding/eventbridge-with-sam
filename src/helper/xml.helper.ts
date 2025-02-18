import { parseStringPromise } from 'xml2js';

export class XMLHelper {
  static async parseXML(xml: string) {
    return parseStringPromise(xml);
  }
}
