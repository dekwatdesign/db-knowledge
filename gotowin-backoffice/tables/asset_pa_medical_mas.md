# `asset_pa_medical_mas`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| AR_TOOLS_ID | int | NO | PRI | NULL | auto_increment |  |
| AR_TOOLS_NAME | varchar(255) | YES |  |  |  |  |
| RANGE_VALUE | varchar(30) | YES |  |  |  |  |
| RANGE_ACCEPT | varchar(30) | YES |  |  |  |  |
| UNIT_NAME | varchar(20) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | AR_TOOLS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "AR_TOOLS_ID": 1,
    "AR_TOOLS_NAME": "เครื่องวัดความดันโลหิตแบบอนาล๊อก",
    "RANGE_VALUE": "50-200",
    "RANGE_ACCEPT": "+/-4",
    "UNIT_NAME": "mmHg",
    "updated_at": null,
    "created_at": null
  },
  {
    "AR_TOOLS_ID": 2,
    "AR_TOOLS_NAME": "เครื่องวัดความดันโลหิตแบบดิจิตตอล",
    "RANGE_VALUE": "50-200",
    "RANGE_ACCEPT": "+/-4",
    "UNIT_NAME": "mmHg",
    "updated_at": null,
    "created_at": null
  },
  {
    "AR_TOOLS_ID": 3,
    "AR_TOOLS_NAME": "เทอร์โมมิเตอร์วัดไข้แบบอนาล๊อก",
    "RANGE_VALUE": "34-38",
    "RANGE_ACCEPT": "+/-1",
    "UNIT_NAME": "C",
    "updated_at": null,
    "created_at": null
  },
  {
    "AR_TOOLS_ID": 4,
    "AR_TOOLS_NAME": "เทอร์โมมิเตอร์วัดไข้แบบดิจิตอล",
    "RANGE_VALUE": "34-38",
    "RANGE_ACCEPT": "+/-1",
    "UNIT_NAME": "C",
    "updated_at": null,
    "created_at": null
  },
  {
    "AR_TOOLS_ID": 5,
    "AR_TOOLS_NAME": "เทอร์โมมิเตอร์วัดในตู้เก็บเวชภัณฑ์แบบอนาล๊อก",
    "RANGE_VALUE": "35-38",
    "RANGE_ACCEPT": "+/-1",
    "UNIT_NAME": "C",
    "updated_at": null,
    "created_at": null
  },
  {
    "AR_TOOLS_ID": 6,
    "AR_TOOLS_NAME": "เทอร์โมมิเตอร์วัดในตู้เก็บเวชภัณฑ์แบบดิจิตอล",
    "RANGE_VALUE": "2-6",
    "RANGE_ACCEPT": "+/-1",
    "UNIT_NAME": "C",
    "updated_at": null,
    "created_at": null
  },
  {
    "AR_TOOLS_ID": 7,
    "AR_TOOLS_NAME": "เทอร์โมมิเตอร์วัดในห้องแบบปรอท",
    "RANGE_VALUE": "20-40",
    "RANGE_ACCEPT": "+/-1",
    "UNIT_NAME": "C",
    "updated_at": null,
    "created_at": null
  },
  {
    "AR_TOOLS_ID": 8,
    "AR_TOOLS_NAME": "เทอร์โมมิเตอร์วัดในห้องแบบดิจิตอล",
    "RANGE_VALUE": "20-40",
    "RANGE_ACCEPT": "+/-1",
    "UNIT_NAME": "C",
    "updated_at": null,
    "created_at": null
  }
]
```
