# `er_nursing_visit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| visit_type | char(1) | NO | PRI |  |  |  |
| visit_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| export_code | varchar(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_visit_name | visit_name | yes | 1 |
| PRIMARY | visit_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "visit_type": "1",
    "visit_name": "มาเอง",
    "hos_guid": "{F21762CA-F738-11E0-AE1B-5ED510CFDEEA}",
    "hos_guid_ext": "321794601564436509719892508689805860586",
    "export_code": "01"
  },
  {
    "visit_type": "2",
    "visit_name": "ส่งต่อจากสถานพยาบาลอื่นๆ",
    "hos_guid": "{F2176458-F738-11E0-AE1B-5ED510CFDEEA}",
    "hos_guid_ext": "321794633097245190397098870920298094314",
    "export_code": "07"
  },
  {
    "visit_type": "3",
    "visit_name": "ส่งตัวโดย First responder",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "02"
  },
  {
    "visit_type": "4",
    "visit_name": "ส่งตัวโดย BLS",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "03"
  },
  {
    "visit_type": "5",
    "visit_name": "ส่งตัวโดย ILS",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "04"
  },
  {
    "visit_type": "6",
    "visit_name": "ส่งตัวดดย ALS",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "05"
  },
  {
    "visit_type": "7",
    "visit_name": "อื่นๆ",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "07"
  },
  {
    "visit_type": "9",
    "visit_name": "ไม่ทราบ",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "09"
  }
]
```
