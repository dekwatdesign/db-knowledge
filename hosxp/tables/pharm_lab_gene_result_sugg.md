# `pharm_lab_gene_result_sugg`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharm_lab_gene_result_sugg_id | int(11) | NO | PRI | 0 |  |  |
| pharm_lab_gene_result_id | int(11) | YES | MUL | NULL |  |  |
| pharm_lab_gene_suggest_id | int(11) | YES | MUL | NULL |  |  |
| hn | char(9) | YES |  | NULL |  |  |
| drugitems_lab_notify_id | int(11) | YES |  | NULL |  |  |
| no_alert | char(10) | YES |  | NULL |  |  |
| force_no_order | char(10) | YES |  | NULL |  |  |
| pharm_lab_gene_result_sugg_txt | varchar(250) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| tpu_code | varchar(25) | YES |  | NULL |  |  |
| substance_code | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pharm_lab_gene_result_id | pharm_lab_gene_result_id | no | 1 |
| ix_pharm_lab_gene_suggest_id | pharm_lab_gene_suggest_id | no | 1 |
| PRIMARY | pharm_lab_gene_result_sugg_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
