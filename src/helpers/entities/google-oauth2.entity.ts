export class GoogleOauthCodeExchangeResponse {
  access_token: string;
  id_token: string;
  expires_in: string;
  token_type: string;
  scope: string;
  refresh_token: string;
}

export class GoogleUserInfoResponse {
  family_name: string;
  name: string;
  picture: string;
  locale: string;
  email: string;
  refresh_token: string;
  given_nam: string;
  verified_email: string;
}
