# `income_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| rcpno_list | varchar(25) | YES |  | NULL |  |  |
| check_date_time | datetime | YES | MUL | NULL |  |  |
| user | varchar(25) | YES | MUL | NULL |  |  |
| income_lock | char(1) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| check_date_time | check_date_time | no | 1 |
| income_lock | income_lock | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |
| user | user | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
