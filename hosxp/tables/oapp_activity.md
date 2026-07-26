# `oapp_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_activity_id | int(11) | NO | PRI | 0 |  |  |
| oapp_activity_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_oapp_activity_name | oapp_activity_name | yes | 1 |
| PRIMARY | oapp_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "oapp_activity_id": 1,
    "oapp_activity_name": "งานรักษาพยาบาล",
    "hos_guid": null
  },
  {
    "oapp_activity_id": 2,
    "oapp_activity_name": "สร้างเสริมภูมิคุ้มกันโรค",
    "hos_guid": null
  },
  {
    "oapp_activity_id": 3,
    "oapp_activity_name": "ฝากครรภ์/ตรวจครรภ์",
    "hos_guid": null
  },
  {
    "oapp_activity_id": 4,
    "oapp_activity_name": "คลอด/หลังคลอด",
    "hos_guid": null
  },
  {
    "oapp_activity_id": 5,
    "oapp_activity_name": "วางแผนครอบครัว",
    "hos_guid": null
  },
  {
    "oapp_activity_id": 6,
    "oapp_activity_name": "ทารกหลังคลอด",
    "hos_guid": null
  },
  {
    "oapp_activity_id": 7,
    "oapp_activity_name": "โภชนาการ",
    "hos_guid": null
  },
  {
    "oapp_activity_id": 8,
    "oapp_activity_name": "แพทย์แผนไทย",
    "hos_guid": null
  }
]
```
