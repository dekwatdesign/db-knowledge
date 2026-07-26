# `handicapped_hhc_activity_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_activity_list_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_hhc_activity_list_status | char(2) | YES |  | NULL |  |  |
| handicapped_hhc_activity_list_problem | char(50) | YES | MUL | NULL |  |  |
| handicapped_hhc_activity_list_note | char(50) | YES |  | NULL |  |  |
| handicapped_hhc_id | char(11) | YES |  | NULL |  |  |
| handicapped_hhc_activity_id | char(11) | YES |  | NULL |  |  |
| handicapped_hhc_activity_note | char(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refhandicapped_hhc_activity47 | handicapped_hhc_activity_list_problem | no | 1 |
| PRIMARY | handicapped_hhc_activity_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
