# `edoc_revolve_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_revolve_list_id | int(11) | NO | PRI | 0 |  |  |
| edoc_id | int(11) | YES | MUL | NULL |  |  |
| from_hospital_department_id | int(11) | YES |  | NULL |  |  |
| to_hospital_department_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| edoc_revolve_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_edoc_id | edoc_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_to_hospitaldepid | to_hospital_department_id | no | 1 |
| PRIMARY | edoc_revolve_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
