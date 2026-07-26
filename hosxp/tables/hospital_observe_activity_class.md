# `hospital_observe_activity_class`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_observe_activity_class_id | int(11) | NO | PRI | 0 |  |  |
| hospital_observe_activity_id | int(11) | YES | MUL | NULL |  |  |
| hospital_observe_activity_class_no | int(11) | YES |  | NULL |  |  |
| activity_class_begin_date | date | YES |  | NULL |  |  |
| activity_class_end_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hospital_observe_activity_id | hospital_observe_activity_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_observe_activity_class_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
