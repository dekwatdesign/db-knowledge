# `nhso_token`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cid | varchar(13) | NO | PRI |  |  |  |
| token | varchar(4000) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| is_invalid | char(1) | YES | MUL | NULL |  |  |
| refresh_token | varchar(4000) | YES |  | NULL |  |  |
| access_token_expire | datetime | YES |  | NULL |  |  |
| refresh_token_expire | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_is_invalid | is_invalid | no | 1 |
| PRIMARY | cid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "cid": "1xxxxxxxxxxxx",
    "token": "rj22b9gp8yb2szad",
    "update_datetime": "2021-01-05 08:37:33",
    "is_invalid": "N",
    "refresh_token": null,
    "access_token_expire": null,
    "refresh_token_expire": null
  },
  {
    "cid": "1xxxxxxxxxxxx",
    "token": "bb663c2e-6543-4dc5-891c-3b06ae9c9435",
    "update_datetime": "2024-05-24 11:02:39",
    "is_invalid": "N",
    "refresh_token": null,
    "access_token_expire": null,
    "refresh_token_expire": null
  }
]
```
