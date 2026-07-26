# `pharm_lab_gene_effect`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharm_lab_gene_effect_id | int(11) | NO | PRI | 0 |  |  |
| pharm_lab_gene_effect_name | varchar(255) | YES | MUL | NULL |  |  |
| pharm_lab_gene_effect_phenotype | varchar(255) | YES |  | NULL |  |  |
| tmlt_code | varchar(6) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_iu_tmlt_code_pharm_lab_gene_effect_name | pharm_lab_gene_effect_name | yes | 1 |
| ix_iu_tmlt_code_pharm_lab_gene_effect_name | tmlt_code | yes | 2 |
| ix_tmlt_code | tmlt_code | no | 1 |
| PRIMARY | pharm_lab_gene_effect_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "pharm_lab_gene_effect_id": 1,
    "pharm_lab_gene_effect_name": "Positive",
    "pharm_lab_gene_effect_phenotype": null,
    "tmlt_code": ""
  },
  {
    "pharm_lab_gene_effect_id": 2,
    "pharm_lab_gene_effect_name": "Negative",
    "pharm_lab_gene_effect_phenotype": null,
    "tmlt_code": ""
  }
]
```
