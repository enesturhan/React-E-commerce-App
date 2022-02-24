import { BaseHttpService } from "./base.httpservice";
import { TokenService } from "./token.service";

export const AuthService = {};

AuthService.isAuthenticated = () => {
  return localStorage.getItem("access_token") ? true : false;
};

// Kullanıcının böyle bir rolü var mı yok mu kontrolü yaptık
AuthService.IsInRole = (roleNames) => {
  const accessToken = localStorage.getItem("access_token");

  console.log("roleNames", roleNames);

  // sample roles ['admin','manager']
  // accesstokendan role bilgisini çektik
  var decodedToken = TokenService.DecodeAccessToken(accessToken);
  // accessToken'dan decode edilen role
  const userRoles = decodedToken.role.split(",");
  console.log("userRoles", userRoles);

  let result = false;

  for (const roleName of roleNames) {
    if (userRoles.includes(roleName)) {
      result = true;
      break;
    }
  }

  console.log("result", result);

  return result;
};

AuthService.UserName = () => localStorage.getItem("username");

AuthService.login = async ({ username, password }, callback) => {
  const param = {
    username,
    password,
    grantType: "password",
  };

  try {
    let response = await BaseHttpService.post(
      "https://localhost:44381/api/tokens",
      param
    );

    console.log("response324234", response);

    if (response.status == 200) {
      const tokenResponse = {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      };

      // decode işlemi ve localStorage Set işlemleri yaparız
      TokenService.setToken(tokenResponse);

      callback({ url: "/" }, null);
    } else if (response.status == 401) {
      callback(null, { message: "Kullanıcı adı veya parola hatalı" });
    }
  } catch (error) {
    callback(null, { message: "Sunucuda bir hata oluştu" });
    console.log("login Error", error);
  }
};

// js tarafında apiden herhangi bir işlem yapmadığımız için sadece tokenları sildiğimiz için senkron tanımladık.
AuthService.logout = (callback) => {
  TokenService.clearToken(); // token sil
  callback({ url: "/login" }); // login sayfasına yönlendir
};
