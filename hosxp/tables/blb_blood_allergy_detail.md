# `blb_blood_allergy_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_blood_allergy_detail_id | int(11) | NO | PRI | 0 |  |  |
| blb_blood_items_id | int(11) | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| symptom_date | date | YES |  | NULL |  |  |
| blb_blood_allergy_symptom | text | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| blb_blood_allergy_id | int(11) | YES |  | NULL |  |  |
| blb_reaction_symptom_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_blood_allergy_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
