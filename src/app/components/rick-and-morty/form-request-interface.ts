export interface IRequestData {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  dimension?: string;
}

export interface INameUrl {
  name?: string;
  url?: string;
}

export interface IInfo {
  pages?: number;
  next?: string;
  prev?: string;
}

export interface ICharacterData {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  location?: INameUrl;
  image?: string;
  episode?: string[];
}

export interface ICharacterResponse {
  info?: IInfo;
  results?: ICharacterData[];
}

export interface ILocationData {
  name?: string;
  type?: string;
  dimension?: string;
}

export interface ILocationResponse {
  info?: IInfo;
  result?: ILocationData[];
}

export interface IEpisodeData {
  name?: string;
}

export interface IExtendedCharData extends ICharacterData {
  firstSeenInEp?: string;
}
