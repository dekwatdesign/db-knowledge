# `lab_specimen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_specimen_number | int(11) | NO | PRI | 0 |  |  |
| lab_specimen_type | int(11) | YES |  | NULL |  |  |
| lab_specimen_sample_date | date | YES |  | NULL |  |  |
| lab_specimen_sample_time | time | YES |  | NULL |  |  |
| lab_specimen_staff | varchar(100) | YES |  | NULL |  |  |
| lab_order_number | int(11) | YES |  | NULL |  |  |
| lab_items_number | int(11) | YES |  | NULL |  |  |
| lab_process_status | char(1) | YES |  | NULL |  |  |
| lab_specimen_barcode | varchar(25) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| lab_order_number_list | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | lab_specimen_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
