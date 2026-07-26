# `drug_due_cri`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_due_cri_id | int(11) | NO | PRI | 0 |  |  |
| drug_due_id | int(11) | YES |  | NULL |  |  |
| drug_due_cri_type_id | int(11) | YES |  | NULL |  |  |
| drug_due_cri_min | double(15,3) | YES |  | NULL |  |  |
| drug_due_cri_max | double(15,3) | YES |  | NULL |  |  |
| drug_due_alert_text | longtext | YES |  | NULL |  |  |
| lock_qty | char(1) | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | drug_due_cri_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
