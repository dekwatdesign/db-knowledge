# `dt_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| dt_list | varchar(250) | YES |  | NULL |  |  |
| count_in_year | int(11) | YES |  | NULL |  |  |
| count_in_month | int(11) | YES |  | NULL |  |  |
| count_in_day | int(11) | YES |  | NULL |  |  |
| dental_note | text | YES |  | NULL |  |  |
| refer_in | char(1) | YES |  | NULL |  |  |
| refer_out | char(1) | YES |  | NULL |  |  |
| refer_in_hospcode | varchar(9) | YES |  | NULL |  |  |
| refer_out_hospcode | varchar(9) | YES |  | NULL |  |  |
| pregnancy | char(1) | YES |  | NULL |  |  |
| pregnancy_caries_count | int(11) | YES |  | NULL |  |  |
| pregnancy_gingivitis | char(1) | YES |  | NULL |  |  |
| pregnancy_calculus | char(1) | YES |  | NULL |  |  |
| pregnancy_checkup | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| dental_in_datetime | datetime | YES |  | NULL |  |  |
| dental_out_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "541007092204",
    "dt_list": "",
    "count_in_year": 0,
    "count_in_month": 0,
    "count_in_day": null,
    "dental_note": null,
    "refer_in": null,
    "refer_out": null,
    "refer_in_hospcode": null,
    "refer_out_hospcode": null,
    "pregnancy": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "dental_in_datetime": null,
    "dental_out_datetime": null
  },
  {
    "vn": "541007161014",
    "dt_list": "",
    "count_in_year": 0,
    "count_in_month": 0,
    "count_in_day": null,
    "dental_note": null,
    "refer_in": null,
    "refer_out": null,
    "refer_in_hospcode": null,
    "refer_out_hospcode": null,
    "pregnancy": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "dental_in_datetime": null,
    "dental_out_datetime": null
  },
  {
    "vn": "541007162855",
    "dt_list": "",
    "count_in_year": 0,
    "count_in_month": 0,
    "count_in_day": null,
    "dental_note": null,
    "refer_in": null,
    "refer_out": null,
    "refer_in_hospcode": null,
    "refer_out_hospcode": null,
    "pregnancy": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "dental_in_datetime": null,
    "dental_out_datetime": null
  },
  {
    "vn": "541007171750",
    "dt_list": "",
    "count_in_year": 0,
    "count_in_month": 0,
    "count_in_day": null,
    "dental_note": null,
    "refer_in": null,
    "refer_out": null,
    "refer_in_hospcode": null,
    "refer_out_hospcode": null,
    "pregnancy": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "dental_in_datetime": null,
    "dental_out_datetime": null
  },
  {
    "vn": "541007172648",
    "dt_list": "",
    "count_in_year": 0,
    "count_in_month": 0,
    "count_in_day": null,
    "dental_note": null,
    "refer_in": null,
    "refer_out": null,
    "refer_in_hospcode": null,
    "refer_out_hospcode": null,
    "pregnancy": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "dental_in_datetime": null,
    "dental_out_datetime": null
  },
  {
    "vn": "541007174427",
    "dt_list": "",
    "count_in_year": 0,
    "count_in_month": 0,
    "count_in_day": null,
    "dental_note": null,
    "refer_in": null,
    "refer_out": null,
    "refer_in_hospcode": null,
    "refer_out_hospcode": null,
    "pregnancy": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "dental_in_datetime": null,
    "dental_out_datetime": null
  },
  {
    "vn": "541010115330",
    "dt_list": "ถ่ายภาพรังสี (X-Ray),ถอนฟันที่ยาก (เช่น กรอแบ่งรากฟัน)",
    "count_in_year": 0,
    "count_in_month": 0,
    "count_in_day": null,
    "dental_note": null,
    "refer_in": null,
    "refer_out": null,
    "refer_in_hospcode": null,
    "refer_out_hospcode": null,
    "pregnancy": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "dental_in_datetime": null,
    "dental_out_datetime": null
  },
  {
    "vn": "541010152847",
    "dt_list": "ขูดหินน้ำลาย (หินปูน)",
    "count_in_year": 0,
    "count_in_month": 0,
    "count_in_day": null,
    "dental_note": null,
    "refer_in": null,
    "refer_out": null,
    "refer_in_hospcode": null,
    "refer_out_hospcode": null,
    "pregnancy": null,
    "pregnancy_caries_count": null,
    "pregnancy_gingivitis": null,
    "pregnancy_calculus": null,
    "pregnancy_checkup": null,
    "hos_guid": null,
    "dental_in_datetime": null,
    "dental_out_datetime": null
  }
]
```
