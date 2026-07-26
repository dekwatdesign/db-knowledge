# `physic_group_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_group_doctor_id | int(11) | NO | PRI | 0 |  |  |
| physic_group_id | int(11) | YES | MUL | NULL |  |  |
| doctor | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_group_id | physic_group_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | physic_group_id | yes | 1 |
| ix_unique | doctor | yes | 2 |
| ix_unique_index | doctor | yes | 1 |
| ix_unique_index | physic_group_id | yes | 2 |
| PRIMARY | physic_group_doctor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
