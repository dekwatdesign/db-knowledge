# `web_user`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| user_name | varchar(100) | NO | PRI |  |  |  |
| user_password | varchar(200) | YES |  | NULL |  |  |
| user_picture | blob | YES |  | NULL |  |  |
| admin_access | char(1) | YES |  | NULL |  |  |
| report_access | char(1) | YES |  | NULL |  |  |
| sql_access | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | user_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "user_name": "[MASKED_FULLNAME]",
    "user_password": "admin",
    "user_picture": null,
    "admin_access": "Y",
    "report_access": "Y",
    "sql_access": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "user_name": "[MASKED_FULLNAME]",
    "user_password": "1234",
    "user_picture": null,
    "admin_access": null,
    "report_access": "Y",
    "sql_access": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
