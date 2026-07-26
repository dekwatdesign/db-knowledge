# `dental_month_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_month_report_id | int(11) | NO | PRI | 0 |  |  |
| dental_report_id | int(11) | YES | MUL | NULL |  |  |
| report_year | int(11) | YES |  | NULL |  |  |
| report_month | int(11) | YES |  | NULL |  |  |
| report_value | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_report_id | dental_report_id | no | 1 |
| ix_dental_report_id_month_year | dental_report_id | no | 1 |
| ix_dental_report_id_month_year | report_year | no | 2 |
| ix_dental_report_id_month_year | report_month | no | 3 |
| ix_dental_report_id_month_year_index | dental_report_id | no | 1 |
| ix_dental_report_id_month_year_index | report_month | no | 2 |
| ix_dental_report_id_month_year_index | report_year | no | 3 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dental_month_report_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "dental_month_report_id": 14,
    "dental_report_id": 1,
    "report_year": 2556,
    "report_month": 5,
    "report_value": 34,
    "hos_guid": "",
    "hospcode": null
  }
]
```
