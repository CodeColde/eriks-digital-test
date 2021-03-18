export interface IProduct extends Record<string, any> {
  Toepassing: string;
  salePrice: number;
  manufacturerName: string;
  Hardheid: number;
  grossPrice: number;
  BUP_UOM: string;
  Artikelnummer: string;
  stepQuantity: number;
  BUP_Value: string;
  badges: string;
  uom: string;
  Kleur: string;
  productImage: string;
  Temperatuurgebied: string;
  BUP_Conversion: string;
  minQuantity: number;
  manufacturerImage: string;
  name: string;
  Materiaal: string;
  sku: string;
  Snoerdikte: number;
  "Inwendige diameter": number;
  "Maat volgens AS568": number;
  listPrice: number;
  channel: string;
  display: boolean;
  atp: {};
}

export interface IApiReturn {
  products: Array<IProduct>;
}

export default IApiReturn;