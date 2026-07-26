# `physic_snmrc_scale`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_snmrc_scale_id | int(11) | NO | PRI | 0 |  |  |
| physic_register_id | char(10) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| physic_snmrc_scale_value | double(15,2) | YES |  | NULL |  |  |
| physic_snmrc_scale_assessor | varchar(15) | YES |  | NULL |  |  |
| physic_snmrc_scale_day | date | YES |  | NULL |  |  |
| physic_snmrc_scale_date | date | YES |  | NULL |  |  |
| physic_snmrc_scale_lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| physic_evaluation_topic_id | int(11) | YES |  | NULL |  |  |
| physic_snmrc_result_id | int(11) | YES |  | NULL |  |  |
| physic_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refphysic_register11 | physic_register_id | no | 1 |
| PRIMARY | physic_snmrc_scale_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
