interface RoutePath {
    PAGE_TOP: string;
    GALLERY: string;
    LOGIN: string;
    PASSWORD_RESET: string;
}
// URLパス用のオブジェクト要素の値の型定義ß


export const routePath: RoutePath = {
  PAGE_TOP : "/",
  GALLERY : "/gallery",
  LOGIN: "/login",
  PASSWORD_RESET: "/password-reset",
}
// ルーティング時のURLパス設定