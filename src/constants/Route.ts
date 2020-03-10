interface RoutePath {
    PAGE_TOP: string;
    GALLERY: string;
    LOGIN: string;
    PASSWORD_RESET: string;
    TABLE_LIST: string;
    DETAIL: string;
}
// URLパス用のオブジェクト要素の値の型定義


export const routePath: RoutePath = {
  PAGE_TOP : "/top",
  GALLERY : "/gallery",
  LOGIN: "/login",
  PASSWORD_RESET: "/password-reset",
  TABLE_LIST: "/list",
  DETAIL: "/detail"
}
// ルーティング時のURLパス設定