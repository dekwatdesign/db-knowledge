# `edoc_department_receive`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_department_receive_id | int(11) | NO | PRI | 0 |  |  |
| edoc_id | int(11) | YES | MUL | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| receive_datetime | datetime | YES |  | NULL |  |  |
| receive_staff | varchar(25) | YES |  | NULL |  |  |
| receive_no | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | edoc_id | yes | 1 |
| ix_unique | hospital_department_id | yes | 2 |
| PRIMARY | edoc_department_receive_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
