# `physic_template_con_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_template_con_detail_id | int(11) | NO | PRI | 0 |  |  |
| physic_template_con_id | int(11) | YES | MUL | NULL |  |  |
| physic_consult_for_id | char(10) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refphysic_consult_for46 | physic_consult_for_id | no | 1 |
| ix_Refphysic_template_con45 | physic_template_con_id | no | 1 |
| PRIMARY | physic_template_con_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
