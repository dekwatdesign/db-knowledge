# `pharm_lab_gene_critical`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharm_lab_gene_critical_id | int(11) | NO | PRI | 0 |  |  |
| pharm_lab_gene_critical_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | pharm_lab_gene_critical_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "pharm_lab_gene_critical_id": 1,
    "pharm_lab_gene_critical_name": "Normal Risk"
  },
  {
    "pharm_lab_gene_critical_id": 2,
    "pharm_lab_gene_critical_name": "High Risk"
  }
]
```
