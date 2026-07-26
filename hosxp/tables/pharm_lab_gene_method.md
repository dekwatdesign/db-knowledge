# `pharm_lab_gene_method`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharm_lab_gene_method_id | int(11) | NO | PRI | 0 |  |  |
| pharm_lab_gene_method_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | pharm_lab_gene_method_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pharm_lab_gene_method_id": 1,
    "pharm_lab_gene_method_name": "PCR SSO"
  },
  {
    "pharm_lab_gene_method_id": 2,
    "pharm_lab_gene_method_name": "Realtime-PCR"
  },
  {
    "pharm_lab_gene_method_id": 3,
    "pharm_lab_gene_method_name": "Immune stain"
  },
  {
    "pharm_lab_gene_method_id": 4,
    "pharm_lab_gene_method_name": "High resolution"
  },
  {
    "pharm_lab_gene_method_id": 5,
    "pharm_lab_gene_method_name": "Low resolution"
  },
  {
    "pharm_lab_gene_method_id": 6,
    "pharm_lab_gene_method_name": "Immunoassay"
  },
  {
    "pharm_lab_gene_method_id": 7,
    "pharm_lab_gene_method_name": "NAA with probe detection"
  },
  {
    "pharm_lab_gene_method_id": 8,
    "pharm_lab_gene_method_name": "Sequencing"
  }
]
```
