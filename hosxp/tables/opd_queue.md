# `opd_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_queue_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| opd_department_id | int(11) | YES | MUL | NULL |  |  |
| queue_no | int(11) | YES |  | NULL |  |  |
| queue_time | datetime | YES |  | NULL |  |  |
| next_dep | char(3) | YES |  | NULL |  |  |
| queue_date | date | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| depcode | varchar(3) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode_vn | vn | no | 1 |
| ix_depcode_vn | depcode | no | 2 |
| ix_depcode_vn_index | depcode | no | 1 |
| ix_depcode_vn_index | vn | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_opd_department_id | opd_department_id | no | 1 |
| ix_unique | queue_date | yes | 1 |
| ix_unique | opd_department_id | yes | 2 |
| ix_unique | queue_no | yes | 3 |
| ix_unique_index | opd_department_id | yes | 1 |
| ix_unique_index | queue_date | yes | 2 |
| ix_unique_index | queue_no | yes | 3 |
| ix_vn | vn | no | 1 |
| PRIMARY | opd_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
