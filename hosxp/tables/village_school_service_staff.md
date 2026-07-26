# `village_school_service_staff`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_school_service_staff_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| village_school_service_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_school_service_id | village_school_service_id | no | 1 |
| PRIMARY | village_school_service_staff_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
