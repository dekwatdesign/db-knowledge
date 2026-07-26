# `officer_password_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_password_log_id | int(11) | NO | PRI | 0 |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |
| password_date | date | YES |  | NULL |  |  |
| password_md5 | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_id | officer_id | no | 1 |
| PRIMARY | officer_password_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "officer_password_log_id": 1,
    "officer_id": 18,
    "password_date": "2025-04-09",
    "password_md5": "DB304C0C06222D9C79241E3DBF2E5093"
  }
]
```
