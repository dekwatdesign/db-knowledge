# `bmi_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bmi_level | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bmi_level | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "bmi_level": 1,
    "name": "ผอม",
    "hos_guid": null
  },
  {
    "bmi_level": 2,
    "name": "ค่อนข้างผอม",
    "hos_guid": null
  },
  {
    "bmi_level": 3,
    "name": "สมส่วน",
    "hos_guid": null
  },
  {
    "bmi_level": 4,
    "name": "ท้วม",
    "hos_guid": null
  },
  {
    "bmi_level": 5,
    "name": "เริ่มอ้วน",
    "hos_guid": null
  },
  {
    "bmi_level": 6,
    "name": "อ้วน",
    "hos_guid": null
  }
]
```
