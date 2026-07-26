# `drug_due_cri_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_due_cri_type_id | int(11) | NO | PRI | 0 |  |  |
| drug_due_cri_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drug_due_cri_type_name | drug_due_cri_type_name | yes | 1 |
| PRIMARY | drug_due_cri_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "drug_due_cri_type_id": 1,
    "drug_due_cri_type_name": "อายุ"
  }
]
```
