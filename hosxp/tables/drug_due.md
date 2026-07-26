# `drug_due`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| generic_name | varchar(200) | NO | PRI |  |  |  |
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
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| drug_due_id | int(11) | YES | MUL | NULL |  |  |
| show_only_pass_cri | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drug_due_id | drug_due_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | generic_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
