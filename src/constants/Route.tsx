interface RoutePath {
    PAGE_DEFAULT: string,
    PAGE_TOP: string;
    GALLERY: string;
    LOGIN: string;
    PASSWORD_RESET: string;
}
// URLパス用のオブジェクト要素の値の型定義


export const routePath: RoutePath = {
  PAGE_DEFAULT: "/",
  PAGE_TOP : "/top",
  GALLERY : "/gallery",
  LOGIN: "/login",
  PASSWORD_RESET: "/password-reset",
}
// ルーティング時のURLパス設定