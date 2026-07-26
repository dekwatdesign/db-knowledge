# `drugitems_pat_condition`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_pat_condition_id | int(11) | NO | PRI | 0 |  |  |
| patient_condition_type_id | int(11) | YES |  | NULL |  |  |
| condition_alert_note_text | text | YES |  | NULL |  |  |
| condition_alert_note_rtf | text | YES |  | NULL |  |  |
| ingredient_name | varchar(200) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ign | ingredient_name | no | 1 |
| PRIMARY | drugitems_pat_condition_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
