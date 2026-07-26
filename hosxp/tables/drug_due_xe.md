# `drug_due_xe`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_due_xe_id | int(11) | NO | PRI | 0 |  |  |
| generic_name | varchar(200) | YES | UNI | NULL |  |  |
| due_note | text | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| indication_check | char(1) | YES |  | NULL |  |  |
| critical_indicator_check | char(1) | YES |  | NULL |  |  |
| drug_interaction_check | char(1) | YES |  | NULL |  |  |
| contra_indication_check | char(1) | YES |  | NULL |  |  |
| dosage_check | char(1) | YES |  | NULL |  |  |
| administration_check | char(1) | YES |  | NULL |  |  |
| duration_check | char(1) | YES |  | NULL |  |  |
| outcome_measure_check | char(1) | YES |  | NULL |  |  |
| complication_check | char(1) | YES |  | NULL |  |  |
| adverse_drug_reaction_check | char(1) | YES |  | NULL |  |  |
| universal_form_id | int(11) | YES |  | NULL |  |  |
| show_ue | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_generic_name | generic_name | yes | 1 |
| PRIMARY | drug_due_xe_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
