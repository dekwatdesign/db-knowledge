# `lab_bethesda_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bethesda_detail_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| bethesda_report_id | char(3) | YES |  | NULL |  |  |
| detail_text | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| lab_order_number | lab_order_number | no | 1 |
| PRIMARY | bethesda_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
