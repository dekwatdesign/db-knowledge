# `oapp_cancel_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_cancel_type_id | int(11) | NO | PRI | 0 |  |  |
| oapp_cancel_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_oapp_cancel_type_name | oapp_cancel_type_name | yes | 1 |
| PRIMARY | oapp_cancel_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "oapp_cancel_type_id": 1,
    "oapp_cancel_type_name": "ผู้ป่วยแจ้งยกเลิก",
    "hos_guid": null
  },
  {
    "oapp_cancel_type_id": 2,
    "oapp_cancel_type_name": "ผู้ป่วยไม่มาตามนัด",
    "hos_guid": null
  },
  {
    "oapp_cancel_type_id": 3,
    "oapp_cancel_type_name": "แพทย์ผู้นัดยกเลิกนัด",
    "hos_guid": null
  }
]
```
