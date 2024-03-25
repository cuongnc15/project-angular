export class viewAllFile {
  page: number = 1;
  pageSize: number = 10;
  name: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
}

export class viewFileRaw {
  page: number = 1;
  pageSize: number = 10;
  status: number | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  refId: string | undefined;
}

export interface IViewAllFileRes {
  name?: string;
  fileName?: string;
  status?: number;
  currentLine?: number;
  processingLine?: number;
  createdDate?: string;
  id?: string;
}

export interface IViewFileRawRes {
  refId?: string;
  hsCode?: string;
  status?: number;
  createdDate?: string;
  id?: string;
  description?: string;
  size?: string;
  type?: string;
  label?: string;
  Year?: string;
  Month?: string;
  CearanceDate?: string;
  TaxCode?: string;
  CompanyImport?: string;
  CompanyAddressImport?: string;
  CompanyExport?: string;
  CompanyAddressExport?: string;
  ImportTax?: string;
  Original?: string;
  Unit?: string;
  Quantity?: string;
  OriginalCurrencyUnit?: string;
  PriceUSD?: string;
  USDValue?: string;
  USDRate?: string;
  CoinCode?: string;
  PriceConditions?: string;
  PaymentMethods?: string;
  CustomsBranch?: string;
  TypeName?: string;
  CountryExport?: string;
  CountryImport?: string;
  QueueLocation?: string;
  UnloadingLocation?: string;
  NumberDeclarations?: string;
}

export interface IUpdateFileRaw {
  id: string;
  status: string;
  rawData: IUpdateFileRawItem
}
export interface IUpdateFileRawItem {
  size?: string;
  label?: string;
  sku?: string;
  type?: string;
}
