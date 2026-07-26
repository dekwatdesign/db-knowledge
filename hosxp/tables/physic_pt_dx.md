# `physic_pt_dx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pt_dx_id | int(11) | NO | PRI | 0 |  |  |
| physic_pt_dx_name | varchar(255) | YES | MUL | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_pt_dx_name | physic_pt_dx_name | no | 1 |
| PRIMARY | physic_pt_dx_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
