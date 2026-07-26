# `dw_report_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_report_type_id | int(11) | NO | PRI | 0 |  |  |
| dw_report_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dw_report_type_name | dw_report_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dw_report_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "dw_report_type_id": 1,
    "dw_report_type_name": "รายงาน 0110 รง.5",
    "hos_guid": null
  },
  {
    "dw_report_type_id": 2,
    "dw_report_type_name": "รายงานผู้ป่วยนอกตามกลุ่มสาเหตุ 21 กลุ่มโรค",
    "hos_guid": null
  }
]
```
