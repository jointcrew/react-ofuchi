interface RoutePath {
    ROOT: string,
    PAGE_TOP: string;
    GALLERY: string;
    LOGIN: string;
    PASSWORD_RESET: string;
}
// URLパス用のオブジェクト要素の値の型定義


export const routePath: RoutePath = {
  ROOT : "/",
  PAGE_TOP : "/top",
  GALLERY : "/gallery",
  LOGIN: "/login",
  PASSWORD_RESET: "/password-reset",
}
// ルーティング時のURLパス設定