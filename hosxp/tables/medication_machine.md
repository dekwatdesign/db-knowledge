# `medication_machine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medication_machine_id | int(11) | NO | PRI | 0 |  |  |
| medication_machine_name | varchar(150) | YES | UNI | NULL |  |  |
| medication_machine_code | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | medication_machine_name | yes | 1 |
| PRIMARY | medication_machine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
