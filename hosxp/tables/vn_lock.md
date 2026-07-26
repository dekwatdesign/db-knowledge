# `vn_lock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(50) | NO | PRI |  |  |  |
| lock_date_time | datetime | YES | MUL | NULL |  |  |
| lock_computer | varchar(50) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| lock_staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_lock_date_time | lock_date_time | no | 1 |
| ix_vn_lc | vn | no | 1 |
| ix_vn_lc | lock_computer | no | 2 |
| ix_vn_lc_index | lock_computer | no | 1 |
| ix_vn_lc_index | vn | no | 2 |
| lock_computer | lock_computer | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
