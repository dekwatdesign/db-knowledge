# `ipt_chart_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_chart_scan_id | int(11) | NO | PRI | 0 |  |  |
| ipt_chart_scan_type_id | int(11) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| scan_data | longblob | YES |  | NULL |  |  |
| scan_datetime | datetime | YES |  | NULL |  |  |
| image_type | char(3) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | ipt_chart_scan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
