# `pharm_lab_gene_suggest`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharm_lab_gene_suggest_id | int(11) | NO | PRI | 0 |  |  |
| pharm_lab_gene_effect_id | int(11) | YES | MUL | NULL |  |  |
| tmlt_code | varchar(6) | YES |  | NULL |  |  |
| gene_name | varchar(250) | YES |  | NULL |  |  |
| agent | varchar(250) | YES |  | NULL |  |  |
| pharm_lab_gene_suggest_th | text | YES |  | NULL |  |  |
| pharm_lab_gene_suggest_en | text | YES |  | NULL |  |  |
| substance_code | varchar(6) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_iu_pharm_lab_gene_effect_id_tmlt_code_substance_code | pharm_lab_gene_effect_id | yes | 1 |
| ix_iu_pharm_lab_gene_effect_id_tmlt_code_substance_code | substance_code | yes | 2 |
| ix_iu_pharm_lab_gene_effect_id_tmlt_code_substance_code | tmlt_code | yes | 3 |
| ix_pharm_lab_gene_effect_id_tmlt_code | pharm_lab_gene_effect_id | no | 1 |
| ix_pharm_lab_gene_effect_id_tmlt_code | tmlt_code | no | 2 |
| ix_substance_code | substance_code | no | 1 |
| PRIMARY | pharm_lab_gene_suggest_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
