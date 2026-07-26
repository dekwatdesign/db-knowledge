# `drug_due_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_due_id | int(11) | NO | PRI | 0 |  |  |
| generic_name | varchar(200) | YES | MUL | NULL |  |  |
| department | char(3) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| entry_date | date | YES | MUL | NULL |  |  |
| indication | text | YES |  | NULL |  |  |
| critical_indicator | text | YES |  | NULL |  |  |
| drug_interaction | text | YES |  | NULL |  |  |
| contra_indication | text | YES |  | NULL |  |  |
| dosage | text | YES |  | NULL |  |  |
| administration | text | YES |  | NULL |  |  |
| duration | text | YES |  | NULL |  |  |
| outcome_measure | text | YES |  | NULL |  |  |
| complication | text | YES |  | NULL |  |  |
| adverse_drug_reaction | text | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| drug_due_xe_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| department | department | no | 1 |
| doctor | doctor | no | 1 |
| entry_date | entry_date | no | 1 |
| generic_name | generic_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_xe_id | drug_due_xe_id | no | 1 |
| PRIMARY | drug_due_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
