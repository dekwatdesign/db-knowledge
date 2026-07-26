# `tb_mdr_alert`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_order_number | int(12) | NO | PRI | 0 |  |  |
| an | varchar(15) | NO | PRI |  |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| ward | char(2) | YES |  | NULL |  |  |
| ward_name | varchar(100) | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| report_time | time | YES |  | NULL |  |  |
| mdr_alert_type | varchar(150) | NO | PRI |  |  |  |
| mdr_alert_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| mdr_alert_status | char(2) | YES |  | NULL |  |  |
| line_alert_datetime | datetime | YES |  | NULL |  |  |
| line_alert_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lab_order_number | yes | 1 |
| PRIMARY | an | yes | 2 |
| PRIMARY | hn | yes | 3 |
| PRIMARY | mdr_alert_datetime | yes | 4 |
| PRIMARY | mdr_alert_type | yes | 5 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
