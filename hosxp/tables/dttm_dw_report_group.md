# `dttm_dw_report_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dttm_dw_report_group_id | int(11) | NO | PRI | 0 |  |  |
| dttm_dw_report_group_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dttm_dw_report_group_name | dttm_dw_report_group_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dttm_dw_report_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dttm_dw_report_group_id": 1,
    "dttm_dw_report_group_name": "ตรวจวินิจฉัย / ลงบันทึกสุขภาพช่องปาก",
    "hos_guid": null
  },
  {
    "dttm_dw_report_group_id": 2,
    "dttm_dw_report_group_name": "ฝึกปฏิบัติแปรงฟัน / ย้อมสีฟัน",
    "hos_guid": null
  },
  {
    "dttm_dw_report_group_id": 3,
    "dttm_dw_report_group_name": "ให้ทันตสุขศึกษา/แจกแปรงสีฟัน/ฝึกแปรงฟัน แก่มารดาเด็ก / ตรวจฟันเด็กที่มารับวัคซีนหัด",
    "hos_guid": null
  },
  {
    "dttm_dw_report_group_id": 4,
    "dttm_dw_report_group_name": "ให้ทันตสุขศึกษา/แจกแปรงสีฟัน/ฝึกแปรงฟัน แก่มารดาเด็ก / ตรวจฟันเด็กที่มารับวัคซีนดีทีพีเข็มที่ 4",
    "hos_guid": null
  },
  {
    "dttm_dw_report_group_id": 5,
    "dttm_dw_report_group_name": "เด็กที่มารับวัคซีน ได้รับการแปรงฟันก่อนนอน จากผู้ปกครอง",
    "hos_guid": null
  },
  {
    "dttm_dw_report_group_id": 6,
    "dttm_dw_report_group_name": "ทำ Sealant",
    "hos_guid": null
  },
  {
    "dttm_dw_report_group_id": 7,
    "dttm_dw_report_group_name": "ทาฟลูออกไรด์เพื่อป้องกันฟันผุ",
    "hos_guid": null
  },
  {
    "dttm_dw_report_group_id": 8,
    "dttm_dw_report_group_name": "เคลือบฟลูออไรด์",
    "hos_guid": null
  }
]
```
