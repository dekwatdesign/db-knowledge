# `ipd_vaccine_reaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_vaccine_reaction_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(12) | YES | MUL | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| reaction_text | text | YES |  | NULL |  |  |
| vaccine_reaction_type_id | int(11) | YES |  | NULL |  |  |
| vaccine_allergy_symptom_id | int(11) | YES |  | NULL |  |  |
| vaccine_allergy_stage_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | ipd_vaccine_reaction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
