# `lab_head_online`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_head_online_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| lab_order_number_online | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| report_ok | char(1) | YES |  | NULL |  |  |
| report_datetime | datetime | YES |  | NULL |  |  |
| report_computer | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_order_number | lab_order_number | no | 1 |
| PRIMARY | lab_head_online_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
