# `edoc_activity_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_activity_id | int(11) | NO | PRI | 0 |  |  |
| edoc_id | int(11) | YES | MUL | NULL |  |  |
| edoc_command_id | int(11) | YES |  | NULL |  |  |
| edoc_activity_datetime | datetime | YES |  | NULL |  |  |
| edoc_activity_detail | text | YES |  | NULL |  |  |
| edoc_activity_date | date | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| loginname | varchar(50) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| edoc_id | edoc_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| loginname | loginname | no | 1 |
| PRIMARY | edoc_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
