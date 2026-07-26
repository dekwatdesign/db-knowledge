# `social_act_assistant`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_act_assistant_id | int(11) | NO | PRI | 0 |  |  |
| social_activity_list_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| social_position_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdoctor20 | doctor_code | no | 1 |
| ix_Refsocial_activity_list19 | social_activity_list_id | no | 1 |
| PRIMARY | social_act_assistant_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
