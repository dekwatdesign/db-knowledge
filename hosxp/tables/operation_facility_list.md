# `operation_facility_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_facility_list_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| facility_date | date | YES |  | NULL |  |  |
| facility_time | time | YES |  | NULL |  |  |
| operation_facility_id | int(11) | YES |  | NULL |  |  |
| facility_staff | varchar(50) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_id | operation_id | no | 1 |
| PRIMARY | operation_facility_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
