# `pharm_lab_gene_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharm_lab_gene_result_id | int(11) | NO | PRI | 0 |  |  |
| pharm_lab_gene_result_text | longtext | YES |  | NULL |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| tmlt_code | varchar(6) | YES |  | NULL |  |  |
| pharm_lab_gene_effect_id | int(11) | YES |  | NULL |  |  |
| pharm_lab_gene_critical_id | int(11) | YES |  | NULL |  |  |
| pharm_lab_gene_method_id | int(11) | YES |  | NULL |  |  |
| order_date | date | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| staff | varchar(250) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| pharm_lab_gene_result_note | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_items_code | lab_items_code | no | 1 |
| ix_lab_order_number | lab_order_number | no | 1 |
| PRIMARY | pharm_lab_gene_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
