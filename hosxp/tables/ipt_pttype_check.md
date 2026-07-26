# `ipt_pttype_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_pttype_check_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | UNI | NULL |  |  |
| pttype_check_status_id | int(11) | YES |  | NULL |  |  |
| pttype_check | char(1) | YES |  | NULL |  |  |
| pttype_check_staff | varchar(50) | YES |  | NULL |  |  |
| pttype_check_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | yes | 1 |
| PRIMARY | ipt_pttype_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
