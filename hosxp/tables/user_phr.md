# `user_phr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| user_phr_id | int(11) | NO | PRI | 0 |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| user_phr_cid | varchar(13) | YES | MUL | NULL |  |  |
| user_phr_otp | varchar(150) | YES |  | NULL |  |  |
| user_phr_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | user_phr_cid | no | 1 |
| ix_cid_date | user_phr_cid | no | 1 |
| ix_cid_date | user_phr_datetime | no | 2 |
| PRIMARY | user_phr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
