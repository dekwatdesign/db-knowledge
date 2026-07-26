# `oapp_grant`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_grant_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(10) | YES | MUL | NULL |  |  |
| grant_login | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| PRIMARY | oapp_grant_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "oapp_grant_id": 2,
    "doctor_code": "187",
    "grant_login": "chatchawal"
  }
]
```
