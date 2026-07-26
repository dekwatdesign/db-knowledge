# `moph_phr_offline`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_phr_offline_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| otp | varchar(10) | YES |  | NULL |  |  |
| payload | longtext | YES |  | NULL |  |  |
| created_datetime | datetime | YES | MUL | NULL |  |  |
| encounter_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_created_datetime | created_datetime | no | 1 |
| PRIMARY | moph_phr_offline_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
