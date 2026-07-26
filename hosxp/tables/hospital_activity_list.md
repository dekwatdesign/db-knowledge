# `hospital_activity_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_activity_list_id | int(11) | NO | PRI | 0 |  |  |
| hospital_activity_id | int(11) | YES |  | NULL |  |  |
| activity_date | date | YES |  | NULL |  |  |
| activity_staff | varchar(50) | YES |  | NULL |  |  |
| activity_note | text | YES |  | NULL |  |  |
| person_count | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_activity_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
