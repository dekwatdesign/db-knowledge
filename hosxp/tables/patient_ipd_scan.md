# `patient_ipd_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| image | longblob | YES |  | NULL |  |  |
| scan_date_time | datetime | YES | MUL | NULL |  |  |
| staff | varchar(20) | YES | MUL | NULL |  |  |
| page_no | int(11) | YES |  | NULL |  |  |
| patient_ipd_scan_id | int(11) | NO | PRI | 0 |  |  |
| thumbnail | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| an_page_no_unique | an | yes | 1 |
| an_page_no_unique | page_no | yes | 2 |
| hn | hn | no | 1 |
| PRIMARY | patient_ipd_scan_id | yes | 1 |
| scan_date_time | scan_date_time | no | 1 |
| staff | staff | no | 1 |
| vstdate | vstdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
