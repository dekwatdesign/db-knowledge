# `tb_hhc_picture_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_hhc_picture_visit_id | int(11) | NO | PRI | 0 |  |  |
| tb_hhc_plan_drug_id | int(11) | YES |  | NULL |  |  |
| tb_hhc_picture_visit | longblob | YES |  | NULL |  |  |
| tb_hhc_picture_visit_date | date | YES |  | NULL |  |  |
| tb_hhc_picture_visit_detail | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_hhc_picture_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
