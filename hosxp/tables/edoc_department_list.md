# `edoc_department_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_department_list_id | int(11) | NO | PRI | 0 |  |  |
| edoc_id | int(11) | YES | MUL | NULL |  |  |
| hospital_department_id | int(11) | YES | MUL | NULL |  |  |
| user_accept | char(1) | YES |  | NULL |  |  |
| edoc_send_id | int(11) | YES |  | NULL |  |  |
| edoc_activity_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| edoc_activity_id | edoc_activity_id | no | 1 |
| edoc_id | edoc_id | no | 1 |
| hospital_department_id | hospital_department_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_department_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
