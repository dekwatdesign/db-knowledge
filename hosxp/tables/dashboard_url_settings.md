# `dashboard_url_settings`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dashboard_url_settings_id | int(11) | NO | PRI | 0 |  |  |
| dashboard_url | varchar(200) | YES | UNI | NULL |  |  |
| dashboard_description | varchar(2000) | YES | MUL | NULL |  |  |
| dashboard_vendor | varchar(100) | YES |  | NULL |  |  |
| dashboard_auth_key | varchar(100) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dashboard_url | dashboard_url | yes | 1 |
| ix_description | dashboard_description | no | 1 |
| PRIMARY | dashboard_url_settings_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "dashboard_url_settings_id": 1,
    "dashboard_url": "https://finance-dashboard.bmscloud.in.th/",
    "dashboard_description": "Finance Dashboard",
    "dashboard_vendor": "BMS",
    "dashboard_auth_key": null,
    "update_datetime": null
  },
  {
    "dashboard_url_settings_id": 2,
    "dashboard_url": "ttps://finance-dashboard.bmscloud.in.th",
    "dashboard_description": "Finance Dashboad",
    "dashboard_vendor": "BMS",
    "dashboard_auth_key": null,
    "update_datetime": "2026-06-04 11:29:03"
  }
]
```
