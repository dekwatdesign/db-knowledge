# `education`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| education | char(1) | NO | PRI |  |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| provis_code | varchar(4) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | education | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "education": "0",
    "name": "ไม่ทราบ",
    "hos_guid": null,
    "provis_code": "9"
  },
  {
    "education": "1",
    "name": "ประถมต้น",
    "hos_guid": null,
    "provis_code": "2"
  },
  {
    "education": "2",
    "name": "ประถมปลาย",
    "hos_guid": null,
    "provis_code": "2"
  },
  {
    "education": "3",
    "name": "มัธยมต้น",
    "hos_guid": null,
    "provis_code": "3"
  },
  {
    "education": "4",
    "name": "มัธยมปลาย",
    "hos_guid": null,
    "provis_code": "4"
  },
  {
    "education": "5",
    "name": "อนุปริญญา",
    "hos_guid": null,
    "provis_code": "5"
  },
  {
    "education": "6",
    "name": "ปริญญาตรี",
    "hos_guid": null,
    "provis_code": "5"
  },
  {
    "education": "7",
    "name": "ปริญญาโท",
    "hos_guid": null,
    "provis_code": "6"
  }
]
```
