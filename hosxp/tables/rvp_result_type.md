# `rvp_result_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_result_type_code | varchar(10) | NO | PRI |  |  |  |
| rvp_result_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_rvp_result_type_name | rvp_result_type_name | yes | 1 |
| PRIMARY | rvp_result_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rvp_result_type_code": "0",
    "rvp_result_type_name": "รหัส รพ. หรือ รหัสผ่านไม่ถูกต้อง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvp_result_type_code": "1",
    "rvp_result_type_name": "รับแจ้งซ้ำ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvp_result_type_code": "10",
    "rvp_result_type_name": "Visit Number เป็นค่าว่าง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvp_result_type_code": "11",
    "rvp_result_type_name": "ไม่ให้ทำการ Re-Send เนื่องจากสถานะความคุ้มครองไม่ใช่รอตรวจสอบ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvp_result_type_code": "2",
    "rvp_result_type_name": "มีข้อมูลบางฟิลล์เป็นช่องว่าง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvp_result_type_code": "3",
    "rvp_result_type_name": "วันที่ส่งข้อมูล ไม่ถูกต้อง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvp_result_type_code": "4",
    "rvp_result_type_name": "วันที่รับแจ้ง ไม่ถูกต้อง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvp_result_type_code": "5",
    "rvp_result_type_name": "วันเกิดเหตุ ไม่ถูกต้อง",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
