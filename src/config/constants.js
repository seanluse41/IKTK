// The control plane: the one fixed address. It creates a separate IKTK server
// stack per Kintone domain and returns that stack's endpoint, which the plugin
// saves. Set to the control plane stack's ControlApiUrl output.
export const CONTROL_PLANE_HOST = 'https://ijk1g7lb04.execute-api.ap-northeast-1.amazonaws.com/dev';

// Proves a domain lookup to the control plane, so apps can find a server
// another app in the domain already provisioned without its token. It only
// keeps out callers who don't have the plugin; it is not a credential. Must
// match the control plane's LookupKey parameter (samconfig.toml).
export const LOOKUP_KEY = 'f9218b865b18fd294ef0710a45d026be727bb25ca809515872665be77fa7d4ef';

// The header the domain stack reads this app's API token from. Kintone adds it
// to proxied requests from proxy config; see setAppToken in pluginConfig.js.
export const APP_TOKEN_HEADER = 'X-IKTK-App-Token';

// The repository app is readable only by this group and its creator. Kintone's
// built-in administrators group; made configurable later if anyone asks.
export const ADMIN_GROUP_CODE = 'Administrators';
