# `user_var_text`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| user_var_text_id | int(11) | NO | PRI | 0 |  |  |
| loginname | varchar(200) | YES | MUL | NULL |  |  |
| var_name | varchar(250) | YES |  | NULL |  |  |
| var_value | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_loginname | loginname | no | 1 |
| ix_user_name | loginname | no | 1 |
| ix_user_name | var_name | no | 2 |
| PRIMARY | user_var_text_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "user_var_text_id": 1,
    "loginname": "chatchawal",
    "var_name": "SMART_HEALTH_TOKEN",
    "var_value": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0YW8uY2hhdGNoYXdhbEBnbWFpbC5jb20iLCJyb2xlcyI6WyJMS18wMDAyM18wMzRfMDEiLCJMS18wMDAyM18wMDhfMDEiLCJOSFNPIiwiUEVSU09OIiwiRFJVR0FMTEVSR1kiLCJJTU1JR1JBVElPTiIsIkxLXzAwMDIzXzAyN18wMSIsIkFERFJFU1MiLCJMS18wMDAyM18wMDNfMDEiLCJMS18wMDAyM18wMDFfMDEiLCJBRERSRVNTX1dJVEhfVFlQRSIsIkxLXzAwMjI2XzAwMV8wMSJdLCJpYXQiOjE2MjA5MDM5NzYsImV4cCI6MTYyMDkyNTE5OX0.SIT0dVH_vwgvjtjJBdJWSkvcpAfY-18FKB00DZOSm_c"
  },
  {
    "user_var_text_id": 2,
    "loginname": "regis11",
    "var_name": "SMART_HEALTH_TOKEN",
    "var_value": null
  },
  {
    "user_var_text_id": 3,
    "loginname": "yuwa265",
    "var_name": "SMART_HEALTH_TOKEN",
    "var_value": null
  },
  {
    "user_var_text_id": 0,
    "loginname": "yuwa254",
    "var_name": "SMART_HEALTH_TOKEN",
    "var_value": null
  },
  {
    "user_var_text_id": 4,
    "loginname": "yuwa276",
    "var_name": "SMART_HEALTH_TOKEN",
    "var_value": null
  }
]
```
